import styled from 'styled-components';

export function CardLeft(props) {
	return (
		<CardContainer>
			<CardDivLeft>
				<img src={props.img} alt='#' />
				<InfoWrapper>
					<StyledP1Left>{props.paragraph}</StyledP1Left>
					<StyledP2Left>{props.paragraphTwo}</StyledP2Left>
					<a href={props.link} target='_blank' rel='noreferrer'>
						{props.linkName}
					</a>{' '}
				</InfoWrapper>
			</CardDivLeft>
		</CardContainer>
	);
}

export function CardRight(props) {
	return (
		<CardContainer>
			<CardDivRight>
				<StyledP1Right>{props.paragraph}</StyledP1Right>
				<StyledP2Right>{props.paragraphTwo}</StyledP2Right>
				<img src={props.img} alt='#' />
			</CardDivRight>
		</CardContainer>
	);
}

const CardContainer = styled.div`
	margin: 0 auto;
	width: 80%;
	line-height: 1.3;
`;

const CardDivLeft = styled.div`
	display: flex;
	align-items: center;
	padding: 1em;
	border: solid 2px blue;
	img {
		height: 384px;
		width: 560px;
		border-radius: 20px;
	}
	a {
		font-size: 1.3em;
		padding: 0.1em;
		font-weight: bold;
		text-decoration: none;
	}
`;

const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 5em;
	text-align: left;
	margin: 0 auto;
	border: solid 2px white;
`;

const StyledP1Left = styled.p`
	font-size: 3em;
	margin-top: 0;
`;
const StyledP2Left = styled.p``;

const CardDivRight = styled.div`
	display: flex;
	align-items: center;
	padding: 1em;
	border: solid 2px green;
	img {
		height: 512px;
		width: 560px;
		border-radius: 20px;
	}
`;

const StyledP1Right = styled.p`
	font-size: 3em;
	margin-top: 0;
`;

const StyledP2Right = styled.p``;
