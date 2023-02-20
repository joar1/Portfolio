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
