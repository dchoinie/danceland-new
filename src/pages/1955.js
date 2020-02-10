import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import StickyYear from "../components/stickyYear"
import Hr from "../components/styledHr"
import { graphql } from "gatsby"

export const query1955 = graphql`
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

const data1955 = ({ data }) => {
  return (
    <Layout>
      <PageTitle title="1955" />
      <StickyYear year="1955" />
      <article className="message is-dark container">
        <div className="message-body">
          1955 was the year live rock and roll came to Cedar Rapids. The date
          was October 6th and the band was Bill Haley &amp; His Comets. That
          would signal the beginning of Danceland being the place for eastern
          Iowans to witness live rock and roll. Later that month Boyd Bennett
          &amp; His Rockets, became the second rock and rollers to make an
          appearance. Also gracing the Danceland stage in 1955 were the
          innovating orchestra of Sauter-Finegan, polka great “Whoopee” John
          Wilfahrt &amp; His Orchestra and Yankton South Dakota’s popular WNAX
          Bohemian Band. Major country acts include Pee Wee King &amp; His
          Golden West Cowboys and Bob Wills &amp; His Texas Playboys.
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
                {node.data.img7 && node.data.img7.url !== 0 ? (
                  <div className="flex justify-center">
                    <img
                      src={node.data.img7[0].url}
                      alt=""
                      className="self-center"
                    />
                  </div>
                ) : null}
                {node.data.img8 && node.data.img8.url !== 0 ? (
                  <div className="flex justify-center">
                    <img
                      src={node.data.img8[0].url}
                      alt=""
                      className="self-center"
                    />
                  </div>
                ) : null}
                {node.data.img9 && node.data.img9.url !== 0 ? (
                  <div className="flex justify-center">
                    <img
                      src={node.data.img9[0].url}
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

export default data1955
