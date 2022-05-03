import { useState, useEffect } from 'react'
import style from './listMagazine.module.scss'
import FiltersEvents from '../liste/filtersEvents'
import Lista from '../liste/lista'
import ViewSwitcher from '../liste/switcher/viewSwitcher'
import Cards from '../liste/cards'
import {motion, AnimatePresence} from 'framer-motion'

function ListMagazine({ dati }) {
  const [currentFilter, setCurrrentFilter] = useState([])
  const [listaDatiFiltrati, setListadatiFiltrati] = useState(dati)
  const [switchCard, setSwitchCard] = useState(false)

  useEffect(() => {

    if (currentFilter.length > 0) {
      const filter = dati.filter((item) => currentFilter.includes(item.tags[0]?.name))
      console.log(filter);
      setListadatiFiltrati(filter)
    } else {
      setListadatiFiltrati(dati)
    }
  }, [currentFilter])



  return (
    <div className={style.wrapperLista}>
      <div className={style.listaheader}>
        <FiltersEvents dati={dati} currentFilter={currentFilter} setCurrrentFilter={setCurrrentFilter} />
        <ViewSwitcher switchCard={switchCard} setSwitchCard={setSwitchCard} />
      </div>
      <AnimatePresence>
        {switchCard ?
        <Cards listaDatiFiltrati={listaDatiFiltrati} style={style} />
        :
        <Lista listaDatiFiltrati={listaDatiFiltrati} style={style} sezioneLista='magazine'/>
        }
      </AnimatePresence>   
      </div>
  )
}

export default ListMagazine