import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import { graphql } from "gatsby"
import ModalImage from "react-modal-image"
import Img from "gatsby-image"

export const query1954 = graphql`
  {
    allAirtable(
      filter: { table: { eq: "data1954" } }
      sort: { fields: data___orderId }
    ) {
      edges {
        node {
          id
          data {
            artist
            fullDate
            orderId
            price
            weekday
            year
            img1 {
              raw {
                url
              }
            }
          }
        }
      }
    }
  }
`

const data1954 = ({ data }) => {
  return (
    <Layout>
      <PageTitle title="1954" />
      <p
        className="max-w-2xl mx-auto p-6 mb-6"
        style={{
          boxShadow: "1px 2px 5px #333",
          borderRadius: "0.25rem",
          backgroundColor: "white",
        }}
      >
        National acts that played at Danceland in 1954 include - Wayne King
        &amp; His Orchestra, “Whoopee” John Wilfahrt &amp; His Orchestra, WNAX
        Bohemian Band, Fezz Fritsche &amp; His Goosetown Band, Six Fat Dutchmen,
        Frank Yankovic &amp; His Yanks
      </p>
      <div className="year-container mx-24">
        {data.allAirtable.edges.map(({ node }) => {
          return (
            <div key={node.id} className="flex flex-col justify-center p-4 m-4">
              <p className="self-center">
                {node.data.fullDate}, {node.data.year} | {node.data.weekday}
              </p>
              <h2 className="self-center text-3xl">{node.data.artist}</h2>
              <p className="self-center">{node.data.price}</p>
              <div className="image-container py-2">
                {console.log(node.data.img1)}
                {/* <div className="self-center">
                  {node.data.img1 && node.data.img1.localFiles[0] !== 0 ? (
                    <Img
                      fluid={node.data.img1.localFiles[0].childImageSharp.fluid}
                    />
                  ) : null}
                  {console.log(node.data.img1.localFiles[0].id)}
                </div>
                <div className="self-center">
                  {node.data.img2 && node.data.img2.localFiles[0] !== 0 ? (
                    <Img
                      fluid={node.data.img2.localFiles[0].childImageSharp.fluid}
                    />
                  ) : null}
                </div>
                <div className="self-center">
                  {node.data.img3 && node.data.img3.localFiles[0] !== 0 ? (
                    <Img
                      fluid={node.data.img3.localFiles[0].childImageSharp.fluid}
                    />
                  ) : null}
                </div> */}
              </div>
              <hr />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default data1954
