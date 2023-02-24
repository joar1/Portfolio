import styled from 'styled-components';

const HeaderPage = () => {
	return (
		<>
			<PageContainer>
				<Header>
					<h1>
						HALLO VERDEN, {<br />}
						<span>JOAR</span> HER! JUNIORUTVIKLER {<br />} MED FOKUS PÅ{' '}
						<span>FRONTEND</span>
					</h1>
				</Header>
			</PageContainer>
		</>
	);
};

export default HeaderPage;

const PageContainer = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 100%;
	height: 80vh;
	color: white;
	text-shadow: black 0px 0px 2px;
	background: black;
	h1 {
		font-size: 2em;
		margin: 0 auto;
	}
	span {
		color: rgb(122, 232, 122);
		text-shadow: none;
	}
	@media (max-width: 768px) {
		display: grid;
		grid-template-columns: 1fr;
		font-size: 1vh;
		margin: 0 auto;
		max-width: 100%;
	}
`;

const Header = styled.div`
	margin-left: 10em;
	@media (max-width: 768px) {
		display: flex;
		justify-content: center;
		align-items: center;
		max-width: 100%;
	}
`;
