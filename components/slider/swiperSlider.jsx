import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/lazy";
import style from './sliderHome.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Lazy } from "swiper";
import { BASE_URL_IMMAGINI } from '../../lib/costanti'
import {SVGLazy} from '../../lib/animations'

const HomeSwiperSlider = ({ slides }) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    };

    const toBase64 = (str) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str)


    return (
        <section className='blocco_0'>
            <Swiper
                className={`${style.homeSlider}`}
                modules={[Pagination, Lazy]}
                slidesPerView={1}
                lazy={true}
                pagination={pagination}
                onSlideChange={() => console.log('slide change')}
            >
                {slides.map((item) => {
                    return (
                        <div key={item._id}>
                            <SwiperSlide>
                                <div className={style.innerSlide}>
                                    <div className={style.wrapperText}>
                                        <h2>{item.text?.title}</h2>
                                        <h3>{item.text?.subtitle}</h3>
                                    </div>
                                    <div className={style.background}>
                                        <Image
                                            src={`${BASE_URL_IMMAGINI}${item.imgs.images[0].fullPath}`}
                                            placeholder="blur"
                                            blurDataURL={`data:image/svg+xml;base64,${toBase64(SVGLazy(2048, 1080))}`}
                                            layout='intrinsic'
                                            alt="img"
                                            width={2048}
                                            height={1080}
                                        />
                                    </div>
                                    {item.imgs.images[1] &&
                                        <div className={style.imageOver}>
                                            <Image
                                                className="swiper-lazy"
                                                src={`${BASE_URL_IMMAGINI}${item.imgs.images[1].fullPath}`}
                                                width={1033}
                                                height={900}
                                                blurDataURL='/images/back_main_menu.png'
                                                placeholder="blur"
                                                layout='intrinsic'
                                                alt="img"
                                            />
                                        </div>}
                                </div>
                                
                                <div className="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
                            </SwiperSlide>
                        </div>

                    )

                })}

            </Swiper>
        </section>
    );
};

export default HomeSwiperSlider