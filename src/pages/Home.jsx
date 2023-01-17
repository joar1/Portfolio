import styled from 'styled-components';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import About from './About';

export const Home = () => {
	return (
		<div>
			<HomeContainer>
				<Navbar />
				<StyledHeader>
					<h1>JOAR, {<br />} JUNIORUTVIKLER</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
						eos, eius laudantium exercitationem animi atque totam molestias
						distinctio vero! Beatae quae, assumenda dolor magni labore iusto.
						Distinctio consequuntur nihil possimus!
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
						eos, eius laudantium exercitationem animi atque totam molestias
						distinctio vero! Beatae quae, assumenda dolor magni labore iusto.
						Distinctio consequuntur nihil possimus!
					</p>
				</StyledHeader>
				<About />
				<Footer />
			</HomeContainer>
		</div>
	);
};

const HomeContainer = styled.div`
	text-align: center;
	margin: 0 auto;
	background: black;
	color: #fff;
`;

const StyledHeader = styled.div`
	margin: 5em auto;
	width: 80%;
	h1 {
		font-size: 5em;
	}
	p {
		text-align: left;
		line-height: 1.4em;
	}
`;
