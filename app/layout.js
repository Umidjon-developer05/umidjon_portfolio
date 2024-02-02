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

export default function RootLayout({ children }) {
  useEffect(() => {
    // Ensure this code runs only on the client side
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 800,
        once: false,
      });
    }else{
      return (
        <>
          hello 
        </>
      )
    }
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="max-w-10xl mx-auto ">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div>
                <div className="flex">
                  <div className="flex">
                    <div>
                      <Header />
                    </div>
                    <div></div>
                  </div>
                  <div className="w-full">
                    <Navbar />
                    {children}
                  </div>
                </div>
                <div></div>
              </div>
            </ThemeProvider>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
