import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const ContactForm = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				/* Service-ID */ 'service_1g3juwx',
				/* Template-ID */ 'template_4ap7c2q',
				form.current,
				/* Public-Key */ 'ecegCdL455fW10xWe'
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log('message sent');
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

	return (
		<ContactWrapper>
			<StyledContactForm>
				<ContactContainer>
					<ContactDiv>
						<h2 id='Kontakt'>Kontakt</h2>
						<p>
							<AiOutlineMail /> joar1.kodehode@gmail.com
						</p>
						<p>
							<AiOutlinePhone /> 90052403
						</p>
					</ContactDiv>
					<form ref={form} onSubmit={sendEmail}>
						<label>Navn</label>
						<input type='text' name='user_name' required />

						<label>Email</label>
						<input type='email' name='user_email' required />

						<label>Melding</label>
						<textarea name='message' />
						<input type='submit' value='Send' />
					</form>
				</ContactContainer>
			</StyledContactForm>
		</ContactWrapper>
	);
};

export default ContactForm;

const ContactWrapper = styled.div`
	background: #121212;
	color: white;
	width: 100%;
	margin: 0 auto;
	padding-bottom: 5em 0;
`;

const ContactContainer = styled.div`
	display: flex;
	margin: 5em 0;
`;

const ContactDiv = styled.div`
	text-align: left;
	width: 50%;
	h2 {
		text-decoration: underline;
		text-underline-offset: 0.4em;
		font-size: 3em;
		margin-top: 40px;
	}
	p {
		margin: 2em 0;
		font-size: 1.3em;
	}
`;

const StyledContactForm = styled.div`
	width: 60%;
	margin: 0 auto;
	padding: 2em;
	form {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		width: 60%;
		font-size: 1.3em;
		input {
			width: 100%;
			height: 35px;
			padding: 7px;
			outline: none;
			border-radius: 5px;
			border: 1px solid rgb(220, 220, 220);
		}
		textarea {
			max-width: 100%;
			min-width: 100%;
			width: 100%;
			max-height: 100px;
			min-height: 100px;
			padding: 7px;
			outline: none;
			border-radius: 5px;
			border: 1px solid rgb(220, 220, 220);
		}
		label {
			margin-top: 1.2em;
			padding-bottom: 0.2em;
		}
		input[type='submit'] {
			margin-top: 2em;
			margin-bottom: 4em;
			background: green;
			width: 40%;
			margin: 2em auto;
			color: white;
			border: none;
			font-weight: 600;
			cursor: pointer;
		}
	}
`;
