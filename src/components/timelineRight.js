import React, { Component } from "react"
import PropTypes from "prop-types"

class TimelineRight extends Component {
  static propTypes = {
    orderId: PropTypes.number.isRequired,
    artist: PropTypes.string.isRequired,
    price: PropTypes.string,
  }

  render() {
    return (
      <div className="flex justify-center p-2">
        {this.props.orderId % 2 !== 0 ? null : (
          <div className="flex flex-col w-full">
            <div>
              <div className="flex flex-col items-center">
                <h4 className="text-2xl lg:text-5xl ml-1 text-gray-800 text-center uppercase leading-none">
                  {this.props.artist}
                </h4>
              </div>
              <div
                className="border-t border-gray-500 w-56 mx-auto my-2"
                // style={{ marginLeft: "-10%", position: "relative" }}
              ></div>
              <p className="text-center text-gray-700 text-xl h-8">
                {this.props.price}
              </p>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TimelineRight
