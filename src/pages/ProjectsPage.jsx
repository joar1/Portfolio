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
				<ProjectDiv>
					<h1>MockShop</h1>
					<ProjectImg src={MockShop} alt='shop' />
					<p>En nettbutikk laget med api i React</p>
					<ProjectLink
						href='https://joar1.github.io/mockshop/'
						target='_blank'
						rel='noreferrer'
					>
						<AiOutlineGithub size={50} color='white' />
					</ProjectLink>
				</ProjectDiv>

				<ProjectDiv>
					<h1>Spoonacular Api</h1>
					<ProjectImg src={Spoonacular} alt='api' />
					<p>En nettside som finner middagsoppskrifter ved hjelp av en api</p>
					<ProjectLink
						href='https://joar1.github.io/spoonacularApi/'
						target='_blank'
						rel='noreferrer'
					>
						<AiOutlineGithub size={50} color='white' />
					</ProjectLink>
				</ProjectDiv>

				<ProjectDiv>
					<h1>Kalkulator</h1>
					<ProjectImg src={Kalkulator} alt='kalkulator' />
					<p>En kalkulator laget i React</p>
					<ProjectLink
						href='https://joar1.github.io/kalkulator/'
						target='_blank'
						rel='noreferrer'
					>
						<AiOutlineGithub size={50} color='white' />
					</ProjectLink>
				</ProjectDiv>

				<ProjectDiv>
					<h1>Trommemaskin</h1>
					<ProjectImg src={Drumkit} alt='drumkit' />
					<p>
						Et prosjekt der man kan spille av trommelyder med tastaturet, laget
						i javascript
					</p>
					<ProjectLink
						href='https://joar1.github.io/Drum-kit/'
						target='_blank'
						rel='noreferrer'
					>
						<AiOutlineGithub size={50} color='white' />
					</ProjectLink>
				</ProjectDiv>

				<ProjectDiv>
					<h1>To-do List</h1>
					<ProjectImg src={TodoList} alt='todolist' />
					<p>En basic huskeliste laget i Javascript</p>
					<ProjectLink
						href='https://joar1.github.io/To-do-List/'
						target='_blank'
						rel='noreferrer'
					>
						<AiOutlineGithub size={50} color='white' />
					</ProjectLink>
				</ProjectDiv>

				<ProjectDiv>
					<h1>Passord Gen.</h1>
					<ProjectImg src={PassordGen} alt='shop' />
					<p>En enkel passord generator laget i javascript</p>
					<ProjectLink
						href='https://joar1.github.io/password.generator/'
						target='_blank'
						rel='noreferrer'
					>
						<AiOutlineGithub size={50} color='white' />
					</ProjectLink>
				</ProjectDiv>
			</ProjectContainer>
		</>
	);
};

const ProjectContainer = styled.div`
	margin: 0 auto;
	padding: 0;
	display: grid;
	justify-content: center;
	grid-template-columns: auto auto auto;
`;

const ProjectDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 30px;
	max-width: 100%;
	background-color: #181a1b;
	color: white;
	border: solid darkcyan 2px;
`;

const ProjectImg = styled.img`
	height: 250px;
	width: 300px;
	object-fit: contain;
`;

const ProjectLink = styled.a`
	background-color: darkcyan;
`;
