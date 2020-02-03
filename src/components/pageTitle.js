import React, { Component } from "react"
import PropTypes from "prop-types"

export class pageTitle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="flex justify-center py-12">
        <h2 className="text-3xl font-bold">{this.props.title}</h2>
      </div>
    )
  }
}

export default pageTitle
