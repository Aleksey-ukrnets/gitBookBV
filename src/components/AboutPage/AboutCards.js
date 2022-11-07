import React from 'react'
import css from '../../styles/AboutPage/cards.module.scss'
import InfoCard from './InfoCard'
import gameplayImg from '../../assets/aboutPage/gameplay.png'
import about from '../../assets/aboutPage/about.png'
export default function AboutCards() {
  const cards = [
    {title: 'About the project',description: 'Go on the most exciting journey of your life, which will', btnText: 'read more',img: about,link: '/about'},
    {title: 'gameplay',description: 'Go on the most exciting journey of your life, which will ', btnText: 'read more', img: gameplayImg,link: '/gameplay'},
  ]
  return (
    <section className={css.cards}>
      <div className={css.wrapper}>
        {cards.map((el,index)=> {
          return(
            <InfoCard el={el} key={index} />
          )
        })}
      </div>
    </section>
  )
}
