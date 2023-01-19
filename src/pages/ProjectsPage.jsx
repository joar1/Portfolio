import { CardLeft, CardRight } from '../components/ProjectCard';
import { AiOutlineGithub } from 'react-icons/ai';
import Drumkit from '../images/drumkit.png';
import PassordGen from '../images/passordgen.png';
import Spoonacular from '../images/spoonacular.png';
import Kalkulator from '../images/kalkulator.png';
import TodoList from '../images/todo.png';
import MockShop from '../images/mockshop.png';
import styled from 'styled-components';

export const Projects = () => {
	return (
		<>
			<ProjectContainer id='Prosjekter'>
				<CardLeft
					img={MockShop}
					paragraph='MockShop'
					paragraphTwo='En nettbutikk laget med hjelp av en api '
					linkName='GitHub'
				/>
			</ProjectContainer>
		</>
	);
};

const ProjectContainer = styled.div`
	color: white;
`;
