import styled from 'styled-components';
import CV from '../assets/joarCv.pdf';
import { Link } from 'react-scroll';

export const Navbar = () => {
	return (
		<>
			<StyledNavbar>
				<StyledHome>JR</StyledHome>
				<ListContainer>
					<ul>
						<li>
							<StyledA Link to='Om' smooth={true} duration={500}>
								OM
							</StyledA>
						</li>
						<li>
							<StyledA Link to='Prosjekter' smooth={true} duration={1000}>
								PROSJEKTER
							</StyledA>
						</li>
						<li>
							<StyledA Link to='Kontakt' smooth={true} duration={1500}>
								KONTAKT
							</StyledA>
						</li>
						<li>
							<StyledA href={CV} download>
								CV
							</StyledA>
						</li>
					</ul>
				</ListContainer>
			</StyledNavbar>
		</>
	);
};

const StyledNavbar = styled.nav`
	max-width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5em 5.5em;
	background: black;
	/* color: rgb(122, 232, 122); */
	color: #66fcf1;
	font-size: 1.3em;
	@media (max-width: 768px) {
		font-size: 2vh;
		max-width: 100%;
	}
`;

const StyledHome = styled(Link)`
	padding-left: 1em;
	font-size: 1.5em;
	&:hover {
		cursor: pointer;
	}
`;

const ListContainer = styled.div`
	display: flex;
	align-items: center;
	li {
		list-style: none;
		display: inline-block;
	}
`;
const StyledA = styled(Link)`
	padding: 0 2em 0 0;
	text-decoration: none;
	color: #66fcf1;
	&:hover {
		/* color: rgb(122, 232, 122);
		text-shadow: green 1px 0 10px; */
		/* color: #45a29e; */
		text-decoration: underline;
		text-underline-offset: 0.4em;
		text-decoration-thickness: 0.1em;
		cursor: pointer;
	}
`;
