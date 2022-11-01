import React from 'react';

import css from '../../styles/Gameplay/characters.module.scss';

import bot from '../../assets/gameplay/bot.png';
import shroom from '../../assets/gameplay/shroom.png';
import rarity from '../../assets/gameplay/rarity.png';
import attr from '../../assets/gameplay/attr.png';
import upgrade from '../../assets/gameplay/upgrade.png';
import reboot from '../../assets/gameplay/reboot.png';
import spore from '../../assets/gameplay/spore.png';
import focus from '../../assets/gameplay/focus.png';
import bless from '../../assets/gameplay/bless.png';

import { infoAnnotation, skills } from './textComponent/infoAnnotaton';

import Annotation from './textComponent/Annotation';

export default function Characters() {
  return (
    <div className={css.characters}>
      <div style={{ paddingRight: '50px' }}>
        <Annotation info={infoAnnotation.worldTitle} />
        <section className={css.cards}>
          <div className={css.card}>
            <img src={bot} alt="bot" />
          </div>
          <div className={css.card}>
            <img src={shroom} alt="shroom" />
          </div>
        </section>
        <section className={css.rarity}>
          <Annotation info={infoAnnotation.rarityTitle} />
          <img src={rarity} alt="rarity" />
        </section>
        <section className={css.attr}>
          <Annotation info={infoAnnotation.attrTitle} />
          <img src={attr} alt="attr" />
        </section>
        <section className={css.upgrade}>
          <Annotation info={infoAnnotation.upgradeTitle} />
          <img src={upgrade} alt="upgrade" />
        </section>
        <section className={css.skills}>
          <Annotation
            info={infoAnnotation.skillsTitle}
            skills={skills.firstPart}
          />
          <div className={css.cards}>
            <div className={css.card}>
              <img src={focus} alt="focus" />
            </div>
            <div className={css.card}>
              <img src={reboot} alt="reboot" />
            </div>
          </div>
          <Annotation skills={skills.secondPart} />
          <div className={css.cards}>
            <div className={css.card}>
              <img src={spore} alt="focus" />
            </div>
            <div className={css.card}>
              <img src={bless} alt="reboot" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
