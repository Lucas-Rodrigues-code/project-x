// Chakra Imports
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Flex,
  Link,
  Switch,
  Text,
  DarkMode,
  LightMode,
} from "@chakra-ui/react";
import GitHubButton from "react-github-btn";
import { Separator } from "components/Separator/Separator";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { FaTwitter, FaFacebook } from "react-icons/fa";

export default function Configurator(props) {
  const { secondary, isOpen, onClose, fixed, ...rest } = props;
  const [switched, setSwitched] = useState(props.isChecked);

  // Chakra Color Mode
  let fixedDisplay = "flex";
  if (props.secondary) {
    fixedDisplay = "none";
  }
  let colorButton = "white";
  const secondaryButtonColor = "white";
  const settingsRef = React.useRef();
  return (
    <>
      <Drawer
        isOpen={props.isOpen}
        onClose={props.onClose}
        placement={document.documentElement.dir === "rtl" ? "left" : "right"}
        finalFocusRef={settingsRef}
        blockScrollOnMount={false}>
        <DrawerContent
          bg='linear-gradient(111.84deg, rgba(6, 11, 38, 0.94) 59.3%, rgba(26, 31, 55, 0) 100%)'
          backdropFilter='blur(42px)'>
          <DrawerHeader pt='24px' px='24px'>
            <DrawerCloseButton color='white' />
            <Text color='white' fontSize='xl' fontWeight='bold' mt='16px' mb={10}>
              Project X Configurator
            </Text>
            <Separator />
          </DrawerHeader>
          <DrawerBody w='340px' ps='24px' pe='40px'>
            <Flex flexDirection='column'>
              <Box
                display={fixedDisplay}
                justifyContent='space-between '
                mb='50px'>
                <DarkMode>
                  <Text color='white' fontSize='md' fontWeight='600' mb='4px'>
                    Navbar Fixed
                  </Text>
                  <Switch
                    colorScheme='brand'
                    isChecked={switched}
                    onChange={(event) => {
                      if (switched === true) {
                        props.onSwitch(false);
                        setSwitched(false);
                      } else {
                        props.onSwitch(true);
                        setSwitched(true);
                      }
                    }}
                  />
                </DarkMode>
              </Box>
              <Box>
                <Flex
                  justifyContent='center'
                  alignItems='center'
                  w='100%'
                  mb='16px'>
                  <GitHubButton
                    href='https://'
                    data-icon='octicon-star'
                    data-show-count='true'
                    aria-label='Star creativetimofficial/vision-ui-dashboard-chakra on GitHub'>
                    Star
                  </GitHubButton>
                </Flex>
                <Box w='100%'>
                  <Text color='white' mb='6px' textAlign='center'>
                    Redes sociais
                  </Text>
                  <LightMode>
                    <Flex justifyContent='center' alignContent='center'>
                      <Link
                        isExternal='true'
                        href='https://'>
                        <Button
                          colorScheme='twitter'
                          leftIcon={<FaTwitter />}
                          me='10px'>
                          <Text>Instagram</Text>
                        </Button>
                      </Link>
                      <Link
                        isExternal='true'
                        href='https://'>
                        <Button
                          colorScheme='facebook'
                          leftIcon={<FaFacebook />}>
                          <Text>Linkedin</Text>
                        </Button>
                      </Link>
                    </Flex>
                  </LightMode>
                </Box>
              </Box> 
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
Configurator.propTypes = {
  secondary: PropTypes.bool,
  isOpen: PropTypes.func,
  onClose: PropTypes.func,
  fixed: PropTypes.bool,
};
