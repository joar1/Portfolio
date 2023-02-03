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
				</FooterDiv>

				<FooterSoMe>
					<h4>SOSIALE MEDIER</h4>
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
	color: #fff;
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
	h4 {
		cursor: pointer;
		font-size: 1.4em;
	}
`;

const FooterSoMe = styled.div`
	display: flex;
	display: inline-block;
	list-style: none;
	a {
		color: rgb(122, 232, 122);
		font-size: 2.5em;
		margin: 0 0.2em;
	}
`;
