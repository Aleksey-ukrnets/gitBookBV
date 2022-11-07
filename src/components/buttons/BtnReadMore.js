import React from 'react';
import { useNavigate } from 'react-router';

import css from './style.module.scss';

export default function BtnReadMore({ handler, children, purple, className }) {
  const navigate = useNavigate();
  const navTo = () => navigate(handler);
  return (
    
      <button
        className={`${css.btn} ${className}`}
        onClick={navTo}
        style={{
          padding: purple && '11px 35px',
          background:
            !purple && 'linear-gradient(246.26deg, #FFF38B 13.13%, #FFE600 59.92%, #FE6B00 105.41%)',
          color: purple && '#FFFFFF',
          // width: docWidth && '100%'
        }}
      >
        {children}
      </button>
   
  );
}
