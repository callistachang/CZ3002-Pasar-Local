import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Courgette&family=Raleway&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div
            hidden
            id="snipcart"
            data-api-key="MDg1NjE5NjEtZGRhOC00MWE3LTk3ZDUtN2I5MmNmY2VlZjg1NjM3NjY5NjA2Nzc4MTAxNjc1"
            data-config-modal-style="side"
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument
