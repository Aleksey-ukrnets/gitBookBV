import React from 'react';

import css from '../../styles/Docs/dao.module.scss';

const info = [
  {
    title: 'BattleVerse Council',
    desc: 'The story of the BattleVerse project originated from a burning desire to make a spectacular collectible NFT game that would be open, transparent, and governed by the community. ',
  },
  {
    title: 'Vote',
    desc: 'To elect council members, holders of $BVC have the ability to nominate an individual for a council chair as well as delegate their vote to a nominee. Candidates for council members must be proposed before the due date of the event, followed by a formal voting period.',
  },
  {
    title: 'Specification Overview',
    desc: 'There are two major components of the new governance system:The BattleVerse Council will consist of nominees who are voted in by the $BVC token holders, enabling the influence of the community representatives.',
  },
];

export default function Dao() {
  return (
    <div className={css.dao}>
      <div className={css.wrapper}>{info.map((el, index) => {
        return(
            <div className={css.blockText} key={index}>
                <h1 className={css.title}>{el.title}</h1>
                <p className={css.desc}>{el.desc}</p>
            </div>
        )
      })}</div>
    </div>
  );
}
