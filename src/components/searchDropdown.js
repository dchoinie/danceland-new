import React, { Component } from "react"
import { Link } from "gatsby"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"

export default class SearchDropdown extends Component {
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
    const { listOpen } = this.state
    return (
      <>
        <div
          className="flex cursor-pointer hover:underline z-40"
          onClick={() => this.toggleList()}
          style={{ userSelect: "none" }}
        >
          Search By Year
          {listOpen ? (
            <FaAngleUp className="self-center ml-1" />
          ) : (
            <FaAngleDown className="self-center ml-1" />
          )}
        </div>
        <div className="text-center relative z-40">
          {listOpen && (
            <ul className="text-black bg-white border border-black p-2 rounded absolute w-48 leading-tight">
              <li>
                <Link to="/1954" className="hover:underline">
                  1954
                </Link>
              </li>
              <li>
                <Link to="/1955" className="hover:underline">
                  1955
                </Link>
              </li>
              <li>
                <Link to="/1956" className="hover:underline">
                  1956
                </Link>
              </li>
              <li>
                <Link to="/1957" className="hover:underline">
                  1957
                </Link>
              </li>
              <li>
                <Link to="/1958" className="hover:underline">
                  1958
                </Link>
              </li>
              <li>
                <Link to="/1959" className="hover:underline">
                  1959
                </Link>
              </li>
              <li>
                <Link to="/1960" className="hover:underline">
                  1960
                </Link>
              </li>
              <li>
                <Link to="/1961" className="hover:underline">
                  1961
                </Link>
              </li>
              <li>
                <Link to="/1962" className="hover:underline">
                  1962
                </Link>
              </li>
              <li>
                <Link to="/1963" className="hover:underline">
                  1963
                </Link>
              </li>
              <li>
                <Link to="/1964" className="hover:underline">
                  1964
                </Link>
              </li>
              <li>
                <Link to="/1965" className="hover:underline">
                  1965
                </Link>
              </li>
              <li>
                <Link to="/1966" className="hover:underline">
                  1966
                </Link>
              </li>
              <li>
                <Link to="/1967" className="hover:underline">
                  1967
                </Link>
              </li>
              <li>
                <Link to="/1968" className="hover:underline">
                  1968
                </Link>
              </li>
            </ul>
          )}
        </div>
      </>
    )
  }
}
