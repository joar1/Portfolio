import { ProjectCard } from '../components/ProjectCard';
import Igrunnen from '../images/igrunnen.png';
import Spoonacular from '../images/spoonacular.png';
import MockShop from '../images/mockshop.png';
import Drumkit from '../images/drumkit.png';
import styled from 'styled-components';

export const Projects = () => {
	return (
		<>
			<ProjectContainer>
				<h2 id='Prosjekter'>PROSJEKTER </h2>
				<ProjectCard
					img={Igrunnen}
					title='Igrunnen'
					paragraph='En nettside jeg laget for et firma i praksisperioden.'
					link='https://joar1.github.io/igrunn/'
				/>
				<ProjectCard
					img={Spoonacular}
					title='SpoonAcular'
					paragraph='En nettside som finner middagsoppskrifter ved hjelp av en api'
					link='https://joar1.github.io/spoonacularApi/'
				/>
				<ProjectCard
					img={MockShop}
					title='MockShop'
					paragraph='En nettbutikk laget med hjelp av en fake store-api '
					link='https://joar1.github.io/mockshop/'
				/>
				<ProjectCard
					img={Drumkit}
					title='Trommemaskin'
					paragraph='Et trommesett der man kan spille av forskellige lyder med tastaturet.'
					link='https://joar1.github.io/Drum-kit/'
				/>
			</ProjectContainer>
		</>
	);
};

const ProjectContainer = styled.div`
	margin: 0em auto;
	padding: 3em 0;
	background: rgb(31, 40, 51);
	background: linear-gradient(
		0deg,
		rgba(31, 40, 51, 1) 0%,
		rgba(0, 0, 0, 1) 50%,
		rgba(31, 40, 51, 1) 75%
	);
	h2 {
		text-align: center;
		text-decoration: underline;
		text-underline-offset: 0.4em;
		font-size: 4em;
		margin-bottom: 1em;
		color: #66fcf1;
		text-shadow: lightblue 1px 0 2px;
	}
	p {
		font-size: 1.3em;
		color: white;
	}
	@media (max-width: 768px) {
		display: grid;
		grid-template-columns: 1fr;
		font-size: 2vw;
		max-width: 100%;
	}
`;
