/* import { menuData, magazineData, singoloPost } from '../../lib/queries'
import { useRouter } from 'next/router'
import Layout from '../../layout/layout'
import CallToAction from '../../components/callToAction/callToAction'
import { BASE_URL_IMMAGINI } from '../../lib/costanti'
import Image from 'next/image'
import style from './magazine.module.scss'
import { GrDocumentPerformance } from 'react-icons/gr'


const MagazinePage = ({ menu, singlePost }) => {
  const router = useRouter()
  const { slug } = router.query
  const dataPubblicazione = new Date(singlePost.pubblicationDate).toLocaleString('en', { day: 'numeric', month: 'long', year: 'numeric' })
  console.log('articolo', singlePost);
  return (

    <Layout menu={menu} router={router}>
      <section className="magazine-page">
        <div className="col-1">
          <div className={style.articoloImage}>
            {singlePost.thumbnail ? <Image
              src={`${BASE_URL_IMMAGINI}${singlePost.thumbnail?.images[0].fullPath}`}
              width={450}
              height={250}
              blurDataURL='/images/back_main_menu.png'
              placeholder="blur"
              layout='intrinsic'
              alt="img"
            /> : <Image
              src="/images/placeholder.jpg"
              width={450}
              height={250}
              quality={100}
              blurDataURL='/images/back_main_menu.png'
              placeholder="blur"
              layout='intrinsic'
              alt="img"
            />}
          </div>
          <div className={style.specs}>
            {singlePost.category &&
              <div className={style.category}>
                <span>Category</span>
                {singlePost.category.name}
              </div>}
            {singlePost.highlightInfo.text &&
              <div className={style.highlights}>
                <GrDocumentPerformance />
                <div className={style.info} dangerouslySetInnerHTML={{ __html: singlePost.highlightInfo.text }} />
              </div>}
          </div>
        </div>
        <div className="col-2">
          <div className={style.titoli}>
            <h1>
              <span className={style.data}>{dataPubblicazione}</span>
              {singlePost.title}
            </h1>
          </div>
          <div className={style.corpoTesto}>
            <p>
              {singlePost.abstract}
            </p>
          </div>
        </div>
      </section>
      <CallToAction
        title="Subscribe newsletter"
        testi="Please subscribe to the newsletter to keep updated on our initiatives or contact us if you are willing to join the Network."
        linkBtn="#"
        textBtn="Subscribe"
      />
    </Layout>
  )
}


export async function getServerSideProps(context) {
  const { slug } = context.query
  const [menuRes, postRes] = await Promise.all([
    fetch(menuData('it')),
    fetch(singoloPost('en', slug))

  ]);
  const [menu, singlePost] = await Promise.all([
    menuRes.json(),
    postRes.json()
  ]);
  const x = context.query
  return { props: { menu, singlePost, slug } };


}
export default MagazinePage
 */