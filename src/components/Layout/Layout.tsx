import type { FC, PropsWithChildren } from "react";

import Header from "./Header";
import Footer from "./Footer";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />

      <main className="flex flex-grow flex-col">{children}</main>

      <Footer />
    </>
  );
};
