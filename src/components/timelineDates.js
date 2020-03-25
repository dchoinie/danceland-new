import React, { Component } from "react"
import PropTypes from "prop-types"

class TimelineDates extends Component {
  static propTypes = {
    fullDate: PropTypes.string.isRequired,
    weekday: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="flex flex-col items-center bg-blue-200 text-gray-800 py-2">
        <h5 className="text-2xl uppercase text-gray-800">
          {this.props.fullDate}
        </h5>
        <p className="text-base text-gray-600">{this.props.weekday}</p>
      </div>
    )
  }
}

export default TimelineDates
