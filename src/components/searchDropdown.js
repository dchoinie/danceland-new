import React, { Component } from "react"
import { Link } from "gatsby"

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
      <div
        className="relative cursor-pointer"
        onClick={() => this.toggleList()}
      >
        Search By Year
        <div className="absolute w-full text-right">
          {listOpen && (
            <ul className="text-black bg-gray-100 p-2 mt-2">
              <li>
                <Link to="/1954">1954</Link>
              </li>
              <li>
                <Link to="/1955">1955</Link>
              </li>
              <li>
                <Link to="/1956">1956</Link>
              </li>
              <li>
                <Link to="/1957">1957</Link>
              </li>
              <li>
                <Link to="/1958">1958</Link>
              </li>
              <li>
                <Link to="/1959">1959</Link>
              </li>
              <li>
                <Link to="/1960">1960</Link>
              </li>
              <li>
                <Link to="/1961">1961</Link>
              </li>
              <li>
                <Link to="/1962">1962</Link>
              </li>
              <li>
                <Link to="/1963">1963</Link>
              </li>
              <li>
                <Link to="/1964">1964</Link>
              </li>
              <li>
                <Link to="/1965">1965</Link>
              </li>
              <li>
                <Link to="/1966">1966</Link>
              </li>
              <li>
                <Link to="/1967">1967</Link>
              </li>
              <li>
                <Link to="/1968">1968</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    )
  }
}
