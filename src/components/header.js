import React, { Component } from "react"
import { Link } from "gatsby"
import { FaSearch } from "react-icons/fa"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }))
    const burger = document.querySelector(".navbar-burger")
    const menu = document.querySelector(".navbar-menu")
    burger.classList.toggle("is-active")
    menu.classList.toggle("is-active")
  }

  render() {
    return (
      <nav
        className="navbar mx-56 flex flex-col"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="upper flex justify-between py-2">
          <div className="navbar-brand">
            <Link to="/">
              <h1
                className="has-text-black text-3xl font-bold py-2"
                style={{
                  fontVariant: "small-caps",
                  transform: "rotate(-5deg)",
                }}
              >
                Danceland
              </h1>
            </Link>

            <a
              href="#"
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="mainNav"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        </div>
        <div className="lower flex py-2 justify-between">
          <ul className="flex">
            <li className="navbar-item quicksand">
              <Link to="/" className="navbar-link">
                Early Years
              </Link>
            </li>
            <li className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Search By Year</a>
              <div className="navbar-dropdown">
                <Link className="p-2 navbar-link" to="/1954">
                  1954
                </Link>
                <Link className="p-2 navbar-link" to="/">
                  1955
                </Link>
                <Link className="p-2 navbar-link" to="/">
                  1956
                </Link>
                <Link className="p-2 navbar-link" to="/">
                  1957
                </Link>
                <Link className="p-2 navbar-link" to="/">
                  1958
                </Link>
                <Link className="p-2 navbar-link" to="/">
                  1959
                </Link>
                <Link className="p-2 navbar-link" to="/">
                  1960
                </Link>
                <Link className="p-2 navbar-link" to="/">
                  1961
                </Link>
                <Link className="p-2 navbar-link" to="/">
                  1962
                </Link>
                <Link className="p-2 navbar-link" to="/">
                  1963
                </Link>
                <Link className="p-2 navbar-link" to="/">
                  1964
                </Link>
                <Link className="p-2 navbar-link" to="/">
                  1965
                </Link>
                <Link className="p-2 navbar-link" to="/">
                  1966
                </Link>
                <Link className="p-2 navbar-link" to="/">
                  1967
                </Link>
                <Link className="p-2 navbar-link" to="/">
                  1968
                </Link>
              </div>
            </li>
            <li className="navbar-item quicksand">
              <Link to="/" className="navbar-link">
                Danceland Bio
              </Link>
            </li>
            <li className="navbar-item quicksand">
              <Link to="/" className="navbar-link">
                Darlowe Oleson
              </Link>
            </li>
            <li className="navbar-item quicksand">
              <Link to="/" className="navbar-link">
                Posters
              </Link>
            </li>
            <li className="navbar-item quicksand">
              <Link to="/" className="navbar-link">
                Danceland Bandstand
              </Link>
            </li>
          </ul>
          <FaSearch />
        </div>
      </nav>
    )
  }
}

export default Header
