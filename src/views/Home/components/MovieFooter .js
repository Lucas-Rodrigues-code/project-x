//libs
import { Box, Button, Stack,Text } from "@chakra-ui/react"
import { AiOutlinePlus } from "react-icons/ai"
import { BiDislike, BiLike } from "react-icons/bi"
import { FaPlay } from "react-icons/fa"

function MovieFooter ({hoveredMovie,i}){
    return (
        <Box
                display={hoveredMovie === i ? "" : "none"}
                h={"110px"}
                borderRadiusBottom={"5px"}
                background="rgba(0, 0, 0, 0.7)"
                color="white"
                textAlign={"center"}
              >
                <Stack direction="row" spacing={4} ml={2}>
                  <Box mt={2} spacing={4}>
                    <Button colorScheme="teal" variant="solid">
                      <FaPlay />
                    </Button>
                    <Button colorScheme="teal" variant="outline" ml={1}>
                      <AiOutlinePlus />
                    </Button>
                    <Button colorScheme="teal" variant="outline" ml={1}>
                      <BiLike />
                    </Button>
                    <Button colorScheme="teal" variant="outline" ml={1}>
                      <BiDislike />
                    </Button>
                    <Text> ação * suspense * drama</Text>
                  </Box>
                </Stack>
              </Box>
    )
}

export default MovieFooter