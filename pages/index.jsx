import { frontpageData, menuData, magazineData, eventiLimit } from '../lib/queries'
import Layout from '../layout/layout'
import TestoImmagine from '../components/testoImmagine/testoImmagine'
import CallToAction from '../components/callToAction/callToAction'
import SezioneMagazine from '../components/sezioneMagazine/sezioneMagazine'
import SezioneEventi from '../components/sezioneEventi/sezioneEventi'
import { FadeInWhenVisible } from '../lib/animations'
import dynamic from 'next/dynamic'

const HomeSwiperSlider = dynamic(() => import('../components/slider/swiperSlider'))
const MapG = dynamic(() => import('../components/maps/googlemaps'), { loading: () => <p>Loading...</p> })

function Home({ dataHome, menu, magazine, eventiHome }) {

  const slidesImages = dataHome.partials[0].resources
  const textSlides = dataHome.partials[0].payload.slides
  const datiBlocco2 = dataHome.partials[1]
  const datiBlocco3 = dataHome.partials[2]
  const datiBlocco4 = dataHome.partials[3]
  const datiBlocco5 = dataHome.partials[4]
  const datiBloccoPastEvents = dataHome.partials[6]
  const datiBlocco6 = magazine.data

  const slides = slidesImages.map((item, index) => {
    return { _id: item._id, imgs: item, text: textSlides[index] }
  })

  slides.pop()

  const datiCallToAction = {
    title: datiBlocco4.payload.subtitle,
    testi: datiBlocco4.payload.text,
    textBtn: datiBlocco4.payload.linkText,
    linkBtn: '#',
    immagine: datiBlocco4.resources[0].images[0].fullPath
  }

  const eventiHomeFiltrati = eventiHome.data.filter((item) => {
    return datiBloccoPastEvents.payload.streams.includes(item._id)
  })


  return (
    <Layout menu={menu} home={true}>
      <HomeSwiperSlider slides={slides} />
      <FadeInWhenVisible>
        <TestoImmagine dati={datiBlocco2} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <MapG />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CallToAction
          title={datiCallToAction.title}
          testi={datiCallToAction.testi}
          textBtn={datiCallToAction.textBtn}
          linkBtn={datiCallToAction.linkBtn}
          immagine={datiCallToAction.immagine} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <TestoImmagine dati={datiBlocco5} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <SezioneEventi dati={eventiHomeFiltrati} home={true} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <SezioneMagazine dati={datiBlocco6} home={true} />
      </FadeInWhenVisible>
    </Layout>
  )
}


export async function getServerSideProps(context) {

  const [dataHomeRes, menuRes, magRes, eventiRes] = await Promise.all([
    fetch(frontpageData('it')),
    fetch(menuData('it')),
    fetch(magazineData('it')),
    fetch(eventiLimit('it', 20))
  ]);

  const [dataHome, menu, magazine, eventiHome] = await Promise.all([
    dataHomeRes.json(),
    menuRes.json(),
    magRes.json(),
    eventiRes.json()
  ]);

  return { props: { dataHome, menu, magazine, eventiHome } };


}

export default Home