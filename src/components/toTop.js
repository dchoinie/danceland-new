import React from "react"
import { Link } from "gatsby"
import { FaArrowUp } from "react-icons/fa"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"

const ToTop = () => {
  return (
    <div
      className="cursor-pointer"
      style={{ position: "fixed", bottom: "2%", right: "2%" }}
    >
      <ScrollLink to="nav" smooth={true} duration={500} className="flex">
        To Top <FaArrowUp className="self-center ml-1" />
      </ScrollLink>
    </div>
  )
}

export default ToTop
