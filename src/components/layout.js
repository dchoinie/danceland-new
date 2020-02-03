import React from "react"
import "../styles/styles.scss"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
