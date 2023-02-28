import styled from 'styled-components';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export const Footer = () => {
	const ScrollTop = (e) => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	return (
		<FooterContainer>
			<FooterWrapper>
				<FooterDiv>
					<h3 onClick={ScrollTop}>Hjem</h3>
				</FooterDiv>
				<FooterSoMe>
					<a
						href='https://www.linkedin.com/in/joar-reinsnes-938577169/'
						target='_blank'
						rel='noreferrer'
					>
						<AiFillLinkedin />
					</a>
					<a
						href='https://github.com/joar1?tab=repositories'
						target='_blank'
						rel='noreferrer'
					>
						<AiFillGithub />
					</a>
				</FooterSoMe>
			</FooterWrapper>
		</FooterContainer>
	);
};

const FooterContainer = styled.div`
	background: black;
	padding: 0.5em 5.5em;
	color: #66fcf1;
	@media (max-width: 768px) {
		max-width: 100%;
	}
`;

const FooterWrapper = styled.div`
	max-width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 2em;
`;

const FooterDiv = styled.div`
	text-align: left;
	&:hover {
		cursor: pointer;
		transform: scale(1.2);
		text-decoration: underline;
		text-underline-offset: 0.4em;
		text-decoration-thickness: 0.1em;
	}
`;

const FooterSoMe = styled.div`
	display: flex;
	display: inline-block;
	color: #66fcf1;
	a {
		color: #66fcf1;
		font-size: 2.5em;
		margin-left: 0.4em;
	}
	svg:hover {
		transform: scale(1.2);
	}
`;
