import Head from "next/head"
import { motion } from 'framer-motion'
import Header from '../components/header/header'
import Footer from "../components/footer/footer"
function Layout({ children, menu, home, router }) {

    const variants = {
        hidden: { opacity: 0, },
        enter: { opacity: 1 },
        exit: { opacity: 0 },
    }

    return (
        <>
            <Head>
                <link
                    rel="preload"
                    href="/fonts/source-sans/SourceSansPro-Regular.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/source-sans/SourceSansPro-SemiBold.ttf"
                    as="font"
                    crossOrigin=""
                />
            </Head>
            <motion.main
                className={`${home ? 'home' : ''}`}
                variants={variants} // Pass the variant object into Framer Motion 
                initial="hidden" // Set the initial state to variants.hidden
                animate="enter" // Animated state to variants.enter
                exit="exit" // Exit state (used later) to variants.exit
                transition={{ type: 'linear', duration: 0.7 }} // Set the transition to linear

            >
                <>
                    <Header menu={menu} home={home} router={router} />
                    {children}
                    <Footer menu={menu} />
                </>
            </motion.main>
        </>
    )
}

export default Layout