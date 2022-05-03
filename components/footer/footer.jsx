import style from './footer.module.scss'
import Image from 'next/image'
function Footer({ menu }) {

  return (
    <footer>
      <div className={style.wrapperlogo}>
        <Image
          src="/images/logo-aida-color.png"
          width={200}
          height={110}
          alt="img"
        />
      </div>
      <div className={style.footermenu}>
        <ul>
          {menu.map((item) => {
            return <li key={item._id}>{item.title}</li>
          })}
        </ul>
      </div>
      <div>
        <Image
          src="/images/logo-unisi.jpg"
          width={112}
          height={110}
          alt="img"
        />
      </div>
      <div className={style.info}>
        University of Siena - Department of Medical Sciences, Surgery and Neuroscience
        <br/>Viale Mario Bracci, 16 - Siena (Policlinico Santa Maria alle Scotte), 53100 Siena ITALY
        <br/>VAT 00273530527
      </div>
    </footer>
  )
}

export default Footer