import styled from 'styled-components';

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
				<h3>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
					maiores nobis nemo blanditiis deleniti porro dignissimos, reiciendis
					ipsam modi enim iusto, natus voluptatum necessitatibus obcaecati
					omnis. Dolorem praesentium fugit adipisci.
				</h3>
				<h4>Mine erfaringer:</h4>
				<p>HTML, CSS, Javascript, React</p>
			</AboutGrid>
		</AboutContainer>
	);
};

export default About;

const AboutContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	background: grey;
`;

const AboutSection = styled.section`
	text-align: left;
	width: 80%;
	margin: 1em auto;
	padding: 2em;
	h2 {
		text-align: center;
		text-decoration: underline;
		text-decoration-thickness: 0.2em;
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
	grid-template: repeat(2, 1fr) / repeat(2, 1fr);
	width: 80%;
	margin: 0 auto;
	padding: 1em;
	border: solid 2px red;
	h3 {
		grid-row: 1 / 3;
		grid-column: 1;
		padding: 1em;
		border: solid 2px blue;
	}
	h4 {
		grid-row: 1;
		grid-column: 2;
		padding: 1em;
		border: solid 2px green;
	}
	p {
		grid-row: 2 / 3;
		grid-column: 2;
		padding: 1em;
		border: solid 2px orange;
	}
`;
