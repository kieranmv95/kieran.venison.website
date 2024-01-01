import { Source_Code_Pro } from "next/font/google";
import cx from "classnames";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const inter = Source_Code_Pro({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(inter.className)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
