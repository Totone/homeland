import React from 'react';
import { useTranslation } from 'react-i18next';

import Avatar from '../../components/Avatar';
import './home.scss';

const Home = () => {
  const { t } = useTranslation();

  return (
    <article id="home">
      <Avatar className="onlyInLarge"/>
      <section className="meet">
        <h1>{t('home.header')}</h1>
        <Avatar />
        <h3 className="test">{t('home.subheader')}</h3>
      </section>
    </article>
  );
};

export default React.memo(Home);
