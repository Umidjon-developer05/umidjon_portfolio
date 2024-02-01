"use client"
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header/Header";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
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
                      
                      <div >
                        <div className="flex">
                        <div  className="flex">
                        <div>
                          <Header/>
                        </div>
                       <div>
                      </div>
                      </div>
                       <div  className="w-full">
                          <Navbar />
                        {children}
                      </div>
                        </div>
                    <div>
                      </div>
                      </div>
                     </ThemeProvider>           
                  </div>
              </AuthProvider>
            </body>
          </html>
  );
}
