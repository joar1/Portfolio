import styled from 'styled-components';
import CV from '../assets/joarCv.pdf';

export const Navbar = () => {
	return (
		<>
			<StyledNavbar>
				<StyledHome>JR</StyledHome>
				<ListContainer>
					<ul>
						<li>
							<StyledA href='#Om'>OM</StyledA>
						</li>
						<li>
							<StyledA href='#Prosjekter'>PROSJEKTER</StyledA>
						</li>
						<li>
							<StyledA href='#Kontakt'>KONTAKT</StyledA>
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
	padding: 0.5em 0;
	background: #1b1d1e;
	color: rgb(122, 232, 122);
	font-size: 1.3em;
`;

const StyledHome = styled.a`
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
const StyledA = styled.a`
	padding: 0 2em 0 0;
	text-decoration: none;
	color: #f1f1f1;
	&:hover {
		color: rgb(122, 232, 122);
		text-shadow: green 1px 0 10px;
	}
`;
