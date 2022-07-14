import App from 'next/app';
import Head from 'next/head';
import Base from '../layouts/Layout';

import '../styles/globals.css';
import '../styles/app.scss';

// Libary //
import '/node_modules/swiper/swiper-bundle.min.css';

function MxaApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MXA | Media X Asia</title>
        <meta name="description" content="MXA Media X Asia"/>
        <meta name="keywords" content="Keyword"/>
        <meta name="author" content="MXA"/>
        <meta name="copyright" content="MXA"/>
        <meta name="webcrawlers"/>
        <meta name="spiders"/>
        <meta property="og:title" content="MXA Media X Asia"/>
        <meta property="og:description" content="MXA Media X Asia"/>
        <meta property="og:type" content="article"/>
        <meta property="og:site_name" content="MXA Media X Asia"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <link rel="shortcut icon" href="/static/favicon.ico"/>
      </Head>
      <Base>
        <Component {...pageProps}/>
      </Base>
    </>
  )
}

MxaApp.getServerSideProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getServerSideProps(appContext);

  return { ...appProps }
}

export default MxaApp;