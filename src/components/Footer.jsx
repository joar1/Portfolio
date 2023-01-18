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
					<h4 onClick={ScrollTop}>Hjem</h4>
					<p>© Copyright 2023</p>
				</FooterDiv>

				<FooterSoMe>
					<h4>SOSIALE MEDIER</h4>
					<a
						href='https://github.com/joar1?tab=repositories'
						target='_blank'
						rel='noreferrer'
					>
						<AiFillGithub />
					</a>
					<a
						href='https://www.linkedin.com/in/joar-reinsnes-938577169/'
						target='_blank'
						rel='noreferrer'
					>
						<AiFillLinkedin />
					</a>
				</FooterSoMe>
			</FooterWrapper>
		</FooterContainer>
	);
};

const FooterContainer = styled.div`
	background: black;
	color: #fff;
`;

const FooterWrapper = styled.div`
	max-width: 100%;
	padding: 1em;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

const FooterDiv = styled.div`
	margin: 0;
	width: 55%;
	text-align: left;
	h4 {
		margin-bottom: 0;
		cursor: pointer;
	}
	p {
		width: 70%;
	}
`;

const FooterSoMe = styled.div`
	display: flex;
	display: inline-block;
	list-style: none;
	padding: 1em;
	a {
		color: #fff;
		font-size: 2.5em;
		margin: 0.2em;
	}
`;
