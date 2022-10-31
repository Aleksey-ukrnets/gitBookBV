import React from 'react'
import css from './style.module.scss'
export default function BtnReadMore({handler,children,purple}) {
  return (
    <div className={css.container}>
        <button className={css.btn} onClick={handler} style={purple && {padding: '11px 35px', background: 'linear-gradient(140deg, #6534CE 8.91%, #3C1182 90.52%)', color: '#FFFFFF'}}>
            {children}
        </button>
    </div>
  )
}
