import Router from "next/router";
import React from "react";
import Preloader from "../components/preloader/preloader";
import '../styles/globals.scss'

import Layout from '../layout/layout'
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  
  React.useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {

      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
  
    <>
    {loading ? (
      <Preloader />
    ) : (
      <Component {...pageProps} />
    )}
  </>
  
  )

}

export default MyApp
