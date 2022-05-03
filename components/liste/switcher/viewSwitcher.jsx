import style from './viewSwitcher.module.scss'
import {GrApps, GrList} from 'react-icons/gr'

function ViewSwitcher({setSwitchCard}) {
  return (
    <div className={style.switcher}>
    <div className={style.listButton} onClick={()=>setSwitchCard(false)}><GrList /></div>
    <div className={style.cardButton} onClick={()=>setSwitchCard(true)}><GrApps /></div>
    </div>
  )
}

export default ViewSwitcher