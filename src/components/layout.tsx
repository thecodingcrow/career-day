import React from "react";
import { Footer } from "./footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-primary-200 to-t3Black">
        <div className="container -mt-32 flex flex-col items-center justify-center gap-12 px-4 py-16 text-inverted">
          {children}
        </div>

        <Footer />
      </div>
    </>
  );
};