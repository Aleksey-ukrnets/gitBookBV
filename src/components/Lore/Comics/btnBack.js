import React from 'react';
import { useNavigate } from 'react-router';

import css from '../../../styles/Lore/comics.module.scss';

import arrow from '../../../assets/Lore/Comics/Arrow-left.svg';

export default function BtnBack({ text,setTab }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
   
  };
  return (
    <button className={css.btnBack} onClick={goBack}>
      <div>
        <img src={arrow} alt="arrow" />
        <p className={css.text}>{text}</p>
      </div>
    </button>
  );
}
