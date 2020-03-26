import React, { Component } from "react"
import PropTypes from "prop-types"

export default class MonthHeader extends Component {
  static propTypes = {
    month: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }
  render() {
    return (
      <div className="flex w-full bg-black justify-center py-4">
        <h2 className="text-white text-3xl lg:text-6xl uppercase">
          {this.props.month}, {this.props.year}
        </h2>
      </div>
    )
  }
}
