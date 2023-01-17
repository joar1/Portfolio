import styled from 'styled-components';

export const Navbar = () => {
	return (
		<>
			<StyledNavbar>
				<StyledHome>JOAR R.</StyledHome>

				<ListContainer>
					<ul>
						<li>
							<StyledA href='/'>OM</StyledA>
						</li>
						<li>
							<StyledA href='/'>PROSJEKTER</StyledA>
						</li>
						<li>
							<StyledA href='/'>KONTAKT</StyledA>
						</li>
					</ul>
				</ListContainer>
			</StyledNavbar>
		</>
	);
};

const StyledNavbar = styled.div`
	max-width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5em 0;
	background: #1b1d1e;
	color: #fff;
	font-size: 1.3em;
`;

const StyledHome = styled.a`
	padding-left: 2em;
	&:hover {
		color: red;
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
		color: red;
		text-underline-offset: 0.8em;
	}
`;
