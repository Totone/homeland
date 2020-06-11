import React from 'react';
import Icon from './Icon';

import './card.scss';

const Card = ({ data }) => {
  const { title, id, description } = data;

  return (
    <article className="card">
      <header>{title}</header>
      <Icon id={id}/>
      <main>{description}</main>
    </article>
  );
};


export default React.memo(Card);
