import styled from 'styled-components';

export function CardLeft(props) {
	return (
		<CardContainer>
			<CardDivLeft>
				<img src={props.img} alt='#' />
				<InfoWrapperLeft>
					<StyledH3Left>{props.title}</StyledH3Left>
					<StyledP1Left>{props.paragraph}</StyledP1Left>
					<a href={props.link} target='_blank' rel='noreferrer'>
						<button>SE LIVE VERSJON</button>
					</a>
				</InfoWrapperLeft>
			</CardDivLeft>
		</CardContainer>
	);
}

// export function CardRight(props) {
// 	return (
// 		<CardContainer>
// 			<CardDivRight>
// 				<InfoWrapperRight>
// 					<StyledH3Right>{props.title}</StyledH3Right>
// 					<StyledP1Right>{props.paragraph}</StyledP1Right>
// 					<a href={props.link} target='_blank' rel='noreferrer'>
// 						<button>SE LIVE VERSJON</button>
// 					</a>
// 				</InfoWrapperRight>
// 				<img src={props.img} alt='#' />
// 			</CardDivRight>
// 		</CardContainer>
// 	);
// }

const CardContainer = styled.div`
	margin: 0 auto;
	width: 80%;
	line-height: 1.5;
`;

const CardDivLeft = styled.div`
	display: flex;
	align-items: center;
	justify-content: right;
	padding: 1em;
	margin: 3em auto;
	img {
		max-width: 60%;
		max-height: 100%;
		border-radius: 25px;
		object-fit: contain;
	}
`;

const InfoWrapperLeft = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin: 0 0 0 4em;
	padding: 1em;
	button {
		background: green;
		color: white;
		border: none;
		border-radius: 10px;
		padding: 15px;
		min-height: 30px;
		min-width: 120px;
		font-weight: 600;
		&:hover {
			transform: translateY(+1px);
			transition: 0.3s;
			cursor: pointer;
		}
	}
`;

const StyledH3Left = styled.h3`
	font-size: 2em;
	margin-top: 0;
`;
const StyledP1Left = styled.p`
	text-align: left;
`;

// const CardDivRight = styled.div`
// 	display: flex;
// 	align-items: center;
// 	padding: 1em;
// 	margin: 3em auto;
// 	img {
// 		max-width: 60%;
// 		max-height: 100%;
// 		border-radius: 25px;
// 		object-fit: contain;
// 	}
// `;

// const InfoWrapperRight = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	text-align: left;
// 	margin: 0 4em 0 0;
// 	padding: 1em;
// 	button {
// 		background: green;
// 		color: white;
// 		border: none;
// 		border-radius: 10px;
// 		padding: 15px;
// 		min-height: 30px;
// 		min-width: 120px;
// 		font-weight: 600;
// 		&:hover {
// 			transform: translateY(+1px);
// 			transition: 0.3s;
// 			cursor: pointer;
// 		}
// 	}
// `;

// const StyledH3Right = styled.h3`
// 	font-size: 2em;
// 	margin-top: 0;
// `;

// const StyledP1Right = styled.p`
// 	text-align: left;
// `;
