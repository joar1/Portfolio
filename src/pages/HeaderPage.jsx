import styled from 'styled-components';
import Typical from 'react-typical';

const HeaderPage = () => {
	return (
		<>
			<PageContainer>
				<Header>
					<h1>
						HALLO VERDEN, <span>JOAR</span> HER! {<br />}
						<span>
							<Typical
								loop={Infinity}
								wrapper='b'
								steps={[
									'UTVIKLER',
									2000,
									'PAPPA',
									1000,
									'GITARIST',
									1000,
									'GAMER',
									1000,
								]}
							/>
						</span>
						{<br />} MED FOKUS PÅ <span>FRONTEND</span>
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
	color: #45a29e;
	background: #0b0c10;
	h1 {
		margin: 0 auto;
	}
	span {
		color: #66fcf1;
		text-shadow: lightblue 1px 0 1px;
	}
	@media (max-width: 768px) {
		display: grid;
		grid-template-columns: 1fr;
		font-size: 1vh;
		margin: 0 auto;
		max-width: 100%;
		height: 40vh;
	}
`;

const Header = styled.div`
	margin: 0 auto;
	width: 75%;
	@media (max-width: 768px) {
		display: flex;
		justify-content: center;
		align-items: center;
		max-width: 100%;
	}
`;
