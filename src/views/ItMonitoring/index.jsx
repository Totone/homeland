import React from 'react';
import { useTranslation } from 'react-i18next';
import List from '../../components/List';
import Container from '../../components/PageContainer';

const ItMonitoring = () => {
  const { t } = useTranslation();
  return (
    <Container id="itMonitoring">
      <p>{t('itMonitoring.subheader')}</p>
      <List type="itMonitoring" />
    </Container>
  );
};

export default React.memo(ItMonitoring);
