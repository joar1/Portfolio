import styled from 'styled-components';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import About from './AboutPage';
import ContactForm from '../components/ContactForm';
import { Projects } from '../pages/ProjectsPage';
import HeaderPage from './HeaderPage';

export const Home = () => {
	return (
		<HomeContainer>
			<Navbar />
			<HeaderPage />
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
