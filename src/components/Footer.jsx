import styled from 'styled-components';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrapper>
				{/* <FooterDiv>
					<h4>JOAR R.</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
						corporis eos quibusdam sed natus ut cumque repellat eligendi facilis
						expedita, culpa ipsam aliquid inventore repellendus voluptas iure,
						vero commodi amet.
					</p>
				</FooterDiv> */}
				<FooterSoMe>
					<h4>SOSIALE MEDIER</h4>

					<a href='/'>
						<AiFillGithub />
					</a>
					<a href='/'>
						<AiFillLinkedin />
					</a>
				</FooterSoMe>
			</FooterWrapper>
		</FooterContainer>
	);
};

const FooterContainer = styled.div`
	background: darkgray;
	color: #fff;
`;

const FooterWrapper = styled.div`
	width: 80%;
	margin: 0 auto;
	padding: 2em;
`;

const FooterDiv = styled.div`
	border: solid 2px blue;
	h4 {
		margin: 1em 0;
		padding: 1em;
		border: solid 2px blue;
	}
	p {
		padding: 1em;
		border: solid 2px red;
	}
`;

const FooterSoMe = styled.div`
	display: flex;
	border: solid 2px green;
	display: inline-block;
	list-style: none;
	font-size: 2em;
	padding: 1em;
	a {
		color: #fff;
	}
`;
