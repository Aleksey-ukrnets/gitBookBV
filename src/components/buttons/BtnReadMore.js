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
            purple && 'linear-gradient(140deg, #6534CE 8.91%, #3C1182 90.52%)',
          color: purple && '#FFFFFF',
          // width: docWidth && '100%'
        }}
      >
        {children}
      </button>
   
  );
}
