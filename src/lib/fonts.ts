import { Poppins as PoppinsFont, PT_Serif } from "next/font/google";
import localFont from "next/font/local";

export const Poppins = PoppinsFont({
  subsets: ["latin"],
  weight: "400",
});

export const PTSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

export const Cotta = localFont({
  src: "../assets/fonts/cotta.otf",
  display: "swap",
  weight: "200",
});
