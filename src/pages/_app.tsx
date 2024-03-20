import React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Header from "@/components/molecules/Header/Header";
import { GlobalProvider } from "@/contexts/globalContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalProvider>
        <Header />
        <Component {...pageProps} />
      </GlobalProvider>
    </>
  );
}
