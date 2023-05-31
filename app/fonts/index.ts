import localFont from "next/font/local";
import { Inter, Josefin_Sans, Work_Sans } from "next/font/google";

export const sfPro = localFont({
  src: "./SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
});

export const work = Work_Sans({
  variable: "--font-work",
  subsets: ["latin"],
});
