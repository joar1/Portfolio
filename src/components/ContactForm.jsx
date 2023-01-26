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
		<ContactContainer>
			<ContactWrapper>
				<ContactDiv>
					<h2 id='Kontakt'>Kontakt</h2>
					<p>
						<AiOutlineMail /> joar1.kodehode@gmail.com
					</p>
					<p>
						<AiOutlinePhone /> 90052403
					</p>
				</ContactDiv>

				<StyledContactForm>
					<form ref={form} onSubmit={sendEmail}>
						<label>Navn</label>
						<input type='text' name='user_name' required />

						<label>Email</label>
						<input type='email' name='user_email' required />

						<label>Melding</label>
						<textarea name='message' />
						<input type='submit' value='Send' />
					</form>
				</StyledContactForm>
			</ContactWrapper>
		</ContactContainer>
	);
};

export default ContactForm;

const ContactContainer = styled.div`
	background: #121212;
`;

const ContactWrapper = styled.div`
	display: flex;
	margin: 0 auto;
	width: 85%;
	padding: 2em;
	background: #121212;
	color: white;
`;

const ContactDiv = styled.div`
	margin: 0 auto;
	text-align: left;
	h2 {
		text-decoration: underline;
		text-underline-offset: 0.4em;
		font-size: 3em;
		color: rgb(122, 232, 122);
		text-shadow: green 1px 0 10px;
	}
	p {
		font-size: 1.3em;
		padding: 1em 0;
	}
`;

const StyledContactForm = styled.div`
	width: 40%;
	margin: 0 auto;
	padding: 0 2em;
	form {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		padding: 1em;
		font-size: 1.3em;
		input {
			width: 100%;
			height: 35px;
			padding: 0.81em 0 0.81em 1em;
			outline: none;
			border-radius: 5px;
			border: 1px solid rgb(220, 220, 220);
			&:focus {
				border: green solid 3px;
			}
		}
		textarea {
			width: 100%;
			height: 60px;
			padding: 0.81em 0 0.81em 1em;
			outline: none;
			border-radius: 5px;
			border: 1px solid rgb(220, 220, 220);
			&:focus {
				border: green solid 3px;
			}
		}
		label {
			margin-top: 1.2em;
			padding-bottom: 0.2em;
		}
		input[type='submit'] {
			margin-top: 2em;
			margin-bottom: 4em;
			background: green;
			width: 50%;
			margin: 2em auto;
			color: white;
			border: none;
			font-weight: 600;
			cursor: pointer;
		}
	}
`;
