import styled from 'styled-components';

export function CardLeft(props) {
	return (
		<CardContainer>
			<CardDivLeft>
				<img src={props.img} alt='#' />
				<InfoWrapperLeft>
					<StyledH2Left>{props.title}</StyledH2Left>
					<StyledP1Left>{props.paragraph}</StyledP1Left>
					<a href={props.link} target='_blank' rel='noreferrer'>
						{props.linkName}
					</a>{' '}
				</InfoWrapperLeft>
			</CardDivLeft>
		</CardContainer>
	);
}

export function CardRight(props) {
	return (
		<CardContainer>
			<CardDivRight>
				<InfoWrapperRight>
					<StyledH2Right>{props.title}</StyledH2Right>
					<StyledP1Right>{props.paragraph}</StyledP1Right>
					<a href={props.link} target='_blank' rel='noreferrer'>
						{props.linkName}
					</a>{' '}
				</InfoWrapperRight>
				<img src={props.img} alt='#' />
			</CardDivRight>
		</CardContainer>
	);
}

const CardContainer = styled.div`
	margin: 0 auto;
	width: 80%;
	line-height: 1.5;
`;

const CardDivLeft = styled.div`
	display: flex;
	align-items: center;
	padding: 1em;
	margin: 2em auto;
	img {
		height: 384px;
		width: 560px;
	}
	a {
		font-size: 1.3em;
		padding: 0.1em;
		font-weight: bold;
		text-decoration: none;
	}
`;

const InfoWrapperLeft = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin: 0 0 0 4em;
	padding: 1em;
`;

const StyledH2Left = styled.h4`
	font-size: 2em;
	margin-top: 0;
`;
const StyledP1Left = styled.p``;

const CardDivRight = styled.div`
	display: flex;
	align-items: center;
	padding: 1em;
	img {
		height: 384px;
		width: 560px;
	}
`;

const InfoWrapperRight = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin: 0 4em 0 0;
	padding: 1em;
`;

const StyledH2Right = styled.h2`
	font-size: 2em;
	margin-top: 0;
`;

const StyledP1Right = styled.p`
	text-align: left;
`;
