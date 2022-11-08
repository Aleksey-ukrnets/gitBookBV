import React from 'react'
import css from '../styles/sidemenu.module.scss'
import {ReactComponent as  TelegramIcon} from '../assets/sideMenu/icon_telegram.svg'
import {ReactComponent as  TwitterIcon}  from '../assets/sideMenu/icon_twitter.svg'
import {ReactComponent as  LinkedIcon } from '../assets/sideMenu/linked.svg'
import {ReactComponent as  MediumIcon } from '../assets/sideMenu/icon_medium.svg'
export default function SideMenu() {
const links = [
    {Icon: TelegramIcon,link: 'https://twitter.com/BattleVerse_io' },
    {Icon: TwitterIcon,link: 'https://ru.linkedin.com/company/battleverse-io?trk=ppro_cprof' },
    {Icon: LinkedIcon,link: 'https://t.me/battleverse_news' },
    {Icon: MediumIcon,link: 'https://battleverse.medium.com/' },
]
  return (
    <div className={css.main}>
        <div className={css.wrapper}>
            
            <div className={css.linkList}>
                {links.map((el,index) => {
                    return(
                    <a key={index}href={el.link} target='_blank' rel='noreferrer' className={css.link}>
                       {<el.Icon className={css.svg} />}
                    </a>)
                })}
            </div>
        </div>
    </div>
  )
}
