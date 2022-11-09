import React from 'react';
import css from  '../styles/footer.module.scss';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.columns}>
        <h1 className={css.title}>Copyright © {new Date().getFullYear()}. All Rights Reserved by BVGAME Limited</h1>
        <div className={css.colSec}>
          <a href='https://battleverse.io/legal_notice' target={'_blank'} rel='noreferrer' className={css.desc}>Legal Notice & Disclaimers</a>
          <a href='https://battleverse.io/privacy_policy' target={'_blank'} rel='noreferrer' className={css.desc}>Privacy policy</a>
        </div>

      </div>
    </footer>
  );
}
