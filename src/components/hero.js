import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { useSpring, animated } from "react-spring"

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
      front: file(relativePath: { eq: "Front_Wider.jpg" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="flex justify-center my-24">
      <div
        className="self-center flex flex-col justify-center p-4"
        style={{
          boxShadow: "1px 2px 5px #333",
          borderRadius: "0.25rem",
          backgroundColor: "white",
          height: "calc(75vh / 2)",
          width: "600px",
          marginRight: "-6rem",
          position: "relative",
          zIndex: "10",
        }}
      >
        <h2 className="self-center text-5xl uppercase font-bold">
          {data.site.siteMetadata.title}
        </h2>
        <h4 className="self-center text-2xl quicksand">
          {data.site.siteMetadata.description}
        </h4>
        <p className="self-center py-4">By: {data.site.siteMetadata.author}</p>
      </div>
      <div
        className=""
        style={{
          height: "75%",
          width: "40%",
        }}
      >
        <Img
          className=""
          fluid={data.front.childImageSharp.fluid}
          style={{
            width: "100%",
            borderRadius: "0.125rem",
            boxShadow: "1px 2px 5px #333",
          }}
        />
      </div>
    </div>
  )
}
