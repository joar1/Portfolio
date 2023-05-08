import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { IoLogoNodejs } from 'react-icons/io';
import { FiFigma } from 'react-icons/fi';
import HtmlLogo from '../images/html.png';
import CssLogo from '../images/css.png';
import JsLogo from '../images/js.png';
import ReactLogo from '../images/react.png';
import ProfilBilde from '../images/profilbilde.jpg';

const About = () => {
	return (
		<AboutContainer>
			<AboutMe>
				<PictureOfMe src={ProfilBilde} alt='bilde' />
				<AboutText>
					<h2 id='Om'>LITT OM MEG</h2>
					<p>
						Jeg heter {<span>Joar</span>} og er en {<span>juniorutvikler</span>}{' '}
						og tidligere
						{<span> elektriker</span>}. På grunn av en yrkesskade måtte jeg
						tenke nytt og da falt valget på {<span>koding</span>}, noe som
						passer perfekt siden jeg elsker å <span>løse problemer.</span>{' '}
						{<br />}
					</p>
					<p>
						Jeg har gått på et kurs som heter Kodehode, der jeg lærte
						Frontend-utvikling og jeg har fått god kontroll på{' '}
						<span style={{ color: '#E24B24' }}>{<b>HTML</b>}</span>,{' '}
						<span style={{ color: '#1B73B9' }}>{<b>CSS</b>}</span>,{' '}
						<span style={{ color: '#D4B830' }}>{<b>JavaScript</b>}</span> og{' '}
						<span style={{ color: '#53B2CD' }}>{<b>React</b>}</span>. Når det
						kommer til hobbyer går det i alt fra gaming, gitar og å google
						"hvordan sentrere en div".
					</p>
					<LogoWrapper>
						<LogoImg src={HtmlLogo} alt='html' />
						<LogoImg src={CssLogo} alt='css' />
						<LogoImg src={JsLogo} alt='javascript' />
						<LogoImg src={ReactLogo} alt='react' />
						<AiFillGithub size={55} style={{ color: '#D4B830' }} />
						<IoLogoNodejs size={55} style={{ color: '#1B73B9' }} />
						<FiFigma size={55} style={{ color: '#E24B24' }} />
					</LogoWrapper>
				</AboutText>
			</AboutMe>
		</AboutContainer>
	);
};

export default About;

const AboutContainer = styled.div`
	max-width: 100%;
	margin: 0 auto;
	padding-top: 2em;
	background-color: #1f2833;
	/* color: #c5c6c7; */
	color: white;
`;

const AboutMe = styled.section`
	display: flex;
	justify-content: space-around;
	width: 90%;
	margin: 0 auto;
	line-height: 1.5em;
	span {
		color: #66fcf1;
		font-weight: bolder;
	}
	@media (max-width: 768px) {
		grid-template-columns: 1, fr;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		font-size: 3vw;
		max-width: 100%;
	}
`;

const PictureOfMe = styled.img`
	margin-top: 100px;
	height: 300px;
	object-fit: contain;
	box-shadow: 0px 0px 20px #fff;
	border-radius: 50%;
	@media (max-width: 768px) {
		box-shadow: none;
		max-width: 100%;
		height: 20%;
		width: 30%;
		margin-top: 0;
	}
`;

const AboutText = styled.div`
	width: 50%;
	line-height: 1.4;
	h2 {
		padding-left: 0.6em;
		font-size: 1.5em;
		text-decoration: underline;
		text-underline-offset: 0.3em;
		color: #66fcf1;
		text-shadow: lightblue 1px 0 2px;
	}
	p {
		padding: 1em;
	}
	@media (max-width: 768px) {
		text-decoration: none;
		font-size: 1em;
		max-width: 100%;
		width: 90%;
	}
`;

const LogoWrapper = styled.div`
	text-align: center;
	padding: 2em 0 10em 0;
	svg {
		margin: 0 1em;
		color: white;
	}
`;

const LogoImg = styled.img`
	height: 50px;
	width: 50px;
	margin: 0 1em;
	object-fit: contain;
`;
