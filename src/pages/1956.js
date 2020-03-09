import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import StickyYear from "../components/stickyYear"
import Hr from "../components/styledHr"
import { graphql } from "gatsby"

export const query1956 = graphql`
  {
    allAirtable(
      filter: { table: { eq: "data1955" } }
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
            img8 {
              url
            }
            img9 {
              url
            }
          }
        }
      }
    }
  }
`

const data1956 = ({ data }) => {
  return (
    <Layout>
      <PageTitle title="1956" />
      <StickyYear year="1956" />
      <article className="message is-dark container mx-auto">
        <div className="message-body">
          National acts that played at Danceland in 1956 include: Boyd Bennett
          &amp; His Rockets, Wanda Jackson, Faron Young, Webb Pierce, Marvin
          Rainwater, Porter Wagoner, Hank Thompson &amp; His Bravos Valley Boys,
          Red Sovine, Bill Wimberly &amp; His Country Rhythm Boys, Bobby Lord,
          Jimmy &amp; Johnny, Rusty Draper, Dick Mango &amp; His Orchestra, Ray
          Pearl &amp; His Musical Gems, Six Fat Dutchmen, “Whoopee” John
          Wilfahrt &amp; His Orchestra
        </div>
      </article>
      <div className="year-container mx-24">
        {data.allAirtable.edges.map(({ node }) => {
          return (
            <div key={node.id} className="flex flex-col justify-center">
              <p className="self-center">
                {node.data.fullDate}, {node.data.year} | {node.data.weekday}
              </p>
              <h2 className="self-center text-3xl">{node.data.artist}</h2>
              <p className="self-center">{node.data.price}</p>
              <div className="image-container">
                {node.data.img1 && node.data.img1.url !== 0 ? (
                  <div className="flex justify-center">
                    <img
                      src={node.data.img1[0].url}
                      alt=""
                      className="self-center w-40"
                    />
                  </div>
                ) : null}
                {node.data.img2 && node.data.img2.url !== 0 ? (
                  <div className="flex justify-center">
                    <img
                      src={node.data.img2[0].url}
                      alt=""
                      className="self-center w-40"
                    />
                  </div>
                ) : null}
                {node.data.img3 && node.data.img3.url !== 0 ? (
                  <div className="flex justify-center">
                    <img
                      src={node.data.img3[0].url}
                      alt=""
                      className="self-center w-40"
                    />
                  </div>
                ) : null}
                {node.data.img4 && node.data.img4.url !== 0 ? (
                  <div className="flex justify-center">
                    <img
                      src={node.data.img4[0].url}
                      alt=""
                      className="self-center w-40"
                    />
                  </div>
                ) : null}
                {node.data.img5 && node.data.img5.url !== 0 ? (
                  <div className="flex justify-center">
                    <img
                      src={node.data.img5[0].url}
                      alt=""
                      className="self-center w-40"
                    />
                  </div>
                ) : null}
                {node.data.img6 && node.data.img6.url !== 0 ? (
                  <div className="flex justify-center">
                    <img
                      src={node.data.img6[0].url}
                      alt=""
                      className="self-center w-40"
                    />
                  </div>
                ) : null}
                {node.data.img7 && node.data.img7.url !== 0 ? (
                  <div className="flex justify-center">
                    <img
                      src={node.data.img7[0].url}
                      alt=""
                      className="self-center w-40"
                    />
                  </div>
                ) : null}
                {node.data.img8 && node.data.img8.url !== 0 ? (
                  <div className="flex justify-center">
                    <img
                      src={node.data.img8[0].url}
                      alt=""
                      className="self-center w-40"
                    />
                  </div>
                ) : null}
                {node.data.img9 && node.data.img9.url !== 0 ? (
                  <div className="flex justify-center">
                    <img
                      src={node.data.img9[0].url}
                      alt=""
                      className="self-center w-40"
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

export default data1956
