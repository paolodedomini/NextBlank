import React from 'react'
import Image from 'next/image'
import style from './logoHome.module.scss'
import Link from 'next/link'
import { motion } from "framer-motion"
function LogoHome({ menuOpen }) {
    return (
        <Link href="/">
            <div className={`logo-wrapper  `}>
                <div className="head-logo ">
                    <Image
                        src="/images/logo-aida-color.png"
                        width={141}
                        height={76}
                        alt="img"
                    />
                </div>
                <motion.div
                 animate={menuOpen ? { height: '76px' } : {height:0}}
                className={style.menuLogo} >
                    <Image
                        src="/images/logo-aida-bianco.png"
                        width={141}
                        height={76}
                        alt="img"
                    />
                </motion.div>
            </div>
        </Link>
    )
}

export default LogoHome