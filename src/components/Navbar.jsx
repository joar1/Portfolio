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
						<div>
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
						</div>
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
	color: white;
	font-size: 1.3em;
	@media (max-width: 768px) {
		font-size: 2vh;
		max-width: 100%;
	}
`;

const StyledLogo = styled(Link)`
	font-size: 1.5em;
	&:hover {
		cursor: pointer;
		transform: scale(1.2);
		color: #66fcf1;
	}
`;

const ListContainer = styled.div`
	li {
		list-style: none;
		display: inline-block;
	}
	@media (max-width: 768px) {
		max-width: 100%;
	}
`;

const StyledLink = styled(Link)`
	padding: 0 0.5em;
	color: white;
	font-size: 1.5em;
	&:hover {
		font-size: 1.6em;
		color: #66fcf1;
		cursor: pointer;
	}
	@media (max-width: 768px) {
		font-size: 2vh;
		max-width: 100%;
		&:hover {
			font-size: 1.1em;
		}
	}
`;

const StyledA = styled.a`
	display: flex;
	align-items: center;
	font-size: 1.5em;
	text-decoration: none;
	color: white;
	&:hover {
		cursor: pointer;
		transform: scale(1.2);
		color: #66fcf1;
	}
`;
