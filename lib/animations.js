import { motion } from "framer-motion";

const aperturaMenu = {
    rotate: { y: ['-100%', '0%'], opacity:1, transition: { duration: 0.5 } },
    // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
    stop: { y: ['0%', '-100%'], opacity:0, transition: { duration: 0.5 }}
  };

  function FadeInWhenVisible({ children }) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1,  },
          hidden: { opacity: 0,  }
        }}
      >
        {children}
      </motion.div>
    );
  }

  const SVGLazy = (w, h) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#fff" offset="20%" />
        <stop stop-color="#7586aa" offset="50%" />
        <stop stop-color="#fff" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#fff" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`

  export {aperturaMenu, FadeInWhenVisible, SVGLazy}