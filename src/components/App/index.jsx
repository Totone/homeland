import React from 'react';
import '../../assets/config/style/reset.css';
import '../../assets/style/fonts.scss';

import Home from '../../views/Home';
import Services from '../../views/Services';
import ItMonitoring from '../../views/ItMonitoring';
import Contact from '../../views/Contact';

import '../../assets/config/i18n';

import Layout from '../Layout';

const App = () => {
  // const [width, setWidth] = React.useState('');
  // const [height, setHeight] = React.useState('');

  // window.onresize = () => {
  //   setWidth(window.innerWidth + '');
  //   setHeight(window.innerHeight + '');
  // };

  return (
    <Layout>
      <Home />
      <Services />
      <ItMonitoring />
      <Contact />
    </Layout>
  );
};

export default React.memo(App);
