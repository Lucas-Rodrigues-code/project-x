//libs
import { SimpleGrid, Box, Image, Flex, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
//components
import MovieFooter from "./MovieFooter ";

const MidiaCarousel = ({ moviesData, id }) => {
  const scrollLeft = () => {
    const carousel = document.getElementById(id);
    if (carousel) {
      carousel.scrollLeft -= 300; // Ajuste o valor para a quantidade desejada de rolagem
    }
  };

  const scrollRight = () => {
    const carousel = document.getElementById(id);
    if (carousel) {
      carousel.scrollLeft += 300; // Ajuste o valor para a quantidade desejada de rolagem
    }
  };

  const [hoveredMovie, setHoveredMovie] = useState(null);

  return (
    <Flex alignItems="center" overflowX="hidden">
      <IconButton
        icon={<ChevronLeftIcon />}
        onClick={scrollLeft}
        bg="transparent"
        fontSize="30px"
      />
      <Box overflow="hidden" whiteSpace="nowrap">
        <SimpleGrid
          id={id}
          templateColumns={`repeat(${moviesData.length}, 1fr)`}
          gap={2}
          overflow="hidden"
          sx={{
            "&::-webkit-scrollbar": {
              display: "none", // Oculta a barra de rolagem no navegador Chrome
            },
          }}
        >
          {moviesData.map((movie, i) => (
            <Box
              key={i}
              mb={4}
              onMouseEnter={() => setHoveredMovie(i)} // Ao passar o mouse, atualize o estado
              onMouseLeave={() => setHoveredMovie(null)}
              style={{ zIndex: hoveredMovie === i ? 1 : 0 }}
              transform={hoveredMovie === i ? "scale(1.3)" : "scale(1)"}
              transition="transform 0.3s ease"
            >
              <Image
                src={movie.previweUrl}
                alt="movie"
                w={"289px"}
                h={"163px"}
                maxWidth={"289"}
                borderRadius={"5px"}
                borderBottomRadius={hoveredMovie === i ? "0px" : "5px"}
              />
              <MovieFooter hoveredMovie={hoveredMovie} i={i} />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <IconButton
        icon={<ChevronRightIcon />}
        onClick={scrollRight}
        bg="transparent"
        fontSize="30px"
      />
    </Flex>
  );
};

export default MidiaCarousel;
