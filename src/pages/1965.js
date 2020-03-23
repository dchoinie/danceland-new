import React from "react"
import Layout from "../components/layout"
import MonthHeader from "../components/monthHeader"
import YearHeader from "../components/yearHeader"
import { graphql } from "gatsby"

export const query1965 = graphql`
  {
    january: allAirtable(
      filter: { table: { eq: "data1965" }, data: { month: { eq: "January" } } }
      sort: { fields: data___orderId }
    ) {
      edges {
        node {
          id
          data {
            artist
            fullDate
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
            month
            orderId
            price
            weekday
            year
          }
        }
      }
    }
    february: allAirtable(
      filter: { table: { eq: "data1965" }, data: { month: { eq: "February" } } }
      sort: { fields: data___orderId }
    ) {
      edges {
        node {
          id
          data {
            artist
            fullDate
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
            month
            orderId
            price
            weekday
            year
          }
        }
      }
    }
    march: allAirtable(
      filter: { table: { eq: "data1965" }, data: { month: { eq: "March" } } }
      sort: { fields: data___orderId }
    ) {
      edges {
        node {
          id
          data {
            artist
            fullDate
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
            month
            orderId
            price
            weekday
            year
          }
        }
      }
    }
  }
`

const data1965 = ({ data }) => {
  return (
    <Layout>
      <div className="bg-white max-w-screen-xl mx-auto">
        <YearHeader
          img="https://via.placeholder.com/1280x920"
          summary="National acts that played at Danceland in 1965 include - The
              Yardbirds, The Turtles, Beau Brummels, Gary Lewis &amp; The
              Playboys, Chuck Berry, The Everly Brothers, Brenda Lee, The Gants,
              Billy Joe Royal, The Kingsmen, Sam The Sham &amp; The Pharaohs,
              Johnny Tillotson, The Newbeats, Jerry Lee Lewis, Freddy Cannon,
              The Hondells, Jewel Akens, Sue Thompson, The Surfaris, Bobby
              Sherman, The Hullabaloos, Shirley Ellis, Johnny &amp; The
              Hurricanes, Bobby Freeman, The Strangeloves, The McCoys, Brian
              Hyland, The Ikettes, Jay &amp; The Americans, Len Barry, The
              Castaways, Guess Who, The Crystals, Fabulous Flippers, Conway
              Twitty, The Gestures, Cannibal &amp; The Headhunters, The
              Premiers, Tiny Hill, Myron Lee &amp; The Caddies, Lonnie Mack, The
              Astronauts, Tony Clarke, The Trashmen, Jimmy Velvet, The
              Tremolons, Big Tiny Little"
        />
        <MonthHeader month="January" year="1965" />
        <div>
          {data.january.edges.map(({ node }) => {
            return (
              <div key={node.id} className="timeline-grid">
                <div
                  className="flex justify-center py-2"
                  //   style={{ border: "1px solid red" }}
                >
                  {node.data.orderId % 2 == 0 ? null : (
                    <div className="flex flex-col w-full">
                      <div className="flex flex-col items-center">
                        <p className="text-xl mr-1 text-gray-800 text-center uppercase font-bold">
                          {node.data.artist}
                        </p>
                      </div>
                      <div
                        className="border-t border-gray-500"
                        style={{ marginRight: "-10%", position: "relative" }}
                      ></div>
                      <p className="text-center text-gray-700">
                        {node.data.price}
                      </p>
                      <p>{node.data.comment1}</p>
                      <div className="flex p-2">
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
                  )}
                </div>
                <div
                  className="flex flex-col items-center bg-gray-300 text-gray-800 py-2"
                  //   style={{ border: "1px solid red" }}
                >
                  <h5 className="text-xl uppercase text-gray-600">
                    {node.data.fullDate}
                  </h5>
                  <p className="text-base text-gray-500">{node.data.weekday}</p>
                </div>
                <div
                  className="flex justify-center py-2"
                  //   style={{ border: "1px solid red" }}
                >
                  {node.data.orderId % 2 !== 0 ? null : (
                    <div className="flex flex-col w-full">
                      <div>
                        <div className="flex flex-col items-center">
                          <p className="text-xl ml-1 text-gray-800 text-center uppercase font-bold">
                            {node.data.artist}
                          </p>
                        </div>
                        <div
                          className="border-t border-gray-500"
                          style={{ marginLeft: "-10%", position: "relative" }}
                        ></div>
                        <p className="text-center text-gray-700">
                          {node.data.price}
                        </p>
                        <div className="flex p-2">
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
        <MonthHeader month="February" year="1965" />
        <div>
          {data.february.edges.map(({ node }) => {
            return (
              <div key={node.id} className="timeline-grid">
                <div
                  className="flex justify-center py-2"
                  // style={{ border: "1px solid red" }}
                >
                  {node.data.orderId % 2 == 0 ? null : (
                    <div className="flex flex-col w-full">
                      <div className="flex flex-col items-center">
                        <p className="text-xl mr-1 text-gray-800 text-center uppercase font-bold">
                          {node.data.artist}
                        </p>
                      </div>
                      <div
                        className="border-t border-gray-500"
                        style={{ marginRight: "-10%", position: "relative" }}
                      ></div>
                      <p className="text-center text-gray-700">
                        {node.data.price}
                      </p>
                      <p>{node.data.comment1}</p>
                      <div className="flex p-2">
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
                  )}
                </div>
                <div
                  className="flex flex-col items-center bg-gray-300 text-gray-800 py-2"
                  //   style={{ border: "1px solid red" }}
                >
                  <h5 className="text-xl uppercase text-gray-600">
                    {node.data.fullDate}
                  </h5>
                  <p className="text-base text-gray-500">{node.data.weekday}</p>
                </div>
                <div
                  className="flex justify-center py-2"
                  //   style={{ border: "1px solid red" }}
                >
                  {node.data.orderId % 2 !== 0 ? null : (
                    <div className="flex flex-col w-full">
                      <div>
                        <div className="flex flex-col items-center">
                          <p className="text-xl ml-1 text-gray-800 text-center uppercase font-bold">
                            {node.data.artist}
                          </p>
                        </div>
                        <div
                          className="border-t border-gray-500"
                          style={{ marginLeft: "-10%", position: "relative" }}
                        ></div>
                        <p className="text-center text-gray-700">
                          {node.data.price}
                        </p>
                        <div className="flex p-2">
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
        <MonthHeader month="March" year="1965" />
        <div>
          {data.march.edges.map(({ node }) => {
            return (
              <div key={node.id} className="timeline-grid">
                <div
                  className="flex justify-center py-2"
                  //   style={{ border: "1px solid red" }}
                >
                  {node.data.orderId % 2 == 0 ? null : (
                    <div
                      className="flex flex-col w-full"
                      style={{ border: "1px solid red" }}
                    >
                      <div className="flex flex-col items-center">
                        <p className="text-xl mr-1 text-gray-800 text-center uppercase font-bold">
                          {node.data.artist}
                        </p>
                      </div>
                      <div
                        className="border-t border-gray-500"
                        style={{ marginRight: "-10%", position: "relative" }}
                      ></div>
                      <p className="text-center text-gray-700">
                        {node.data.price}
                      </p>
                      <p>{node.data.comment1}</p>
                      <div
                        className="flex flex-col p-2"
                        style={{ border: "1px solid blue" }}
                      >
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
                  )}
                </div>
                <div
                  className="flex flex-col items-center bg-gray-300 text-gray-800 py-2"
                  //   style={{ border: "1px solid red" }}
                >
                  <h5 className="text-xl uppercase text-gray-600">
                    {node.data.fullDate}
                  </h5>
                  <p className="text-base text-gray-500">{node.data.weekday}</p>
                </div>
                <div
                  className="flex justify-center py-2"
                  //   style={{ border: "1px solid red" }}
                >
                  {node.data.orderId % 2 !== 0 ? null : (
                    <div className="flex flex-col w-full">
                      <div>
                        <div className="flex flex-col items-center">
                          <p className="text-xl ml-1 text-gray-800 text-center uppercase font-bold">
                            {node.data.artist}
                          </p>
                        </div>
                        <div
                          className="border-t border-gray-500"
                          style={{ marginLeft: "-10%", position: "relative" }}
                        ></div>
                        <p className="text-center text-gray-700">
                          {node.data.price}
                        </p>
                        <div
                          className="flex flex-col p-2 items-center"
                          style={{ border: "1px solid green" }}
                        >
                          {node.data.img1 && node.data.img1.url !== 0 ? (
                            <div
                              className="flex justify-center"
                              style={{ border: "1px solid red" }}
                            >
                              <figure
                                className="self-center"
                                style={{ border: "1px solid red" }}
                              >
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

export default data1965
