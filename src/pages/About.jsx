import styled from 'styled-components';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { RiReactjsFill } from 'react-icons/ri';

const About = () => {
	return (
		<AboutContainer>
			<AboutSection>
				<h2>LITT OM MEG</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
					nesciunt sed enim voluptatum aliquam laborum repellat id, obcaecati
					deserunt expedita, porro quaerat ex reprehenderit corrupti numquam
					quasi quod tempore nisi debitis assumenda. Dolorem, nemo molestias
					aliquam, fugit id quae veritatis temporibus omnis repellat eveniet
					velit iste nostrum aspernatur. Eum ratione dicta, dignissimos illum
					voluptatibus modi eligendi possimus cum repellendus dolores similique
					veritatis ex culpa quia beatae eius reprehenderit nostrum reiciendis
					harum nesciunt, nobis aperiam eaque sit magni. Blanditiis accusamus
					libero maxime consectetur dolorum rem, ipsum quaerat, iure sed
					laboriosam obcaecati facere eaque, amet fugit porro facilis. Dolore
					officiis atque illum?
				</p>
			</AboutSection>
			<AboutGrid>
				<div>
					<h3>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
						natus.
					</h3>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
						id necessitatibus consectetur eius atque, reiciendis provident
						veniam quos deserunt numquam dolorum, minus placeat est itaque
						quisquam, minima error alias assumenda?
					</p>
				</div>

				<div>
					<h4>Mine erfaringer:</h4>
					<StyledIcons>
						{' '}
						<AiFillHtml5 /> <DiCss3 /> <IoLogoJavascript /> <RiReactjsFill />
					</StyledIcons>
				</div>
			</AboutGrid>
		</AboutContainer>
	);
};

export default About;

const AboutContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	background: #1b1d1e;
	color: white;
`;

const AboutSection = styled.section`
	text-align: left;
	width: 80%;
	margin: 1em auto;
	padding: 2em;
	h2 {
		text-align: center;
		text-decoration: underline;
		text-underline-offset: 0.6em;
		font-size: 3em;
	}
	p {
		line-height: 1.4em;
	}
`;

const AboutGrid = styled.div`
	display: grid;
	justify-items: center;
	grid-template: repeat(1, 1fr) / repeat(2, 1fr);
	width: 82%;
	margin: 0 auto;
	padding: 1em;
	text-align: left;
	border: solid 2px red;
	h3 {
		grid-row: 1;
		grid-column: 1;
		border: solid 2px blue;
	}
	h4 {
		grid-row: 1;
		grid-column: 2;
		padding: 1em;
		border: solid 2px green;
	}
	/* p {
		grid-row: 2;
		grid-column: 2;
		padding: 1em;
		border: solid 2px orange;
	} */
`;

const StyledIcons = styled.p`
	font-size: 3em;
`;
