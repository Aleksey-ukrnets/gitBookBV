import React from 'react';
import css from '../../styles/Gameplay/gameMode.module.scss';

import combat from '../../assets/gameplay/combat.png';

import { infoGameMode } from './textComponent/infoAnnotaton';
import AnnotationGameMode from './textComponent/AnnotationGameMode';

// import first from '../../assets/gameplay/arena.png'
// import second from '../../assets/gameplay/journey.png'
// import third from '../../assets/gameplay/racing.png'
// const imgs = [
//   {img: first},
//   {img: second},
//   {img: third }
// ]

export default function GameMode() {
  return (
    <div className={css.gameMode}>
      <div className={css.wrapper}>
        <div className={css.wrapperTitles}>
          <div className={css.annotation}>
            <h1 className={css.title}>Game modes</h1>
            <h4 className={css.descName}>Arena </h4>
            <p className={css.desc}>
              Fight with other players face to face using all your skills in
              turn-based tactical combat
            </p>
            <h3 className={css.blockTitle}>Combat System:</h3>
          </div>
        </div>
        <img src={combat} alt="combat" />
        <div className={css.wrapperTitles}>
          <div className={css.annotation}>
            <h4 className={css.descName}>Rush Hour </h4>
            <p className={css.desc}>
              Platform racing on various tracks. Prove your skills playing with
              other gamers in racing PvP mode. This game mode is in progress.
            </p>
            <h4 className={css.descName}>The Maze of Trials</h4>
            <div>
              {/* {imgs.map(el => {
                return(
                 <div key={el.img}>
                   <img src={el.img} alt='img' />
                 </div>
                )
                  
              
              })} */}
            </div>
            <p className={css.desc}>
              Journey to planets of the Battleverse where your characters will
              explore dungeons, secret laboratories and ancient ruins. Every
              step may be the last, but the rewards are worth it.
            </p>
          </div>
        </div>
        <AnnotationGameMode info={infoGameMode.gameTitle} />
        <AnnotationGameMode info={infoGameMode.craftTitle} />
        <AnnotationGameMode info={infoGameMode.craftCycleTitle} />
      </div>
    </div>
  );
}
