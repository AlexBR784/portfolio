import "@/styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Porfolio de Alejandro Bernardo</title>
        <meta name="description" content="Porfolio de desarrollo de Alejandro Bernardo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="antialiased">
        <Component {...pageProps} />
      </div>
    </>
  );
}

