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
	background: white;
	height: 100vh;
	padding-left: 150px;
	color: white;
	font-weight: bold;
	background: rgb(0, 0, 0);
	background: linear-gradient(
		0deg,
		rgba(0, 0, 0, 1) 0%,
		rgba(146, 6, 124, 1) 100%
	);
	h1 {
		font-size: 6.5em;
	}
	h2 {
		margin-top: 0;
		font-size: 3em;
	}
	span {
		color: rgb(122, 232, 122);
		text-shadow: green 1px 0 10px;
		font-weight: bolder;
	}
	@media (max-width: 768px) {
		display: grid;
		grid-template-columns: 1fr;
		font-size: 1vh;
		margin: 0;
		max-width: 100%;
	}
`;
