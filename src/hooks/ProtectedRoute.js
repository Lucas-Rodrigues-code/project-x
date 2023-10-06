import React, { useContext } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import AuthContext from "contexts/userContext";

function ProtectedRoute({ component: Component, ...rest }) {
  const history = useHistory();
  const { token, isAuthenticated } = useContext(AuthContext);

  try {
    const decodedToken = jwt_decode(token);
    const isTokenExpired =
      decodedToken && new Date(decodedToken.exp * 1000) < new Date();

    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated && !isTokenExpired ? (
            <Component {...props} />
          ) : (
            <Redirect to="/auth/signIn" />
          )
        }
      />
    );
  } catch (error) {
    history.push("/auth/signIn");
    return <></>;
  }
}

export default ProtectedRoute;