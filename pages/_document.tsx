// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#FFFFFF" />
          <meta name="description" content="친구가 공유한 상품이 궁금하다면?" />
          <link rel="apple-touch-icon" href="/logo192.png" />
          <link rel="manifest" href="/manifest.json" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Hopzie" />
          <meta property="og:image" content="/og_image.png" />
          <meta
            property="og:description"
            content="친구가 공유한 상품이 궁금하다면?"
          />
          <meta property="og:site_name" content="Hopzie" />
        </Head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <div id="root"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;