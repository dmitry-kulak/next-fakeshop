import { type AppType } from "next/app";
import localFont from "@next/font/local";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import { Layout } from "../components/Layout/Layout";

// doesn't work via @next/font/google import at the moment
const montserrat = localFont({ src: "./Montserrat-VariableFont_wght.ttf" });
const cormorant = localFont({ src: "./Cormorant-VariableFont_wght.ttf" });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
          --font-logo: ${cormorant.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default trpc.withTRPC(MyApp);
