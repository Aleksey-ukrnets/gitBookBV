import React from 'react'
import css from '../styles/sidemenu.module.scss'
import logo from '../assets/logo_gold.png'
import { Link } from 'react-router-dom'
import telegram from '../assets/sideMenu/icon_telegram.svg'
import twitter from '../assets/sideMenu/icon_twitter.svg'
import linked from '../assets/sideMenu/linked.svg'
import medium from '../assets/sideMenu/icon_medium.svg'
export default function SideMenu() {
const links = [
    {img: twitter },
    {img: linked },
    {img: telegram },
    {img: medium },
]
  return (
    <div className={css.main}>
        <div className={css.wrapper}>
            <img className={css.logo} src={logo} alt="logoBV" />
            <div className={css.linkList}>
                {links.map((el,index) => {
                    return(
                    <Link key={index} to={'/'} className={css.link}>
                        <img src={el.img} alt="link" />
                    </Link>)
                })}
            </div>
        </div>
    </div>
  )
}
