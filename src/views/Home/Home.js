// Chakra imports
import { Container, Flex, Heading } from '@chakra-ui/react';
//components
import MidiaCarousel from './components/MidiaCarousel';

import movie from "../../assets/img/batman.jpg"

export default function Home() {

	const moviesData = [{
		previweUrl: movie,
		title: "teste",
		tags: [],
		descripition: "teste",
		rating: 5
	}, {
		previweUrl: "https://i.pinimg.com/1200x/d6/e8/80/d6e880438fcb2e1199923e14905ace28.jpg",
		title: "teste",
		tags: [],
		descripition: "teste",
		rating: 5
	}, {
		previweUrl: "https://cdn.pensador.com/img/imagens/fi/lm/filmes_classicos_f_l.jpg",
		title: "teste",
		tags: [],
		descripition: "teste",
		rating: 5
	}, {
		previweUrl: "https://s2.glbimg.com/2OmaOmaXJQ5Dr-SVg-jZlkhIvco=/e.glbimg.com/og/ed/f/original/2020/06/22/pulp_fiction.jpg",
		title: "teste",
		tags: [],
		descripition: "teste",
		rating: 5
	}, {
		previweUrl: "https://i.pinimg.com/1200x/d6/e8/80/d6e880438fcb2e1199923e14905ace28.jpg",
		title: "teste",
		tags: [],
		descripition: "teste",
		rating: 5
	},
	{
		previweUrl: "https://i.pinimg.com/1200x/d6/e8/80/d6e880438fcb2e1199923e14905ace28.jpg",
		title: "teste",
		tags: [],
		descripition: "teste",
		rating: 5
	},
	{
		previweUrl: "https://i.pinimg.com/1200x/d6/e8/80/d6e880438fcb2e1199923e14905ace28.jpg",
		title: "teste",
		tags: [],
		descripition: "teste",
		rating: 5
	},
	{
		previweUrl: "https://i.pinimg.com/1200x/d6/e8/80/d6e880438fcb2e1199923e14905ace28.jpg",
		title: "teste",
		tags: [],
		descripition: "teste",
		rating: 5
	}]; 

	return (
		<Flex flexDirection='column' pt={{ base: '120px', md: '75px' }}>
			<Container maxW="container.xl" p={4}>
				<Heading as="h1" size="xl" mb={6} color={"white"}>
					Cineflex
				</Heading>

				<Flex flexDirection="column" mb={8} overflowX={"auto"}>
					<Heading as="h2" size="lg" mb={4} color={"white"}>
						Filmes
					</Heading>
					<MidiaCarousel moviesData={moviesData} id={"movies-carousel"} />
				</Flex>

				<Flex flexDirection="column" mb={8} overflowX={"auto"}>
					<Heading as="h2" size="lg" mb={4} color={"white"}>
						Séries
					</Heading>
					<MidiaCarousel moviesData={moviesData} id={"series-carousel"} />

				</Flex>

				<Flex flexDirection="column" mb={8}>
					<Heading as="h2" size="lg" mb={4} color={"white"}>
						Recomendados
					</Heading>
					<MidiaCarousel moviesData={moviesData} id={"recommended-carousel"} />
				</Flex>

				<Flex flexDirection="column">
					<Heading as="h2" size="lg" mb={4} color={"white"}>
						Favoritos
					</Heading>
					<MidiaCarousel moviesData={moviesData} id={"favorites-carousel"} />
				</Flex>
			</Container>
		</Flex>
	);
}
