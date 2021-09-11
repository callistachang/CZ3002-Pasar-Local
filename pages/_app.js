import Head from "next/head"
import Script from "next/script"
import "../styles/index.css"
import "antd/dist/antd.css"

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Pasar Local</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.css"
        />
      </Head>
      <Script src="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.js" />
      {/* <Script
        src="https://account.snatchbot.me/script.js"
        onLoad={() => {
          window.sntchChat.Init(133961)
        }}
      /> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
