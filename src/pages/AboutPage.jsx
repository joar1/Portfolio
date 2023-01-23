import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { IoLogoNodejs } from 'react-icons/io';
import HtmlLogo from '../images/html.png';
import CssLogo from '../images/css.png';
import JsLogo from '../images/js.png';
import ReactLogo from '../images/react.png';
import JoarBilde from '../images/joar.jpg';

const About = () => {
	return (
		<AboutContainer>
			<h2 id='Om'>LITT OM MEG</h2>
			<AboutMe>
				<p>
					Jeg heter {<b>Joar</b>} og er en {<b>juniorutvikler</b>} og tidligere
					{<b> elektriker</b>}. På grunn av en yrkesskade måtte jeg tenke nytt
					og da falt valget på {<b>koding</b>}, noe som har blitt en ny
					lidenskap. I og med at jeg liker å løse problemer passer programmering
					perfekt.{<br />}
					{<br />} Tommel opp for koding.
				</p>
				<img src={JoarBilde} alt='bilde' />
			</AboutMe>

			<AboutSection>
				<LeftBox>
					<h3>Hva gjør jeg nå</h3>
					<p>
						Jeg går nå på et kurs som heter Kodehode, der jeg lærer
						Frontend-utvikling og jeg har fått god kontroll på{' '}
						<span style={{ color: '#E24B24' }}>{<b>HTML</b>}</span>,{' '}
						<span style={{ color: '#1B73B9' }}>{<b>CSS</b>}</span>,{' '}
						<span style={{ color: '#D4B830' }}>{<b>Javascript</b>}</span> og{' '}
						<span style={{ color: '#53B2CD' }}>{<b>React</b>}</span>. Når det
						kommer til hobbyer går det i alt fra gaming, gitar og å google
						"hvordan sentrere en div".
					</p>
				</LeftBox>

				<RightBox>
					<h3>Jeg har erfaring med</h3>

					<ImgCont>
						<LogoImg src={HtmlLogo} alt='html' />
						<LogoImg src={CssLogo} alt='css' />
						<LogoImg src={JsLogo} alt='javascript' />
						<LogoImg src={ReactLogo} alt='react' />
						<AiFillGithub size={55} />
						<IoLogoNodejs size={55} />
					</ImgCont>
				</RightBox>
			</AboutSection>
		</AboutContainer>
	);
};

export default About;

const AboutContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	padding: 5em 0;
	background: #1b1d1e;
	color: white;
	h2 {
		text-align: center;
		text-decoration: underline;
		text-underline-offset: 0.6em;
		font-size: 3em;
	}
`;

const AboutMe = styled.section`
	display: flex;
	justify-content: center;
	text-align: left;
	width: 80%;
	margin: 1em auto;
	padding: 2em;
	line-height: 1.5em;
	p {
		padding-top: 2em;
		width: 70%;
		margin: 0 auto;
		font-size: 1.3em;
		width: 40%;
	}
	img {
		margin: 0 auto;
		width: 20%;
		align-items: center;
		object-fit: contain;
		box-shadow: 0px 0px 5px #fff;
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
	p {
		font-size: 1.3em;
	}
`;

const LeftBox = styled.div`
	width: 40%;
	padding: 1em;
`;

const RightBox = styled.div`
	width: 40%;
	padding: 1em;
	h3 {
		text-align: center;
	}
`;

export const ImgCont = styled.ul`
	display: flex;
	justify-content: space-evenly;
`;

export const LogoImg = styled.img`
	height: 50px;
	width: 50px;
	object-fit: contain;
`;
