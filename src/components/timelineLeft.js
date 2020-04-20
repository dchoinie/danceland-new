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
      <div className="flex justify-center p-2">
        {this.props.orderId % 2 == 0 ? null : (
          <div className="flex flex-col w-full">
            <div className="flex flex-col items-center">
              <h4 className="flex text-2xl lg:text-5xl mr-1 text-gray-800 text-center uppercase leading-none">
                {this.props.artist}
                {this.props.price == null ? null : (
                  <span className="text-2xl self-center ml-2 text-gray-500">
                    &#40;
                    {this.props.price}
                    &#41;
                  </span>
                )}
              </h4>
            </div>
            <div
              className="border-t border-gray-500 w-full mx-auto my-2"
              // style={{ marginRight: "-10%", position: "relative" }}
            ></div>
          </div>
        )}
      </div>
    )
  }
}

export default TimelineLeft
