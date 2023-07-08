import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/layout-header";
import Footer from "../components/layout-footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="root">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="MichaelQQ.com" />
        <meta name="og:url" content="https://MichaelQQ.com/" />
        <meta name="og:type" content="article" />
        <meta name="og:title" content="MichaelQQ.com" />
        <meta name="og:description" content="MichaelQQ.com" />
        <meta
          name="og:image"
          content="https://MichaelQQ.com/favicon.ico?v=1.3"
        />
        <link rel="icon" href="/favicon.svg?v=1.3" />
        <link rel="icon" href="/favicon.ico?v=1.3" />
        <link rel="shortcut icon" href="/favicon.ico?v=1.3" />
        <title>MichaelQQ.com</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
