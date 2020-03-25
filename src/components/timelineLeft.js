import React, { Component } from "react"
import PropTypes from "prop-types"

class TimelineLeft extends Component {
  static propTypes = {
    orderId: PropTypes.number.isRequired,
    artist: PropTypes.string.isRequired,
    price: PropTypes.string,
  }

  render() {
    return (
      <div className="flex justify-center py-2">
        {this.props.orderId % 2 == 0 ? null : (
          <div className="flex flex-col w-full">
            <div className="flex flex-col items-center">
              <p className="text-xl mr-1 text-gray-800 text-center uppercase font-bold">
                {this.props.artist}
              </p>
            </div>
            <div
              className="border-t border-gray-500"
              style={{ marginRight: "-10%", position: "relative" }}
            ></div>
            <p className="text-center text-gray-700">{this.props.price}</p>
          </div>
        )}
      </div>
    )
  }
}

export default TimelineLeft
