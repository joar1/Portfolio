import styled from 'styled-components';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import About from './AboutPage';
import BackgroundImage from '../images/bg1.jpg';
import ContactForm from '../components/ContactForm';
import { Projects } from '../pages/ProjectsPage';
import NewPage from './NewPage';

export const Home = () => {
	return (
		<HomeContainer>
			<Navbar />
			<NewPage />
			{/* <StyledHeader>
				<h1>JOAR {<br />} JUNIORUTVIKLER</h1>
			</StyledHeader> */}
			<About />
			<Projects />
			<ContactForm />
			<Footer />
		</HomeContainer>
	);
};

const HomeContainer = styled.div`
	margin: 0 auto;
	color: black;
	max-width: 100%;
	@media (max-width: 768px) {
		max-width: 100%;
		flex-direction: column;
	}
`;

// const StyledHeader = styled.div`
// 	margin: 0 auto;
// 	padding: 3em 0;
// 	text-align: center;
// 	background-image: url(${BackgroundImage});
// 	background-position: center center;
// 	background-size: cover;
// 	background-repeat: no-repeat;
// 	/* background-color: rgba(255, 255, 255, 0.486); */
// 	background-blend-mode: overlay;
// 	img {
// 		max-width: 100%;
// 	}
// 	h1 {
// 		font-size: 5em;
// 		font-size: 4vw;
// 		padding: 1em;
// 		margin-top: 3em;
// 		color: white;
// 	}
// `;
