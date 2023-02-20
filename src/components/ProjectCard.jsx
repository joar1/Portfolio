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

const CardContainer = styled.div`
	margin: 0 auto;
	width: 80%;
	line-height: 1.5;
	@media (max-width: 768px) {
		max-width: 100%;
	}
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
		box-shadow: 0px 0px 5px #fff;
	}
	@media (max-width: 768px) {
		max-width: 100%;
	}
`;

const InfoWrapperLeft = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin: 0 0 0 4em;
	padding: 1em;
	a {
		margin-top: 3em;
	}
	button {
		background: green;
		color: white;
		border: none;
		border-radius: 10px;
		padding: 15px;
		min-height: 30px;
		min-width: 120px;
		font-weight: 600;
		@media (max-width: 768px) {
			font-size: 2vw;
			max-width: 100%;
		}
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
	color: rgb(122, 232, 122);
	text-shadow: green 1px 0 20px;
`;
const StyledP1Left = styled.p`
	text-align: left;
`;
