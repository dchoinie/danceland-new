import React, { Component } from "react"
import PropTypes from "prop-types"

export class StickyYear extends Component {
  static propTypes = {
    year: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="hidden sticky-year lg:flex lg:flex-col lg:items-center">
        <h6 className="text-xl">Current Year:</h6>
        <h6 className="text-xl">{this.props.year}</h6>
      </div>
    )
  }
}

export default StickyYear
