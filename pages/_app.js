import "antd/dist/antd.css"
import { Provider } from "next-auth/client"
import Head from "next/head"
import Script from "next/script"

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Provider session={pageProps.session}>
        <Head>
          <title>Pasar Local</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Script src="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js" />
        <Script
          src="https://account.snatchbot.me/script.js"
          onLoad={() => {
            window.sntchChat.Init(202358)
          }}
        />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
