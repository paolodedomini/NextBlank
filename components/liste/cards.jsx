import Link from 'next/link'
import { GrLinkNext } from "react-icons/gr"
import { BASE_URL_IMMAGINI } from '../../lib/costanti'
import {motion} from 'framer-motion'
import Image from 'next/image'
import {SVGLazy} from '../../lib/animations'

const toBase64 = (str) =>
typeof window === 'undefined'
  ? Buffer.from(str).toString('base64')
  : window.btoa(str)

function Cards({ listaDatiFiltrati, style }) {
  const sliced = listaDatiFiltrati.slice(0, 15)
  return (
    <motion.ul
    key="cards"
    initial={{ opacity: 0, top:'15px' }}
    animate={{ opacity: 1, top:0 }}
    exit={{ opacity: 0, top:'15px' }}
    className={style.cardWrapper}>
      {sliced.map((item) => {
        const dataPubblicazione = new Date(item.pubblicationDate).toLocaleString('en', { day: 'numeric', month: 'long', year: 'numeric' })
        return (
          <Link key={item._id} href={`magazine/${item.slug}`}>
            <li className={style.card}>
              <div className={style.cardImage}>
                {item.thumbnail ? <Image
                  src={`${BASE_URL_IMMAGINI}${item.thumbnail?.images[0].fullPath}`}
                  width={450}
                  height={250}
                  blurDataURL="/images/placeholder-blur.jpg"
                  placeholder="blur"
                  layout='intrinsic'
                /> :

                  <Image
                    src="/images/placeholder.jpg"
                    width={450}
                    height={250}
                    quality={100}
                    blurDataURL="/images/placeholder-blur.jpg"
                    placeholder="blur"
                    layout='intrinsic'
                    alt="img"
                  />
                }
              </div>
              <div className={style.textCard}>
                <div className={style.data}>
                  {dataPubblicazione}
                </div>
                <div className={style.title}>{item.title}</div>
                <div className={style.abstract}>  {
                item.abstract.length > 150 ?
                  `${item.abstract.substring(0, 150)}...` : item.abstract
                }</div>
              </div>
            </li>
          </Link>
        )
      })}

    </motion.ul>
  )
}

export default Cards