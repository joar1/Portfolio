import styled from 'styled-components';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrapper>
				<FooterDiv>
					<h4>JOAR R.</h4>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
		font-size: 1.8em;
		padding: 1em 0.4em;
	}
	p {
		margin-top: 0;
		padding: 1em;
		width: 70%;
	}
`;

const FooterSoMe = styled.div`
	display: flex;
	display: inline-block;
	list-style: none;
	font-size: 1.8em;
	padding: 1em;
	a {
		color: #fff;
		font-size: 1.4em;
		margin: 0.2em;
	}
`;
