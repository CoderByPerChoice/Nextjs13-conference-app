import Header from "./header";
import Footer from "./footer";
import { Poppins } from '@next/font/google'
const poppins = Poppins({ weight: '800', subsets: ['latin'], })

import '../styles/globals.css'
import NavLink from "./nav-links";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body class="hero">
        <div class="container px-10">
        <div class="content">
          <Header/>
          <div className={poppins.className}>
            {children}
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
