import React, { Component } from "react"
import { Link } from "gatsby"
import { FaChevronUp, FaChevronDown } from "react-icons/fa"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false,
    }
  }

  handleClickOutside() {
    this.setState({
      listOpen: false,
    })
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen,
    }))
  }

  render() {
    const { list } = this.props
    const { listOpen } = this.state
    return (
      <>
        <nav className="flex flex-col">
          <Link to="/" className="self-center py-4">
            <h1
              className="text-4xl font-bold"
              style={{ transform: "rotate(-5deg)", fontVariant: "small-caps" }}
            >
              Danceland
            </h1>
          </Link>
          <div className="self-center">
            <ul className="flex">
              <li className="mx-2 p-4">
                <Link to="/">Early Years</Link>
              </li>
              <li className="mx-2 p-4">
                {console.log(listOpen)}
                <div
                  className="flex cursor-pointer"
                  onClick={() => this.toggleList()}
                >
                  Search By Year
                  {listOpen ? (
                    <FaChevronUp className="self-center ml-1" />
                  ) : (
                    <FaChevronDown className="self-center ml-1" />
                  )}
                </div>
                <div className="">
                  {listOpen && (
                    <ul className="flex flex-col items-center">
                      <li className="my-1">
                        <Link to="/1954">1954</Link>
                      </li>
                      <li className="my-1">
                        <Link to="/1955">1955</Link>
                      </li>
                      <li className="my-1">
                        <Link to="/1956">1956</Link>
                      </li>
                      <li className="my-1">
                        <Link to="/1954">1957</Link>
                      </li>
                      <li className="my-1">
                        <Link to="/1954">1958</Link>
                      </li>
                      <li className="my-1">
                        <Link to="/1954">1959</Link>
                      </li>
                      <li className="my-1">
                        <Link to="/1954">1960</Link>
                      </li>
                      <li className="my-1">
                        <Link to="/1954">1961</Link>
                      </li>
                      <li className="my-1">
                        <Link to="/1954">1962</Link>
                      </li>
                      <li className="my-1">
                        <Link to="/1954">1963</Link>
                      </li>
                      <li className="my-1">
                        <Link to="/1954">1964</Link>
                      </li>
                      <li className="my-1">
                        <Link to="/1954">1965</Link>
                      </li>
                      <li className="my-1">
                        <Link to="/1954">1966</Link>
                      </li>
                      <li className="my-1">
                        <Link to="/1954">1967</Link>
                      </li>
                      <li className="my-1">
                        <Link to="/1954">1968</Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
              <li className="mx-2 p-4">
                <Link to="/">Danceland Bio</Link>
              </li>
              <li className="mx-2 p-4">
                <Link to="/">Darlowe Oleson</Link>
              </li>
              <li className="mx-2 p-4">
                <Link to="/">Posters</Link>
              </li>
              <li className="mx-2 p-4">
                <Link to="/">Danceland Bandstand</Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    )
  }
}

export default Header
