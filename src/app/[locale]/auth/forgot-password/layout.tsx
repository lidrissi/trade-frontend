import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trade.ma",
  description: "The Moroccan B2B solution",
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
