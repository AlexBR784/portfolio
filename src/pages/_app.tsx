import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Alejandro Bernardo Portfolio</title>
        <meta name="description" content="Alejandro Bernardo's developer portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

