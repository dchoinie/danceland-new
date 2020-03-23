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
            img7 {
              url
            }
          }
        }
      }
    }
  }
`

export default ({ data }) => {
  return <Layout></Layout>
}
