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
        {/* <meta name="description" content=${summary} /> */}
        <meta name="og:url" content="https://MichaelQQ.com/" />
        <meta name="og:type" content="article" />
        <meta name="og:title" content="MichaelQQ.com" />
        {/* <meta name="og:description" content=${summary} /> */}
        <meta
          name="og:image"
          content="https://MichaelQQ.com/favicon.ico?v=1.3"
        />
        <link rel="icon" href="/favicon.svg?v=1.3" />
        <link rel="icon" href="/favicon.ico?v=1.3" />
        <link rel="shortcut icon" href="/favicon.ico?v=1.3" />
        <title>MichaelQQ.com</title>
        <link rel="stylesheet" href="/css/github-markdown.css" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah|Pangolin"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github.min.css"
        ></link>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
