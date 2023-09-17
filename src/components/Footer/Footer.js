/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";

export default function Footer(props) {
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent='space-between'
      px='30px'
      pb='20px'>
      <Text
        fontSize='sm'
        color='white'
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}>
        &copy; {1900 + new Date().getYear()},{" "}
        <Text as='span'>
          Powered by Project X
        </Text>
      </Text>
      <List display='flex'>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}>
          <Link color='white' fontSize='sm' href='https://www.google.com'>
            xxx
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}>
          <Link color='white' fontSize='sm' href='https://www.google.com'>
            xxx
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}>
          <Link
            color='white'
            fontSize='sm'
            href='https://www.google.com'>
            xxx
          </Link>
        </ListItem>
        <ListItem>
          <Link
            color='white'
            fontSize='sm'
            href='https://www.google.com'>
            xxx
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}

