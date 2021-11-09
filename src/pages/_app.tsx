import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/main.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="stylesheet" href="https://unpkg.com/chota@latest" />
        <title>Next.js Concepts</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
