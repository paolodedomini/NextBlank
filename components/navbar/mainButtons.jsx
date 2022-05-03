import style from './mainbuttons.module.scss'
import { GrMenu, GrClose, GrUser } from "react-icons/gr";
function MainButton({ menuOpen, setMenuOpen }) {
    return (
        <ul className={style.mainButtons}>
            {!menuOpen && <li className={style.menubtn}><GrUser /></li>}
            {!menuOpen && <li className={style.menubtn} onClick={() => setMenuOpen(true)}>
                <GrMenu /></li>}
            {menuOpen && <li className={style.closebtn} onClick={() => setMenuOpen(false)}>
                <GrClose /></li>}
        </ul>
    )
}

export default MainButton