import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import StickyYear from "../components/stickyYear"
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
            price
            weekday
            year
            img1 {
              url
            }
            img2 {
              url
            }
            img3 {
              url
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
      <StickyYear year="1954" />
      <article className="message is-dark container">
        <div className="message-body">
          National acts that played at Danceland in 1954 include - Wayne King
          &amp; His Orchestra, “Whoopee” John Wilfahrt &amp; His Orchestra, WNAX
          Bohemian Band, Fezz Fritsche &amp; His Goosetown Band, Six Fat
          Dutchmen, Frank Yankovic &amp; His Yanks
        </div>
      </article>
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
                {node.data.img1 && node.data.img1.url !== 0 ? (
                  <div className="flex justify-center">
                    <img
                      src={node.data.img1[0].url}
                      alt=""
                      className="self-center"
                    />
                  </div>
                ) : null}
                {node.data.img2 && node.data.img2.url !== 0 ? (
                  <div className="flex justify-center">
                    <img
                      src={node.data.img2[0].url}
                      alt=""
                      className="self-center"
                    />
                  </div>
                ) : null}
                {node.data.img3 && node.data.img3.url !== 0 ? (
                  <div className="flex justify-center">
                    <img
                      src={node.data.img3[0].url}
                      alt=""
                      className="self-center"
                    />
                  </div>
                ) : null}
              </div>
              {/* <hr /> */}
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default data1954

{
  /* <div className="self-center">
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
                </div> */
}
