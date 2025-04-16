import { Footer, Header, PhoneAction, ScrollTrace } from "@/components";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <ScrollTrace />
      <Header />
      {children}
      <Footer />
      <PhoneAction />
    </div>
  );
};

export default Layout;
