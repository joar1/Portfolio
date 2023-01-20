import { CardLeft, CardRight } from '../components/ProjectCard';
import Igrunnen from '../images/igrunnen.png';
import Spoonacular from '../images/spoonacular.png';
import MockShop from '../images/mockshop.png';
import Drumkit from '../images/drumkit.png';
import styled from 'styled-components';

export const Projects = () => {
	return (
		<>
			<ProjectContainer>
				<h2 id='Prosjekter'>Prosjekter</h2>
				<CardLeft
					img={Igrunnen}
					title='Igrunnen'
					paragraph='En nettside jeg laget for et firma i praksisperioden.'
					link='https://joar1.github.io/igrunn/'
				/>
				<CardRight
					title='SpoonAcular'
					paragraph='En nettside som finner middagsoppskrifter ved hjelp av en api'
					img={Spoonacular}
					link='https://joar1.github.io/spoonacularApi/'
				/>
				<CardLeft
					img={MockShop}
					title='MockShop'
					paragraph='En nettbutikk laget med hjelp av en fake store-api '
					link='https://joar1.github.io/mockshop/'
				/>
				<CardRight
					title='Trommemaskin'
					paragraph='Et trommesett der man kan spille av forskellige lyder med tastaturet.'
					img={Drumkit}
					link='https://joar1.github.io/Drum-kit/'
				/>
			</ProjectContainer>
		</>
	);
};

const ProjectContainer = styled.div`
	margin: 1em auto;
	padding: 5em 0;
	color: white;
	h2 {
		margin: 0;
		text-align: center;
		text-decoration: underline;
		text-underline-offset: 0.6em;
		font-size: 3em;
	}
	p {
		font-size: 1.3em;
	}
`;
