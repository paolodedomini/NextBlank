import { useState, useEffect } from 'react'
import style from './eventiListaHome.module.scss'
import Lista from '../liste/lista'
import {motion, AnimatePresence} from 'framer-motion'

function EventiListaHome({ dati }) {
console.log('dati',dati);
  return (
    <div className={style.wrapperLista}>
        <Lista listaDatiFiltrati={dati} style={style} sezioneLista = "eventi" />
      </div>
  )
}

export default EventiListaHome