import React, { useState } from 'react'
import TeamBack from '../../assets/AboutProject/team/Paricles.svg'
import '../../styles/AboutProject/team.scss'
import { team } from './textComponent/teamInfo'
export default function Team() {
  const [membs, setMembs] = useState(12)
  return (
   <div>
     <div className='team' id="Team">
        <div className='blockInfo'>
          <h1>TEAM</h1>
          <p>Highly qualified, expertized and energetic professionals
            with experience in developing game projects</p>
        </div>
        <div className='members' style={{ backgroundImage: `url(${TeamBack})` }}>
          {(team.slice(0, membs)).map((item, index) => (
            <div key={index} className={membs === 12 ? 'memberInfo' : 'memberInfo moreMembs'}>
              <img className='memberPic' src={item.member} alt={item.name} />
              <div className='memberText'>
                <h4>{item.name}</h4>
                <span>{item.position}</span>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.icon} alt={item.link} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
       <button className={membs === 12 ? 'show_more_membs' : 'show_more_membs less'} onClick={() => membs === 12 ? setMembs(team.length) : setMembs(12)}
      
     >
       {membs === 12 ?
       'Show more members'
     : 'Show less members'}</button>
   </div>
  )
}
