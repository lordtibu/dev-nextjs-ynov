import Footer from "@/composants/layout/Footer";
import Header from "@/composants/layout/Header";
import ScrollTop from "@/composants/layout/ScrollTop";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import type { Metadata } from 'next'
 

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
          <body className={`bg-light ${inter.className}`}>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
            />
            <div className="flex flex-col min-h-dvh">
              <Header />
              {children}
              <ScrollTop />
              <Footer />
            </div>
        </body>
    </html>
  )
}