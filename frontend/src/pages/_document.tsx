import { ColorModeScript } from '@chakra-ui/react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="*"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
          <link rel="shortcut icon" href="/favicon.png" sizes='96x96' type="image/png" />
        </Head>
        <body>
          <ColorModeScript initialColorMode="dark" />
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}