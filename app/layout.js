'use client'


import Header from "./header";
import Footer from "./footer";
import { Poppins } from '@next/font/google'
const poppins = Poppins({ weight: '800', subsets: ['latin'], })

import '../styles/globals.css'
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';
import { useEffect } from "react";

export default function RootLayout({ children }) {
  
  useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded', 
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate'
    });
  }, [])

  return (
    <html>
      <head />
      <body class="hero">
        <div>
          <div class="content">
            <Header/>
            <div className={poppins.className}>
              <div class="lg:px-10 md:px-10 px-5">
                {children}
              </div>
            </div>
          </div>
          <div className={poppins.className}>
            <Footer />
          </div>
        </div>

      </body>
    </html>
  )
}
