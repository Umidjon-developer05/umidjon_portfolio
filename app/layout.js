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
import { Toaster } from "@/components/ui/sonner";

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
              <div>
                <div className="flex">
                  <div className="flex">
                    <div>
                    </div>
                    <div></div>
                  </div>
                  <div className="w-full">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
                    <Header />
                    <Navbar />
                    {children}
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
