// import
import Home from "views/Home/Home.js";
import Movies from "views/Home/Movies.js";
import Serie from "views/Home/Serie.js";
import Profile from "views/Home/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";

import {
  HomeIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
} from "components/Icons/Icons";

import { RiMovieFill } from "react-icons/ri";
import { BiCameraMovie } from "react-icons/bi";

var dashRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: <HomeIcon color='inherit' />,
    component: Home,
    layout: "/admin",
  },
  {
    path: "/movies",
    name: "Filmes",
    icon: <RiMovieFill color='inherit' />,
    component: Movies,
    layout: "/admin",
  },
  {
    path: "/serie",
    name: "Séries",
    icon: <BiCameraMovie color='inherit' />,
    component: Serie,
    layout: "/admin",
  },
 
  {
    name: "ACCOUNT PAGES",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        icon: <PersonIcon color='inherit' />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Sign In",
        icon: <DocumentIcon color='inherit' />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Sign Up",
        icon: <RocketIcon color='inherit' />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
