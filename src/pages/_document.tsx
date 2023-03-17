/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html className="notranslate" translate="no">
        <Head>
          <title>LC Career Day</title>
          <meta
            name="description"
            content="Quiz application for LC Career Day"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta charSet="utf-8" />
          <meta name="google" content="notranslate" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
