import styled from 'styled-components';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { RiReactjsFill } from 'react-icons/ri';

const About = () => {
	return (
		<AboutContainer>
			<AboutMe>
				<h2 id='Om'>LITT OM MEG</h2>
				<p>
					Jeg heter Joar og er en juniorutvikler og tidligere elektriker. På
					grunn av en yrkesskade måtte jeg tenke nytt og da falt valget på
					koding, noe som har blitt en ny lidenskap. I og med at jeg liker å
					løse problemer passer programmering perfekt.
				</p>
			</AboutMe>

			<AboutSection>
				<LeftBox>
					<h3>Hva gjør jeg nå</h3>
					<p>
						Jeg går nå på et kurs som heter Kodehode, der jeg lærer
						Frontend-utvikling og har fått god kontroll på HTML, CSS, Javascript
						og React. Når det kommer til hobbyer går det i alt fra gaming, gitar
						og å google "hvordan sentrere div".
					</p>
				</LeftBox>

				<RightBox>
					<h4>Jeg har erfaring med</h4>
					<StyledIcons>
						{' '}
						<AiFillHtml5 /> <DiCss3 /> <IoLogoJavascript /> <RiReactjsFill />{' '}
						<AiFillGithub />
					</StyledIcons>
				</RightBox>
			</AboutSection>
		</AboutContainer>
	);
};

export default About;

const AboutContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	background: #1b1d1e;
	color: white;
`;

const AboutMe = styled.section`
	text-align: left;
	width: 80%;
	margin: 1em auto;
	padding: 2em;
	line-height: 1.5em;
	h2 {
		text-align: center;
		text-decoration: underline;
		text-underline-offset: 0.6em;
		font-size: 3em;
	}
	p {
		padding-top: 2em;
		width: 70%;
		margin: 0 auto;
	}
`;

const AboutSection = styled.div`
	display: flex;
	justify-items: center;
	justify-content: space-between;
	width: 80%;
	margin: 0 auto;
	padding: 1em;
	text-align: left;
	line-height: 1.5em;
`;

const LeftBox = styled.div`
	width: 40%;
	padding: 1em;
`;

const RightBox = styled.div`
	width: 40%;
	padding: 1em;
	h4 {
		text-align: center;
	}
`;

const StyledIcons = styled.p`
	text-align: center;
	font-size: 3em;
`;
