import styled from 'styled-components';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { RiReactjsFill } from 'react-icons/ri';

const About = () => {
	return (
		<AboutContainer>
			<AboutMe>
				<h2 id='Om'>LITT OM MEG</h2>
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
			</AboutMe>

			<AboutSection>
				<LeftBox>
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
				</LeftBox>

				<RightBox>
					<h4>Jeg har erfaringer i</h4>
					<StyledIcons>
						{' '}
						<AiFillHtml5 /> <DiCss3 /> <IoLogoJavascript /> <RiReactjsFill />{' '}
						<AiFillGithub />
					</StyledIcons>
				</RightBox>
			</AboutSection>
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

const AboutMe = styled.section`
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

const AboutSection = styled.div`
	display: flex;
	justify-items: center;
	justify-content: space-between;
	width: 80%;
	margin: 0 auto;
	padding: 1em;
	text-align: left;
`;

const LeftBox = styled.div`
	width: 40%;
	padding: 1em;
`;

const RightBox = styled.div`
	width: 40%;
	padding: 1em;
	h4 {
		text-align: center;
	}
`;

const StyledIcons = styled.p`
	text-align: center;
	font-size: 3em;
`;
