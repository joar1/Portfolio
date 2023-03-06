import styled from 'styled-components';
import CV from '../assets/joarCv.pdf';
import { Link } from 'react-scroll';
import { FiDownload } from 'react-icons/fi';

export const Navbar = () => {
	return (
		<>
			<StyledNavbar>
				<StyledLogo link='/' to='Kontakt' smooth={true} duration={1500}>
					JR
				</StyledLogo>
				<ListContainer>
					<ul>
						<li>
							<StyledLink link='true' to='Om' smooth={true} duration={500}>
								OM
							</StyledLink>
						</li>
						<li>
							<StyledLink
								link='true'
								to='Prosjekter'
								smooth={true}
								duration={1000}
							>
								PROSJEKTER
							</StyledLink>
						</li>
						<li>
							<StyledLink
								link='true'
								to='Kontakt'
								smooth={true}
								duration={1500}
							>
								KONTAKT
							</StyledLink>
						</li>
					</ul>
				</ListContainer>
				<StyledA href={CV} download>
					CV
					<FiDownload />
				</StyledA>
			</StyledNavbar>
		</>
	);
};

const StyledNavbar = styled.nav`
	max-width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5em 2em;
	background: black;
	color: #66fcf1;
	font-size: 1.3em;
	@media (max-width: 768px) {
		font-size: 2vh;
		max-width: 100%;
	}
`;

const StyledLogo = styled(Link)`
	padding-left: 1em;
	font-size: 1.5em;
	&:hover {
		cursor: pointer;
	}
	@media (max-width: 768px) {
		padding-right: 10px;
	}
`;

const ListContainer = styled.div`
	display: flex;
	align-items: center;
	li {
		list-style: none;
		display: inline-block;
	}
	@media (max-width: 768px) {
		font-size: 2vh;
		max-width: 100%;
	}
`;

const StyledLink = styled(Link)`
	padding: 0 1em 0 0;
	text-decoration: none;
	color: #66fcf1;
	&:hover {
		text-decoration: underline;
		text-underline-offset: 0.4em;
		text-decoration-thickness: 0.1em;
		cursor: pointer;
	}
`;

const StyledA = styled.a`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: #66fcf1;
	padding-left: 10px;
	&:hover {
		cursor: pointer;
		transform: scale(1.2);
	}
`;
