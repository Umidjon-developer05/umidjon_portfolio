"use client";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header/Header";
import About from "./About/page";
import { Toaster } from "@/components/ui/toaster"
import StarsCanvas from "@/components/StarBackground";
export const metadata: Metadata = {
  metadataBase: new URL("https://umidjon.store"),
  title: "Umidjon portfolio",
  description:
    "Umidjon Praktikum Next.js dasturlash kurslari, amaliyotlar, startup loyihalar va asosiysi sifatli ta'limdir.",
  authors: [
    { name: "Umidjon Gafforov ", url: "https://umidjon.store" },
  ],
  icons: { icon: "/logo (2).svg" },
  openGraph: {
    title: "Umidjon praktikum | Dasturlash kurslari",
    description:
      "Umidjon Praktikum Next.js dasturlash kurslari, amaliyotlar, startup loyihalar va asosiysi sifatli ta'limdir.",
    type: "website",
    url: "https://umidjon.store",
    locale: "uz_UZ",
    images: "https://0evi7lr5v8.ufs.sh/f/LN78d9BJu8QkU2FhAc05evHGXpqZ4SA9ilT8VdO3PBtIKJxk",
    countryName: "Uzbekistan",
    siteName: "Umidjon",
    emails: "umidjongafforov175@gmail.com",
  },

};
export default function RootLayout({ children }) {
  useEffect(() => {
    // Ensure this code runs only on the client side
      AOS.init({
        duration: 800,
        once: false,
      });
  
  }, []);

  return (
    <html lang="en">
      
      <body className={inter.className}>
        <AuthProvider>
          <div className="max-w-10xl mx-auto ">
            <div>
              <div className="flex">
                <div className="flex">
                  <Header />
                </div>
                <div className="w-full">
                  <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                  >
                    <StarsCanvas />
                    <Navbar />
                    <div className="sm:ml-80 mx-5">
                    {children}
                    </div>
                    <Toaster />
                  </ThemeProvider>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
