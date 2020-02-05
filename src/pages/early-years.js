import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Hr from "../components/styledHr"
import StickyYear from "../components/stickyYear"

export const earlyYearsQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "earlyYears" } }
      sort: { fields: data___orderId }
    ) {
      edges {
        node {
          id
          data {
            fullDate
            artist
            img1 {
              url
            }
            img2 {
              url
            }
            img3 {
              url
            }
            img4 {
              url
            }
            img5 {
              url
            }
            img6 {
              url
            }
          }
        }
      }
    }
  }
`

export default ({ data }) => {
  return (
    <Layout>
      <PageTitle title="Early Years" />
      <StickyYear year="Early Years (1926 - 1953)" />
      <div className="year-container mx-24">
        {data.allAirtable.edges.map(({ node }) => {
          return (
            <div key={node.id} className="flex flex-col justify-center">
              <p className="self-center">{node.data.fullDate}</p>
              <h2 className="self-center text-3xl">{node.data.artist}</h2>
              <div className="image-container">
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
                {node.data.img4 && node.data.img4.url !== 0 ? (
                  <div className="flex justify-center">
                    <img
                      src={node.data.img4[0].url}
                      alt=""
                      className="self-center"
                    />
                  </div>
                ) : null}
                {node.data.img5 && node.data.img5.url !== 0 ? (
                  <div className="flex justify-center">
                    <img
                      src={node.data.img5[0].url}
                      alt=""
                      className="self-center"
                    />
                  </div>
                ) : null}
                {node.data.img6 && node.data.img6.url !== 0 ? (
                  <div className="flex justify-center">
                    <img
                      src={node.data.img6[0].url}
                      alt=""
                      className="self-center"
                    />
                  </div>
                ) : null}
              </div>
              <Hr />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
