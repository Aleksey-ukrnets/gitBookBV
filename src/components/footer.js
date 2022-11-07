import React from 'react';
import css from  '../styles/footer.module.scss';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.columns}>
        <h1 className={css.title}>Copyright © 2021. All Rights Reserved by BVGAME Limited</h1>
        <div className={css.colSec}>
          <p className={css.desc}>Legal Notice & Disclaimers</p>
          <p className={css.desc}>Privacy policy</p>
        </div>

      </div>
    </footer>
  );
}
