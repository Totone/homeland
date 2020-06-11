import React from 'react';

// import { useTranslation } from 'react-i18next';
import { contactInputs as inputs } from '../../services/i18n';
// import sendMail from '../../services/mailer';

import FormInput from './FormInput';

import './contactForm.scss';

const Button = () => (
  <section className="contactForm--button">
    <button type="submit">Envoyer</button>
  </section>
);

const ContactForm = () => {
  // const { t } = useTranslation();

  // const [push, setPush] = React.useState('');
  const [inputValues, setInputValues] = React.useState({
    pseudo: '',
    email: '',
    phoneNb: '',
    subject: '',
    content: '',
  });
  const submitMail = (e) => {
    e.preventDefault();

    // try {
    //   sendMail(inputValues);
    //   setPush('success');
    // } catch (e) {
    //   setPush('danger');
    // }
  };

  const handleInputChange = (e) => setInputValues({
    ...inputValues,
    [e.target.id]: e.target.value,
  });

  return (
    <form className="contactForm" method="POST" onSubmit={submitMail}>
      {/*
        push && (
        <Alert variant={push}>
          {`${t(`contact.push.${push}`)}${
            push === 'success' ? ` ${inputValues.email}` : ''
          }`}
        </Alert>
      )*/}

      {
        inputs.map(
          (inputId) => (
            <FormInput
              key={`formInputs-${inputId}`}
              id={inputId}
              value={inputValues[inputId]}
              onChange={handleInputChange}
            />
          )
        )
      }

      

      <Button />
    </form>
  );
};

export default React.memo(ContactForm);
