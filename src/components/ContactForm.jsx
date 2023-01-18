import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
// import Modal from './Modal';

const ContactForm = () => {
	const form = useRef();

	// const [openModal, setOpenModal] = useState(false);

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
		// setOpenModal(true);
	};

	return (
		<ContactWrapper>
			<StyledContactForm>
				<h2 id='Kontakt'>Kontakt</h2>
				<form ref={form} onSubmit={sendEmail}>
					<label>Navn</label>
					<input type='text' name='user_name' required />

					<label>Email</label>
					<input type='email' name='user_email' required />

					<label>Melding</label>
					<textarea name='message' />
					<input type='submit' value='Send' />
					{/* {openModal && <Modal closeModal={setOpenModal} />} */}
				</form>
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
`;

const StyledContactForm = styled.div`
	width: 60em;
	margin: 0 auto;
	padding: 2em;
	h2 {
		font-weight: bold;
		font-size: 3em;
		text-align: center;
		text-decoration: underline;
		text-underline-offset: 0.3em;
		margin-top: 2em;
		margin-bottom: 0.5em;
	}

	form {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		width: 100%;
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
