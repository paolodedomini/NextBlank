import ListMagazine from "./listMagazine"
import style from './sezioneMagazine.module.scss'


import { ReadMore } from '../ui/ui'
function SezioneMagazine({ dati, home }) {
  return (
    <section className="blocco_6">
      <div className={style.wrappertext}>
        <h2>AIDA Magazine</h2>
        <h3>Our magazine collects articles of various kinds: <br /> scientific news and updates,
          reports and insights relevant to training in the AIDA academy and much more.</h3>
        {home && 
        <div style={{textAlign:'right'}}>
         <ReadMore text="Magazine" link="/magazine/" />
        </div>}
      </div>
      <ListMagazine dati={dati} />
    </section>
  )
}

export default SezioneMagazine