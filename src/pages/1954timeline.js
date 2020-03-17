import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query1954Data = graphql`
  {
    january: allAirtable(
      filter: { table: { eq: "data1954" }, data: { month: { eq: "January" } } }
      sort: { fields: data___orderId }
    ) {
      edges {
        node {
          id
          data {
            artist
            fullDate
            comment1
            comment2
            img1 {
              url
            }
            img1caption
            img2 {
              url
            }
            img2caption
            img3 {
              url
            }
            price
            weekday
            year
            orderId
          }
        }
      }
    }
  }
`

const Timeline1954 = ({ data }) => {
  return (
    <Layout>
      <div className="bg-white max-w-screen-xl mx-auto">
        <div className="flex my-6">
          <div className="flex w-1/2">
            <img
              src="https://via.placeholder.com/500x400?text=Year+Arrow+Image"
              alt=""
              className="rounded"
            />
          </div>
          <div className="flex w-1/2">
            <p className="self-center">
              National acts that played at Danceland in 1954 include - Wayne
              King &amp; His Orchestra, “Whoopee” John Wilfahrt &amp; His
              Orchestra, WNAX Bohemian Band, Fezz Fritsche &amp; His Goosetown
              Band, Six Fat Dutchmen, Frank Yankovic &amp; His Yanks
            </p>
          </div>
        </div>
        <div className="flex w-full bg-black justify-center py-4">
          <h2 className="text-white text-2xl uppercase">January, 1954</h2>
        </div>
        <div>
          {data.january.edges.map(({ node }) => {
            return (
              <div key={node.id} className="timeline-grid">
                <div
                  className="flex justify-center py-2"
                  //   style={{ border: "1px solid red" }}
                >
                  {node.data.orderId % 2 == 0 ? null : (
                    <div
                      className="flex flex-col w-full border-t border-gray-800 mt-6"
                      style={{
                        marginRight: "-100px",
                        position: "relative",
                      }}
                    >
                      <div style={{ marginRight: "100px" }}>
                        <div className="flex flex-col items-center">
                          <p className="text-xl mr-1 text-gray-800 text-center">
                            {node.data.artist}
                          </p>
                          <p className="ml-2 text-gray-700">
                            &#40;{node.data.price}&#41;
                          </p>
                        </div>
                        <div className="flex justify-center">
                          <p>{node.data.comment1}</p>
                        </div>
                        <div className="flex pt-2">
                          {node.data.img1 && node.data.img1.url !== 0 ? (
                            <div className="flex justify-center">
                              <figure className="self-center">
                                <img
                                  src={node.data.img1[0].url}
                                  alt=""
                                  className=""
                                />
                                <figcaption className="text-center">
                                  {node.data.img1caption}
                                </figcaption>
                              </figure>
                            </div>
                          ) : null}
                          {node.data.img2 && node.data.img2.url !== 0 ? (
                            <div className="flex justify-center">
                              <figure className="self-center">
                                <img
                                  src={node.data.img2[0].url}
                                  alt=""
                                  className=""
                                />
                                <figcaption className="text-center">
                                  {node.data.img2caption}
                                </figcaption>
                              </figure>
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
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className="flex flex-col items-center bg-gray-400 text-gray-800 py-2"
                  //   style={{ border: "1px solid red" }}
                >
                  <h5 className="text-xl uppercase">{node.data.fullDate}</h5>
                  <p className="text-base">{node.data.weekday}</p>
                </div>
                <div
                  className="flex justify-center py-2"
                  //   style={{ border: "1px solid red" }}
                >
                  {node.data.orderId % 2 !== 0 ? null : (
                    <div
                      className="flex flex-col w-full border-t border-gray-800 mt-6"
                      style={{
                        marginLeft: "-100px",
                        position: "relative",
                      }}
                    >
                      <div style={{ marginLeft: "100px" }}>
                        <div className="flex flex-col items-center">
                          <p className="text-xl ml-1 text-gray-800 text-center">
                            {node.data.artist}
                          </p>
                          <p className="ml-2 text-gray-700">
                            &#40;{node.data.price}&#41;
                          </p>
                        </div>
                        <div className="flex justify-center">
                          <p>{node.data.comment1}</p>
                        </div>
                        <div className="flex pt-2">
                          {node.data.img1 && node.data.img1.url !== 0 ? (
                            <div className="flex justify-center">
                              <figure className="self-center">
                                <img
                                  src={node.data.img1[0].url}
                                  alt=""
                                  className=""
                                />
                                <figcaption className="text-center">
                                  {node.data.img1caption}
                                </figcaption>
                              </figure>
                            </div>
                          ) : null}
                          {node.data.img2 && node.data.img2.url !== 0 ? (
                            <div className="flex justify-center">
                              <figure className="self-center">
                                <img
                                  src={node.data.img2[0].url}
                                  alt=""
                                  className=""
                                />
                                <figcaption className="text-center">
                                  {node.data.img2caption}
                                </figcaption>
                              </figure>
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
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Timeline1954
