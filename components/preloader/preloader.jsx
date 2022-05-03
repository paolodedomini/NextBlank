import React from 'react';
import { Bars } from 'react-loading-icons'
import style from './preloader.module.scss'
import Image from 'next/image'
function Preloader() {
    return (
        <div className={style.preloader}>
            <div className={style.wrapperImg}>
                <Image
                    src="/images/logo-aida-color.png"
                    width={141}
                    height={76}
                    alt="img"
                />
            </div>
            <div className={style.iconLoader}>
                <Bars fill="#7586aa" />
            </div>
        </div>
    )
}

export default Preloader