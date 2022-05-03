import style from '../liste/filterEvents.module.scss'
import { useState, useEffect } from 'react'

function FiltersEvents({ dati, setCurrrentFilter, currentFilter }) {


  // array di valori unici da array iniziale
  function arrayFiltri(arr) {
    const result = []
    arr.forEach((item, index) => {
      item.tags[0] && (!result.includes(item.tags[0]?.name) && result.push(item.tags[0]?.name))
    })
    return result
  }






  function arrayFiltriSelezionati(item) {
    if (!currentFilter.includes(item)) {
      setCurrrentFilter((prevFiltro) => [...prevFiltro, item])
    } else {
      setCurrrentFilter(currentFilter.filter((itemb) => item !== itemb))
    }
    return currentFilter
  }

  

  function setStyleActive(elemento, arrayFiltri, stile) {
    if (arrayFiltri.includes(elemento)) {
      return style.active
    }
    return ''
  }

  return (
    <ul className={style.filtribox}>
      {arrayFiltri(dati).map((item) => {
        return <li key={item}
          className={`${setStyleActive(item, currentFilter, style)}`}
          onClick={() => arrayFiltriSelezionati(item)}>{item}
        </li>
      })}
    </ul>
  )
}

export default FiltersEvents