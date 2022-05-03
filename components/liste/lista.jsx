import Link from 'next/link'
import { GrLinkNext } from "react-icons/gr"
import{motion} from 'framer-motion'
function Lista({ listaDatiFiltrati, style, sezioneLista }) {
    const sliced = listaDatiFiltrati.slice(0, 15)
    return (
        <motion.ul
        key="lista"
        initial={{ opacity: 0, top:'15px' }}
        animate={{ opacity: 1, top:0 }}
        exit={{ opacity: 0, top:'15px' }}
      >
            {listaDatiFiltrati.map((item) => {
                const dataPubblicazione = item.pubblicationDate && new Date(item.pubblicationDate).toLocaleString('en', { day: 'numeric', month: 'long', year: 'numeric' })
                const dataEvento = item.startDate && new Date(item.startDate).toLocaleString('en', { day: 'numeric', month: 'long', year: 'numeric' })
                return (

                    <Link key={item._id} href={sezioneLista === 'magazine' ? `${sezioneLista}/${item.slug}` :'#'}><li className={style.evento}>
                        <div className={style.title}>{item.title || item.name}</div>
                        <div className={style.data}>
                            {dataPubblicazione || dataEvento } <span><GrLinkNext /> </span>
                        </div>
                    </li>
                    </Link>
                )
            })}

        </motion.ul>
    )
}

export default Lista