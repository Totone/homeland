import React from 'react';

import Footer from '../Footer';

const Layout = (props) => {
  return (
    <main>
      {props.children}
      <Footer />
    </main>
  );
};

export default React.memo(Layout);
