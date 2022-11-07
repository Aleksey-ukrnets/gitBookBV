import React from 'react'
import css from '../styles/sidemenu.module.scss'
import telegram from '../assets/sideMenu/icon_telegram.svg'
import twitter from '../assets/sideMenu/icon_twitter.svg'
import linked from '../assets/sideMenu/linked.svg'
import medium from '../assets/sideMenu/icon_medium.svg'
export default function SideMenu() {
const links = [
    {img: twitter,link: 'https://twitter.com/BattleVerse_io' },
    {img: linked,link: 'https://ru.linkedin.com/company/battleverse-io?trk=ppro_cprof' },
    {img: telegram,link: 'https://t.me/battleverse_news' },
    {img: medium,link: 'https://battleverse.medium.com/' },
]
  return (
    <div className={css.main}>
        <div className={css.wrapper}>
            
            <div className={css.linkList}>
                {links.map((el,index) => {
                    return(
                    <a key={index}href={el.link} target='_blank' rel='noreferrer' className={css.link}>
                        <img src={el.img} alt="link" />
                    </a>)
                })}
            </div>
        </div>
    </div>
  )
}
