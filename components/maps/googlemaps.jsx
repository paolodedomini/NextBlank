import GoogleMapReact from 'google-map-react';
import style from './googlemaps.module.scss'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

function Googlemaps() {
    const [mapVisible, setMapVisible] = useState(false)
    const MapMarker = ({ text }) => <div>{text}</div>;
    return (
        <AnimatePresence>
            {!mapVisible ?
                <motion.section
                    onMouseOver={() => setMapVisible(true)}
                    key="staticmap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={style.staticImageMap}
                >

                    <Image
                        src="/images/map-static.jpg"
                        width={1630}
                        height={600}
                        quality={85}
                        layout='intrinsic'
                    />

                </motion.section> :

                <motion.section
                    className={style.googlemap}
                    key="gmap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyBQaDdCv29xQgahdFsMMLgyRjlxIU9UNyg' }}
                        defaultCenter={{
                            lat: 59.95,
                            lng: 30.33
                        }}
                        defaultZoom={10}
                    >
                        <MapMarker
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </motion.section>}
        </AnimatePresence>
    )
}

export default Googlemaps