import { type AppType } from "next/app";
import localFont from "@next/font/local";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";

// doesn't work via @next/font/google import at the moment
const montserrat = localFont({ src: "./Montserrat-VariableFont_wght.ttf" });
const sixcaps = localFont({ src: "./SixCaps-Regular.ttf" });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
          --font-caps: ${sixcaps.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
};

export default trpc.withTRPC(MyApp);
