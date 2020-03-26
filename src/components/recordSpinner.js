import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Vinyl from "../images/vinyl.png"

export class recordSpinnerSelectors extends Component {
  state = {
    isHovered: false,
  }

  static propTypes = {
    year: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div>
        <Link to={this.props.to}>
          <div className="flex justify-center relative">
            <img
              onMouseOver={() => this.setState({ isHovered: true })}
              onMouseLeave={() => this.setState({ isHovered: false })}
              className={this.state.isHovered ? "rotate" : ""}
              src={Vinyl}
              alt="vinyl year selector"
            />
            <h2
              onMouseOver={() => this.setState({ isHovered: true })}
              onMouseLeave={() => this.setState({ isHovered: false })}
              className="text-white text-5xl lg:text-8xl"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {this.props.year}
            </h2>
          </div>
        </Link>
      </div>
    )
  }
}

export default recordSpinnerSelectors
