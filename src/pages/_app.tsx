import { JetBrains_Mono, Chakra_Petch } from "next/font/google";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Alejandro Bernardo Portfolio</title>
        <meta name="description" content="Alejandro Bernardo's developer portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${jetbrainsMono.variable} ${chakraPetch.variable} antialiased`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

