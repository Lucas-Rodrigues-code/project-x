/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";

export default function AuthFooter(props) {
  return (
    <Flex
      flexDirection={{
        base: "column",
      }}
      alignItems={{
        base: "center",
      }}
      justifyContent='space-between'
      pb='20px'
      fontSize='sm'>
      <Text
        color='white'
        textAlign={{
          base: "center",
        }}
        mb={{ base: "20px" }}>
        &copy; {1900 + new Date().getYear()},{" "}
        <Text as='span' mx='2px'>
          Powered by Project X
        </Text>
      </Text>
      <List display='flex'>
        <ListItem
          me={{
            base: "20px",
          }}>
          <Link color='white' fontSize='sm' href='https://www.google.com'>
            xxx
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
          }}>
          <Link color='white' fontSize='sm' href='https://www.google.com'>
            xxx
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
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
            href='https://www.google.com'>
            xxx
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
