import React from 'react'

import css from '../../styles/AboutProject/intro.module.scss'

import cosmos from '../../assets/AboutProject/cosmos.png'
import backgr from '../../assets/AboutProject/backProj.png'

import { info } from './textComponent/infoIntro'
import AnnotationIntro from './textComponent/AnnotationIntro'

export default function Intro() {
  return (
    <div className={css.intro}>
        <div className={css.wrapper}>
            <img src={backgr} alt="backgr" />
            <AnnotationIntro info={info.onlyText} />
            <img src={cosmos} alt="cosmos" />
            <AnnotationIntro info={info.gametitle} />
            <AnnotationIntro info={info.botsTitle} />
            <AnnotationIntro info={info.shroomTitle} />
        </div>
    </div>
  )
}
