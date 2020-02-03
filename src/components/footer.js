import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  return (
    <div
      className="flex justify-center py-6 mt-24"
      style={{ background: "#333", color: "white" }}
    >
      <p>© {new Date().getFullYear()} Steve Wilson</p>
    </div>
  )
}
