import React from 'react';
import { useNavigate } from 'react-router';
import css from './backBtn.module.scss';
import arrow from '../../assets/Arrow-left.svg';
export default function BtnGoBack() {
  const navigate = useNavigate();

  const goBack = () => navigate('/');
  return (
    <button className={css.btnBack} onClick={goBack}>
      <div>
        <img src={arrow} alt="arrow" />
        <p className={css.text}>Back</p>
      </div>
    </button>
  );
}
