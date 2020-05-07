import React, { Component } from "react"
import PropTypes from "prop-types"
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa"

class TimelineDates extends Component {
  static propTypes = {
    orderId: PropTypes.number.isRequired,
    fullDate: PropTypes.string.isRequired,
    weekday: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="flex flex-col items-center bg-indigo-200 text-gray-800 justify-start p-2">
        <div className="flex w-full">
          {this.props.orderId % 2 == 0 ? (
            <div className="w-1/4"></div>
          ) : (
            <FaLongArrowAltLeft className="self-center text-3xl w-1/4" />
          )}
          <h5 className="text-3xl uppercase text-gray-800 leading-none w-1/2 whitespace-no-wrap text-center">
            {this.props.fullDate}
          </h5>
          {this.props.orderId % 2 !== 0 ? (
            <div className="w-1/4"></div>
          ) : (
            <FaLongArrowAltRight className="self-center text-3xl w-1/4" />
          )}
        </div>
        <p className="text-base text-gray-600 uppercase font-bold">
          {this.props.weekday}
        </p>
      </div>
    )
  }
}

export default TimelineDates
