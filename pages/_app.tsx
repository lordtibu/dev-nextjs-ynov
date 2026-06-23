import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Arimo } from "next/font/google"


const arimo = Arimo({
  weight: ["400", "600"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-arimo",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${arimo.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
