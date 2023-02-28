import styled from 'styled-components';

const HeaderPage = () => {
	return (
		<>
			<PageContainer>
				<Header>
					<h1>
						HALLO VERDEN, <span>JOAR</span> HER! {<br />}
						<span>JUNIORUTVIKLER</span> {<br />} MED FOKUS PÅ{' '}
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
	height: 100vh;
	/* color: white; */
	color: #45a29e;
	/* background-color: #1f2833; */
	background: #0b0c10;

	h1 {
		font-size: 2.8em;
		margin: 0 auto;
	}
	span {
		color: #66fcf1;
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
