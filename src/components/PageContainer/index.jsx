import React from 'react';
import { useTranslation } from 'react-i18next';

import './pageContainer.scss';

const PageContainer = ({ id, children }) => {
  const { t } = useTranslation();
  
  return (
    <article id={id} className="pageContainer">
      <h2>{t(`${id}.header`)}</h2>
      { children }
    </article>
  );
}

export default React.memo(PageContainer);
