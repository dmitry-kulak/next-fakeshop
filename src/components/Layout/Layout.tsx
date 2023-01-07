import type { FC, PropsWithChildren } from "react";

import Header from "@components/Layout/Header";
import Footer from "@components/Layout/Footer";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />

      <main className="flex flex-grow flex-col">{children}</main>

      <Footer />
    </>
  );
};
