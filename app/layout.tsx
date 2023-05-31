import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter, josefin, work } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export const metadata = {
  title: "Fieldspace - outside, online",
  description: "",
  twitter: {
    card: "summary_large_image",
    title: "Fieldspace - outside, online",
    description: "",
    creator: "@neur0philosphy",
  },
  metadataBase: new URL("https://precedent.dev"),
  themeColor: "#FFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cx(
          sfPro.variable,
          inter.variable,
          josefin.variable,
          work.variable,
        )}
      >
        <Suspense fallback="">
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
        <main className="flex h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
