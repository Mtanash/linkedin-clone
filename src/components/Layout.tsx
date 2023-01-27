import React, { ReactNode } from "react";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="mt-8">{children}</main>
    </>
  );
};

export default Layout;
