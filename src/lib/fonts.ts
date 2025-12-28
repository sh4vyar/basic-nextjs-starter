import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

export const JetBrainsMono = JetBrains_Mono({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const Cotta = localFont({
  src: "../assets/fonts/cotta.otf",
  display: "swap",
  weight: "200",
  variable: "--font-cotta",
});
