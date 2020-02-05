import React, { Component } from "react"
import PropTypes from "prop-types"

export class StickyYear extends Component {
  static propTypes = {
    year: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="sticky-year flex has-text-black">
        <p className="text-xl">{this.props.year}</p>
      </div>
    )
  }
}

export default StickyYear
