import React from 'react';
import avatar from '../../assets/img/avatar.png';
import './avatar.scss';

const Avatar = ({ className }) => (
  <img
    className={`avatar ${className}`}
    src={avatar}
    title="avatar"
    alt="avatar"
  />
);

export default React.memo(Avatar);
