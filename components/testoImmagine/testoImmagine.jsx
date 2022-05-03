import style from './testoImmagine.module.scss';
import { BASE_URL_IMMAGINI } from '../../lib/costanti';
import { ReadMore } from '../ui/ui';
import Image from 'next/image'
import {SVGLazy, testBase64} from '../../lib/animations'
function TestoImmagine({ dati }) {
  
    const immagine = dati.resources[0].images[0].fullPath
    const testi = dati.payload.text
    const posizione = dati.payload.imagePos

    const toBase64 = (str) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str)


    return (
        <section className={`blocco_1 ${posizione == 'sx' ? 'reverse' : ''}`} >
            <div className="col__2">
                <div className={style.wrapperText} >
                    <div dangerouslySetInnerHTML={{ __html: testi  }} />
                    <ReadMore />
                </div>
            </div>
            
            <div className="col__2">
                <div className={style.wrapperImage}>
                    <Image
                        src={`${BASE_URL_IMMAGINI}${immagine}`}
                        width={504}
                        height={504}
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(SVGLazy(504, 504))}`}
                        placeholder="blur"
                        layout='intrinsic'
                        alt="img"
                    />
                </div>
            </div>
        </section>
    )
}

export default TestoImmagine