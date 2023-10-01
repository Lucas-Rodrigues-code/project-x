import React, { useContext, useState } from "react";

// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Link,
  Switch,
  Text,
  Icon,
  DarkMode,
  useToast,
  FormHelperText,
} from "@chakra-ui/react";

// Icons
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
// Custom Components
import AuthFooter from "components/Footer/AuthFooter";
import GradientBorder from "components/GradientBorder/GradientBorder";

// Assets
import signUpImage from "assets/img/signUpImage.png";
import axios from "axios";

import manifest from "assets/manifest.json";
import { LanguageContext } from "contexts/languageContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function SignUp() {
  const titleColor = "white";
  const textColor = "gray.400";
  const toast = useToast()
  const history = useHistory()
  const { language } = useContext(LanguageContext);

  const [isLoading, setIsLoading] = useState(false)
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  })

  async function register(body) {
    setIsLoading(true)
    try {

      const response = await axios.post(`http://localhost:5000/users/signUp`, body)
      console.log(response)
      toast({
        title: manifest[language].signUp.toast.userRegister,
        description: manifest[language].signUp.toast.warningLogin,
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right'
      })
      setIsLoading(false)
      history.push("/auth/signin")
    } catch (err) {
      console.log(err)
      let error = manifest[language].signUp.toast.error
      if (err.response.data.name === "DuplicatedEmailError") {
        error = manifest[language].signUp.toast.warningEmail
      }

      toast({
        title: "houve um erro",
        description: `${error}`,
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top-right'
      })
      setIsLoading(false)
    }
  }

  return (
    <Flex position='relative' overflow={{ lg: "hidden" }}>
      <Flex
        flexDirection='column'
        h={{ sm: "initial", md: "unset" }}
        w={{ base: "90%" }}
        maxW='1044px'
        mx='auto'
        justifyContent='space-between'
        pt={{ sm: "100px", md: "0px" }}
        me={{ base: "auto", lg: "50px", xl: "auto" }}>
        <Flex
          alignItems='center'
          justifyContent='start'
          style={{ userSelect: "none" }}
          flexDirection='column'
          mx={{ base: "auto", lg: "unset" }}
          ms={{ base: "auto", lg: "auto" }}
          mb='50px'
          w={{ base: "100%", md: "50%", lg: "42%" }}>
          <Flex
            direction='column'
            textAlign='center'
            justifyContent='center'
            align='center'
            mt={{ base: "60px", md: "140px", lg: "200px" }}
            mb='50px'>
            <Text
              fontSize='4xl'
              lineHeight='39px'
              color='white'
              fontWeight='bold'>
              {manifest[language].signUp.title.welcome}
            </Text>
          </Flex>
          <GradientBorder p='2px' me={{ base: "none", lg: "30px", xl: "none" }}>
            <Flex
              background='transparent'
              borderRadius='30px'
              direction='column'
              p='40px'
              minW={{ base: "unset", md: "430px", xl: "450px" }}
              w='100%'
              mx={{ base: "0px" }}
              bg={{
                base: "rgb(19,21,56)",
              }}>
              <Text
                fontSize='xl'
                color={textColor}
                fontWeight='bold'
                textAlign='center'
                mb='22px'>
                {manifest[language].signUp.title.register}
              </Text>
              <HStack spacing='15px' justify='center' mb='22px'>
                <GradientBorder borderRadius='15px'>
                  <Flex
                    _hover={{ filter: "brightness(120%)" }}
                    transition='all .25s ease'
                    cursor='pointer'
                    justify='center'
                    align='center'
                    bg='rgb(19,21,54)'
                    w='71px'
                    h='71px'
                    borderRadius='15px'>
                    <Link href='#'>
                      <Icon
                        color={titleColor}
                        as={FaFacebook}
                        w='30px'
                        h='30px'
                        _hover={{ filter: "brightness(120%)" }}
                      />
                    </Link>
                  </Flex>
                </GradientBorder>
                <GradientBorder borderRadius='15px'>
                  <Flex
                    _hover={{ filter: "brightness(120%)" }}
                    transition='all .25s ease'
                    cursor='pointer'
                    justify='center'
                    align='center'
                    bg='rgb(19,21,54)'
                    w='71px'
                    h='71px'
                    borderRadius='15px'>
                    <Link href='#'>
                      <Icon
                        color={titleColor}
                        as={FaApple}
                        w='30px'
                        h='30px'
                        _hover={{ filter: "brightness(120%)" }}
                      />
                    </Link>
                  </Flex>
                </GradientBorder>
                <GradientBorder borderRadius='15px'>
                  <Flex
                    _hover={{ filter: "brightness(120%)" }}
                    transition='all .25s ease'
                    cursor='pointer'
                    justify='center'
                    align='center'
                    bg='rgb(19,21,54)'
                    w='71px'
                    h='71px'
                    borderRadius='15px'>
                    <Link href='#'>
                      <Icon
                        color={titleColor}
                        as={FaGoogle}
                        w='30px'
                        h='30px'
                        _hover={{ filter: "brightness(120%)" }}
                      />
                    </Link>
                  </Flex>
                </GradientBorder>
              </HStack>
              <Text
                fontSize='lg'
                color='gray.400'
                fontWeight='bold'
                textAlign='center'
                mb='22px'>
                {manifest[language].signUp.title.or}
              </Text>
              <FormControl>
                <FormLabel
                  color={titleColor}
                  ms='4px'
                  fontSize='sm'
                  fontWeight='normal'>
                  {manifest[language].signUp.rows.name}
                </FormLabel>

                <GradientBorder
                  mb='24px'
                  h='50px'
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius='20px'>
                  <Input
                    color={titleColor}
                    bg={{
                      base: "rgb(19,21,54)",
                    }}
                    border='transparent'
                    borderRadius='20px'
                    fontSize='sm'
                    size='lg'
                    w={{ base: "100%", md: "346px" }}
                    maxW='100%'
                    h='46px'
                    type='text'
                    placeholder={manifest[language].signUp.rows.placeName}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    required={true}
                  />
                </GradientBorder>
                <FormLabel
                  color={titleColor}
                  ms='4px'
                  fontSize='sm'
                  fontWeight='normal'>
                  {manifest[language].signUp.rows.email}
                </FormLabel>
                <GradientBorder
                  mb='24px'
                  h='50px'
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius='20px'>
                  <Input
                    color={titleColor}
                    bg={{
                      base: "rgb(19,21,54)",
                    }}
                    border='transparent'
                    borderRadius='20px'
                    fontSize='sm'
                    size='lg'
                    w={{ base: "100%", md: "346px" }}
                    maxW='100%'
                    h='46px'
                    type='email'
                    placeholder={manifest[language].signUp.rows.placeEmail}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  />
                </GradientBorder>
                <FormLabel
                  color={titleColor}
                  ms='4px'
                  fontSize='sm'
                  fontWeight='normal'>
                  {manifest[language].signUp.rows.password}
                </FormLabel>
                <GradientBorder
                  mb='24px'
                  h='50px'
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius='20px'>
                  <Input
                    color={titleColor}
                    bg={{
                      base: "rgb(19,21,54)",
                    }}
                    border='transparent'
                    borderRadius='20px'
                    fontSize='sm'
                    size='lg'
                    w={{ base: "100%", md: "346px" }}
                    maxW='100%'
                    h='46px'
                    type='password'
                    placeholder={manifest[language].signUp.rows.placePass}
                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                  />

                </GradientBorder>
                {!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                  newUser.password
                ) ? (
                  <FormHelperText color={"red.300"} mb={5}>
                    {manifest[language].signUp.rows.warning1}<br />
                    {manifest[language].signUp.rows.warning2}<br />
                    {manifest[language].signUp.rows.warning3}<br />
                    {manifest[language].signUp.rows.warning4}<br />
                    {manifest[language].signUp.rows.warning5}<br />
                  </FormHelperText>
                ) : (
                  <span />
                )}
                <FormControl display='flex' alignItems='center' mb='24px'>
                  <DarkMode>
                    <Switch id='remember-login' colorScheme='brand' me='10px' />
                  </DarkMode>

                  <FormLabel
                    color={titleColor}
                    htmlFor='remember-login'
                    mb='0'
                    fontWeight='normal'>
                    {manifest[language].signUp.rows.remember}
                  </FormLabel>
                </FormControl>
                <Button
                  variant='brand'
                  fontSize='10px'
                  type='submit'
                  w='100%'
                  maxW='350px'
                  h='45'
                  mb='20px'
                  mt='20px'
                  onClick={() => register(newUser)}
                  isLoading={isLoading}

                  disabled={
                    newUser.name.length < 3 ||
                      !/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(newUser.email) ||
                      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                        newUser.password
                      )
                      ? true : false
                  }
                >
                  {manifest[language].signUp.buttons.singUp}
                </Button>
              </FormControl>
              <Flex
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                maxW='100%'
                mt='0px'>
                <Text color={textColor} fontWeight='medium'>
                  {manifest[language].signUp.rows.warningCount}
                  <Link
                    color={titleColor}
                    as='span'
                    ms='5px'
                    href='#'
                    fontWeight='bold'>
                    {manifest[language].signUp.rows.signIn}
                  </Link>
                </Text>
              </Flex>
            </Flex>
          </GradientBorder>
        </Flex>
        <Box
          w={{ base: "335px", md: "450px" }}
          mx={{ base: "auto", lg: "unset" }}
          ms={{ base: "auto", lg: "auto" }}
          mb='90px'>
          <AuthFooter />
        </Box>
        <Box
          display={{ base: "none", lg: "block" }}
          overflowX='hidden'
          h='1300px'
          maxW={{ md: "50vw", lg: "48vw" }}
          w='960px'
          position='absolute'
          left='0px'>
          <Box
            bgImage={signUpImage}
            w='100%'
            h='1300px'
            bgSize='cover'
            bgPosition='50%'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            position='absolute'>
            <Text
              textAlign='center'
              color='white'
              letterSpacing='8px'
              fontSize='20px'
              fontWeight='500'>
              {manifest[language].signUp.rows.slogan}
            </Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignUp;
