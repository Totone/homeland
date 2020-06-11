import React from 'react';
import { useTranslation } from 'react-i18next';

import Container from '../../components/PageContainer';
import List from '../../components/List';

const Services = () => {
  const { t } = useTranslation();
  return (
    <Container id="services">
      <p>{t('services.subheader')}</p>
      <List type="services" />
    </Container>
  );
};

export default React.memo(Services);
