import React, { Component } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SearchDropdown from "../components/searchDropdown"
import { FaBars } from "react-icons/fa"

class Hamburger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navOpen: false,
    }
  }

  handleClickOutside() {
    this.setState({
      navOpen: false,
    })
  }

  toggleNav() {
    this.setState(prevState => ({
      navOpen: !prevState.navOpen,
    }))
  }

  render() {
    const { navOpen } = this.state
    return (
      <div className="relative" onClick={() => this.toggleNav()}>
        <FaBars />
        <div className="absolute whitespace-no-wrap" style={{ right: "0" }}>
          {navOpen && (
            <ul className="text-right">
              <li>Home</li>
              <li>Early Years</li>
              <li>Search By Year</li>
              <li>Danceland Bio</li>
              <li>Posters</li>
              <li>Danceland Bandstand</li>
            </ul>
          )}
        </div>
      </div>
    )
  }
}

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "header_logo.jpg" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <nav className="flex justify-between lg:flex-col px-12">
      <div className="w-48 lg:w-full lg:flex lg:justify-center">
        <Link to="/" className="w-1/4">
          <Img fluid={data.logo.childImageSharp.fluid} />
        </Link>
      </div>
      <div className="hidden lg:flex lg:justify-center lg:py-4">
        <ul className="flex border-b border-black pb-2">
          <li className="mr-4 text-3xl uppercase p-2 hover:bg-black hover:text-white rounded">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4 text-3xl uppercase p-2 hover:bg-black hover:text-white rounded">
            <Link to="/">Early Years</Link>
          </li>
          <li className="mx-4 text-3xl uppercase p-2 hover:bg-black hover:text-white rounded">
            <SearchDropdown />
          </li>
          <li className="mx-4 text-3xl uppercase p-2 hover:bg-black hover:text-white rounded">
            <Link to="/">Danceland Bio</Link>
          </li>
          <li className="mx-4 text-3xl uppercase p-2 hover:bg-black hover:text-white rounded">
            <Link to="/">Posters</Link>
          </li>
          <li className="ml-4 text-3xl uppercase p-2 hover:bg-black hover:text-white rounded">
            <Link to="/">Danceland Bandstand</Link>
          </li>
        </ul>
      </div>
      <div className="flex self-center lg:hidden">
        <Hamburger />
      </div>
    </nav>
  )
}

export default Header
