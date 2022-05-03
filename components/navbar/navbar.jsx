import style from './navbar.module.scss'
import Image from 'next/image'
import { motion } from "framer-motion"
import { aperturaMenu } from '../../lib/animations'
import Link from 'next/link'
function Navbar({ menu, menuOpen }) {

  return (
    <motion.div
      variants={aperturaMenu}
      animate={menuOpen ? 'rotate' : 'stop'}
      className={style.navbar}>
      
        <div className={style.backImage}>
          <Image
            src="/images/back_main_menu.png"
            width={819}
            height={900}
            alt="img"
          />
        </div>
      
      <ul className={style.menu}>
        {Object.values(menu).map((item) => {
          return <li key={item._id}>{item.title}</li>
        })}
        <li><Link href="/magazine">Magazine</Link></li>
      </ul>
    </motion.div>
  )
}

export default Navbar