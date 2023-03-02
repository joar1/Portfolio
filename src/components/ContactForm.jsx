import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import Modal from './Modal';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const ContactForm = () => {
	const form = useRef();
	const [openModal, setOpenModal] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				/* Service-ID */ 'service_97c42wk',
				/* Template-ID */ 'template_1qiy9b4',
				form.current,
				/* Public-Key */ 'MZaGYmvtr8CJ974fV'
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
		setOpenModal(true);
	};

	return (
		<ContactContainer>
			<ContactWrapper>
				<ContactDiv>
					<h2 id='Kontakt'>Kontakt</h2>
					<p>
						<AiOutlineMail /> joar.reinsnes@gmail.com
					</p>
					<p>
						<AiOutlinePhone /> 90052403
					</p>
				</ContactDiv>
				<SpanLine />
				<StyledContactForm>
					<form ref={form} onSubmit={sendEmail}>
						<label>Navn</label>
						<input type='text' name='user_name' required />

						<label>Email</label>
						<input type='email' name='user_email' required />

						<label>Melding</label>
						<textarea name='message' />
						<input type='submit' value='Send' required />
						{openModal && <Modal closeModal={setOpenModal} />}
					</form>
				</StyledContactForm>
			</ContactWrapper>
		</ContactContainer>
	);
};

export default ContactForm;

const ContactContainer = styled.div`
	height: 80vh;
	padding: 8em 0 1em 0;
	background-color: #1f2833;
	@media (max-width: 768px) {
		display: grid;
		grid-template-columns: 1fr;
		font-size: 2vw;
		max-width: 100%;
	}
`;

const ContactWrapper = styled.div`
	display: flex;
	margin: 0 auto;
	width: 90%;
	color: white;
`;

const ContactDiv = styled.div`
	margin: 3em auto;
	text-align: left;
	color: white;
	h2 {
		text-decoration: underline;
		text-underline-offset: 0.4em;
		font-size: 3em;
		color: #66fcf1;
	}
	p {
		font-size: 1.3em;
		padding: 0.5em 0;
		color: #66fcf1;
	}
`;

const StyledContactForm = styled.div`
	width: 40%;
	margin: 0 auto;
	form {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
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
			padding-bottom: 0.1em;
			color: #66fcf1;
		}
		input[type='submit'] {
			margin-top: 2em;
			margin-bottom: 4em;
			background: green;
			max-width: 100%;
			margin: 2em auto;
			color: white;
			border: none;
			font-weight: 600;
			cursor: pointer;
			@media (max-width: 768px) {
				display: grid;
				grid-template-columns: 1fr;
			}
		}
	}
`;

const SpanLine = styled.span`
	display: block;
	align-items: center;
	margin: 50px auto;
	height: 25em;
	width: 0.2em;
	background-color: #66fcf1;
	@media (max-width: 768px) {
		margin: 100px auto;
		height: 150px;
	}
`;
