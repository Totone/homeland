import React from 'react';
import Form from '../../components/ContactForm';
import Container from '../../components/PageContainer';

import './contact.scss';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <Container id="contact">
      <section className="content">
        <p>{t('contact.content')}</p>
        <Form />
      </section>

    </Container>
  );
};

export default React.memo(Contact);
