import styled from 'styled-components';

const NewPage = () => {
	return (
		<>
			<PageContainer>
				<Header>
					<h1>
						HALLO VERDEN, {<br />}
						<span>JOAR</span> HER! {<br />}
						JUNIORUTVIKLER MED{<br />}FOKUS PÅ <span>FRONTEND</span>
					</h1>
				</Header>
			</PageContainer>
		</>
	);
};

export default NewPage;

const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 100%;
	height: 80vh;
	color: white;
	text-shadow: black 0px 0px 2px;
	background: radial-gradient(
		circle,
		rgba(0, 0, 0, 1) 00%,
		rgba(48, 48, 48, 1) 48%,
		rgba(255, 255, 255, 1) 100%
	);
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
	margin: 0 auto;
	@media (max-width: 768px) {
		display: flex;
		justify-content: center;
		align-items: center;
		max-width: 100%;
	}
`;
