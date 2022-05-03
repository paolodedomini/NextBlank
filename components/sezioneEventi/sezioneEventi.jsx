import EventiListaHome from './eventiListaHome'
import style from './sezioneEventi.module.scss'


import { ReadMore } from '../ui/ui'
function SezioneEventi({ dati, home }) {
  console.log(dati);
  return (
    <section className="blocco_6">
      <div className={style.wrappertext}>
        <h2>Past Events</h2>
        <h3>Check out the list of our past events. If you attended any of
          these you will find the video materials in the dedicated page</h3>
        {home &&
          <div style={{ textAlign: 'right' }}>
            <ReadMore text="Eventi" link="/eventi/" />
          </div>}
      </div>
      <EventiListaHome dati={dati} />
    </section>
  )
}

export default SezioneEventi