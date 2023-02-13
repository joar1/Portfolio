import styled from 'styled-components';

const NewPage = () => {
	return (
		<>
			<PageContainer>
				<h1>
					HALLO VERDEN, {<br />}
					<span>JOAR</span> HER!
				</h1>
				<h2>
					JUNIORUTVIKLER MED{<br />}FOKUS PÅ <span>FRONTEND</span>
				</h2>
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
	padding-left: 150px;
	color: white;
	text-shadow: black 0px 0px 2px;
	background: linear-gradient(
		0deg,
		rgba(0, 0, 0, 1) 00%,
		rgba(255, 255, 255, 1) 100%
	);
	h1 {
		font-size: 2em;
	}
	h2 {
		margin-top: 0;
		font-size: 2em;
	}
	span {
		color: #000;
		text-shadow: none;
	}
	@media (max-width: 768px) {
		display: grid;
		grid-template-columns: 1fr;
		font-size: 1vh;
		margin: 0;
		max-width: 100%;
	}
`;
