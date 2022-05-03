import style from './callToAction.module.scss'
import { BASE_URL_IMMAGINI } from '../../lib/costanti'
import Image from 'next/image'

function CallToAction({ title, testi, textBtn, linkBtn, immagine }) {

  return (
    <section className="blocco_2">
      <div className={style.wrappertext}>
        <h3 className={style.title}>{title}</h3>
        <div className={style.text} dangerouslySetInnerHTML={{ __html: testi }} />
      </div>
      <div className={style.calltoaction}>
        <div className={style.ctaBtn}>
          <a href={linkBtn}>{textBtn}</a>
        </div>
      </div>

      {immagine ? 
      <div className={style.background}>
          <Image
            src={`${BASE_URL_IMMAGINI}${immagine}`}
            width={450}
            height={330}
            blurDataURL='/images/back_main_menu.png'
            alt="img"
            placeholder="blur"
            layout='intrinsic'
          />
        </div> : 
          <div className={style.background}>
          <Image
              src="/images/footer-texture.png"
              width={450}
              height={333}
              alt="img"
          />
        </div>
        }
    </section>
  )
}
CallToAction.defaultProps = {
  title:'Title',
  testi:'testo',
  textBtn:'testoBtn',
  linkBtn: '#'

};
export default CallToAction