import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import MonthHeader from "../components/monthHeader"
import YearHeader from "../components/yearHeader"
import TimelineLeft from "../components/timelineLeft"
import TimelineDates from "../components/timelineDates"
import TimelineRight from "../components/timelineRight"
import ToTop from "../components/toTop"

export const query1963 = graphql`
  {
    dateTitle: file(relativePath: { eq: "dateTitles/1963.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    january: allAirtable(
      filter: { table: { eq: "data1963" }, data: { month: { eq: "January" } } }
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
      filter: { table: { eq: "data1963" }, data: { month: { eq: "February" } } }
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
      filter: { table: { eq: "data1963" }, data: { month: { eq: "March" } } }
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
    april: allAirtable(
      filter: { table: { eq: "data1963" }, data: { month: { eq: "April" } } }
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
    may: allAirtable(
      filter: { table: { eq: "data1963" }, data: { month: { eq: "May" } } }
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
    june: allAirtable(
      filter: { table: { eq: "data1963" }, data: { month: { eq: "June" } } }
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
    july: allAirtable(
      filter: { table: { eq: "data1963" }, data: { month: { eq: "July" } } }
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
    august: allAirtable(
      filter: { table: { eq: "data1963" }, data: { month: { eq: "August" } } }
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
    september: allAirtable(
      filter: {
        table: { eq: "data1963" }
        data: { month: { eq: "September" } }
      }
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
    october: allAirtable(
      filter: { table: { eq: "data1963" }, data: { month: { eq: "October" } } }
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
    november: allAirtable(
      filter: { table: { eq: "data1963" }, data: { month: { eq: "November" } } }
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
    december: allAirtable(
      filter: { table: { eq: "data1963" }, data: { month: { eq: "December" } } }
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

const data1963 = ({ data }) => {
  return (
    <Layout>
      <ToTop />
      <div className="bg-white max-w-screen-xl mx-auto">
        <YearHeader
          img={data.dateTitle.childImageSharp.fluid}
          summary="National acts that played at Danceland in 1963 include - The Beach Boys, 4 Seasons, Chubby Checker, Conway Twitty, Dion, Roy Orbison, Little Peggy March, The Fendermen, The Ventures, Freddy Cannon, Jerry Lee Lewis, The Everly Brothers, Sandy Nelson, Bobby Vinton, Pastel Six, Dick &amp; Dee Dee, Johnny Tillotson, Paul &amp; Paula, Crickets, Timi Yuro, The Kingsmen, Tommy Roe, Jimmy Gilmer &amp; The Fireballs, Brian Hyland, Lou Christie, Jay &amp; The Americans, Bill Black’s Combo, Joey Dee &amp; The Starliters, Johnny Cymbal, Steve Alaimo, Johnny &amp; The Hurricanes, Myron Lee &amp; The Caddies, Charlie Russo, The Velaires, Wanda Jackson, Burch Ray &amp; The Walkers, Lonnie Mack, The Champs, Little Jimmy Dickens, The Strangers, Six Fat Dutchmen, George Hamilton IV"
        />
        <MonthHeader month="January" year="1963" />
        <div>
          {data.january.edges.map(({ node }) => {
            return (
              <div key={node.id} className="timeline-grid">
                {/* left side of timeline */}
                <div>
                  <TimelineLeft
                    orderId={node.data.orderId}
                    artist={node.data.artist}
                    price={node.data.price}
                  />
                  {node.data.orderId % 2 == 0 ? null : (
                    <div className="flex flex-col items-center p-2">
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
                  )}
                </div>
                {/* Center timeline */}
                <TimelineDates
                  fullDate={node.data.fullDate}
                  weekday={node.data.weekday}
                  orderId={node.data.orderId}
                />
                {/* Right side of timeline */}
                <div>
                  <TimelineRight
                    orderId={node.data.orderId}
                    artist={node.data.artist}
                    price={node.data.price}
                  />
                  {node.data.orderId % 2 !== 0 ? null : (
                    <div className="flex flex-col items-center p-2">
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
                  )}
                </div>
              </div>
            )
          })}
        </div>
        {/* End of month */}
        <MonthHeader month="February" year="1963" />
        <div>
          {data.february.edges.map(({ node }) => {
            return (
              <div key={node.id} className="timeline-grid">
                {/* left side of timeline */}
                <div>
                  <TimelineLeft
                    orderId={node.data.orderId}
                    artist={node.data.artist}
                    price={node.data.price}
                  />
                  {node.data.orderId % 2 == 0 ? null : (
                    <div className="flex flex-col items-center p-2">
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
                  )}
                </div>
                {/* Center timeline */}
                <TimelineDates
                  fullDate={node.data.fullDate}
                  weekday={node.data.weekday}
                  orderId={node.data.orderId}
                />
                {/* Right side of timeline */}
                <div>
                  <TimelineRight
                    orderId={node.data.orderId}
                    artist={node.data.artist}
                    price={node.data.price}
                  />
                  {node.data.orderId % 2 !== 0 ? null : (
                    <div className="flex flex-col items-center p-2">
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
                  )}
                </div>
              </div>
            )
          })}
        </div>
        {/* End of month */}
        <MonthHeader month="March" year="1963" />
        <div>
          {data.march.edges.map(({ node }) => {
            return (
              <div key={node.id} className="timeline-grid">
                {/* left side of timeline */}
                <div>
                  <TimelineLeft
                    orderId={node.data.orderId}
                    artist={node.data.artist}
                    price={node.data.price}
                  />
                  {node.data.orderId % 2 == 0 ? null : (
                    <div className="flex flex-col items-center p-2">
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
                  )}
                </div>
                {/* Center timeline */}
                <TimelineDates
                  fullDate={node.data.fullDate}
                  weekday={node.data.weekday}
                  orderId={node.data.orderId}
                />
                {/* Right side of timeline */}
                <div>
                  <TimelineRight
                    orderId={node.data.orderId}
                    artist={node.data.artist}
                    price={node.data.price}
                  />
                  {node.data.orderId % 2 !== 0 ? null : (
                    <div className="flex flex-col items-center p-2">
                      {node.data.img1 && node.data.img1.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img1[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                      {node.data.img2 && node.data.img2.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img2[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                      {node.data.img3 && node.data.img3.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img3[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        {/* End of month */}
        <MonthHeader month="April" year="1963" />
        <div>
          {data.april.edges.map(({ node }) => {
            return (
              <div key={node.id} className="timeline-grid">
                {/* left side of timeline */}
                <div>
                  <TimelineLeft
                    orderId={node.data.orderId}
                    artist={node.data.artist}
                    price={node.data.price}
                  />
                  {node.data.orderId % 2 == 0 ? null : (
                    <div className="flex flex-col items-center p-2">
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
                  )}
                </div>
                {/* Center timeline */}
                <TimelineDates
                  fullDate={node.data.fullDate}
                  weekday={node.data.weekday}
                  orderId={node.data.orderId}
                />
                {/* Right side of timeline */}
                <div>
                  <TimelineRight
                    orderId={node.data.orderId}
                    artist={node.data.artist}
                    price={node.data.price}
                  />
                  {node.data.orderId % 2 !== 0 ? null : (
                    <div className="flex flex-col items-center p-2">
                      {node.data.img1 && node.data.img1.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img1[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                      {node.data.img2 && node.data.img2.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img2[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                      {node.data.img3 && node.data.img3.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img3[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        {/* End of month */}
        <MonthHeader month="May" year="1963" />
        <div>
          {data.may.edges.map(({ node }) => {
            return (
              <div key={node.id} className="timeline-grid">
                {/* left side of timeline */}
                <div>
                  <TimelineLeft
                    orderId={node.data.orderId}
                    artist={node.data.artist}
                    price={node.data.price}
                  />
                  {node.data.orderId % 2 == 0 ? null : (
                    <div className="flex flex-col items-center p-2">
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
                  )}
                </div>
                {/* Center timeline */}
                <TimelineDates
                  fullDate={node.data.fullDate}
                  weekday={node.data.weekday}
                  orderId={node.data.orderId}
                />
                {/* Right side of timeline */}
                <div>
                  <TimelineRight
                    orderId={node.data.orderId}
                    artist={node.data.artist}
                    price={node.data.price}
                  />
                  {node.data.orderId % 2 !== 0 ? null : (
                    <div className="flex flex-col items-center p-2">
                      {node.data.img1 && node.data.img1.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img1[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                      {node.data.img2 && node.data.img2.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img2[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                      {node.data.img3 && node.data.img3.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img3[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        {/* End of month */}
        <MonthHeader month="June" year="1963" />
        <div>
          {data.june.edges.map(({ node }) => {
            return (
              <div key={node.id} className="timeline-grid">
                {/* left side of timeline */}
                <div>
                  <TimelineLeft
                    orderId={node.data.orderId}
                    artist={node.data.artist}
                    price={node.data.price}
                  />
                  {node.data.orderId % 2 == 0 ? null : (
                    <div className="flex flex-col items-center p-2">
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
                  )}
                </div>
                {/* Center timeline */}
                <TimelineDates
                  fullDate={node.data.fullDate}
                  weekday={node.data.weekday}
                  orderId={node.data.orderId}
                />
                {/* Right side of timeline */}
                <div>
                  <TimelineRight
                    orderId={node.data.orderId}
                    artist={node.data.artist}
                    price={node.data.price}
                  />
                  {node.data.orderId % 2 !== 0 ? null : (
                    <div className="flex flex-col items-center p-2">
                      {node.data.img1 && node.data.img1.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img1[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                      {node.data.img2 && node.data.img2.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img2[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                      {node.data.img3 && node.data.img3.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img3[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        {/* End of month */}
        <MonthHeader month="July" year="1963" />
        <div>
          {data.july.edges.map(({ node }) => {
            return (
              <div key={node.id} className="timeline-grid">
                {/* left side of timeline */}
                <div>
                  <TimelineLeft
                    orderId={node.data.orderId}
                    artist={node.data.artist}
                    price={node.data.price}
                  />
                  {node.data.orderId % 2 == 0 ? null : (
                    <div className="flex flex-col items-center p-2">
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
                  )}
                </div>
                {/* Center timeline */}
                <TimelineDates
                  fullDate={node.data.fullDate}
                  weekday={node.data.weekday}
                  orderId={node.data.orderId}
                />
                {/* Right side of timeline */}
                <div>
                  <TimelineRight
                    orderId={node.data.orderId}
                    artist={node.data.artist}
                    price={node.data.price}
                  />
                  {node.data.orderId % 2 !== 0 ? null : (
                    <div className="flex flex-col items-center p-2">
                      {node.data.img1 && node.data.img1.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img1[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                      {node.data.img2 && node.data.img2.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img2[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                      {node.data.img3 && node.data.img3.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img3[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        {/* End of month */}
        <MonthHeader month="August" year="1963" />
        <div>
          {data.august.edges.map(({ node }) => {
            return (
              <div key={node.id} className="timeline-grid">
                {/* left side of timeline */}
                <div>
                  <TimelineLeft
                    orderId={node.data.orderId}
                    artist={node.data.artist}
                    price={node.data.price}
                  />
                  {node.data.orderId % 2 == 0 ? null : (
                    <div className="flex flex-col items-center p-2">
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
                  )}
                </div>
                {/* Center timeline */}
                <TimelineDates
                  fullDate={node.data.fullDate}
                  weekday={node.data.weekday}
                  orderId={node.data.orderId}
                />
                {/* Right side of timeline */}
                <div>
                  <TimelineRight
                    orderId={node.data.orderId}
                    artist={node.data.artist}
                    price={node.data.price}
                  />
                  {node.data.orderId % 2 !== 0 ? null : (
                    <div className="flex flex-col items-center p-2">
                      {node.data.img1 && node.data.img1.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img1[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                      {node.data.img2 && node.data.img2.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img2[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                      {node.data.img3 && node.data.img3.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img3[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        {/* End of month */}
        <MonthHeader month="September" year="1963" />
        <div>
          {data.september.edges.map(({ node }) => {
            return (
              <div key={node.id} className="timeline-grid">
                {/* left side of timeline */}
                <div>
                  <TimelineLeft
                    orderId={node.data.orderId}
                    artist={node.data.artist}
                    price={node.data.price}
                  />
                  {node.data.orderId % 2 == 0 ? null : (
                    <div className="flex flex-col items-center p-2">
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
                  )}
                </div>
                {/* Center timeline */}
                <TimelineDates
                  fullDate={node.data.fullDate}
                  weekday={node.data.weekday}
                  orderId={node.data.orderId}
                />
                {/* Right side of timeline */}
                <div>
                  <TimelineRight
                    orderId={node.data.orderId}
                    artist={node.data.artist}
                    price={node.data.price}
                  />
                  {node.data.orderId % 2 !== 0 ? null : (
                    <div className="flex flex-col items-center p-2">
                      {node.data.img1 && node.data.img1.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img1[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                      {node.data.img2 && node.data.img2.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img2[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                      {node.data.img3 && node.data.img3.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img3[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        {/* End of month */}
        <MonthHeader month="October" year="1963" />
        <div>
          {data.october.edges.map(({ node }) => {
            return (
              <div key={node.id} className="timeline-grid">
                {/* left side of timeline */}
                <div>
                  <TimelineLeft
                    orderId={node.data.orderId}
                    artist={node.data.artist}
                    price={node.data.price}
                  />
                  {node.data.orderId % 2 == 0 ? null : (
                    <div className="flex flex-col items-center p-2">
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
                  )}
                </div>
                {/* Center timeline */}
                <TimelineDates
                  fullDate={node.data.fullDate}
                  weekday={node.data.weekday}
                  orderId={node.data.orderId}
                />
                {/* Right side of timeline */}
                <div>
                  <TimelineRight
                    orderId={node.data.orderId}
                    artist={node.data.artist}
                    price={node.data.price}
                  />
                  {node.data.orderId % 2 !== 0 ? null : (
                    <div className="flex flex-col items-center p-2">
                      {node.data.img1 && node.data.img1.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img1[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                      {node.data.img2 && node.data.img2.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img2[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                      {node.data.img3 && node.data.img3.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img3[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        {/* End of month */}
        <MonthHeader month="November" year="1963" />
        <div>
          {data.november.edges.map(({ node }) => {
            return (
              <div key={node.id} className="timeline-grid">
                {/* left side of timeline */}
                <div>
                  <TimelineLeft
                    orderId={node.data.orderId}
                    artist={node.data.artist}
                    price={node.data.price}
                  />
                  {node.data.orderId % 2 == 0 ? null : (
                    <div className="flex flex-col items-center p-2">
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
                  )}
                </div>
                {/* Center timeline */}
                <TimelineDates
                  fullDate={node.data.fullDate}
                  weekday={node.data.weekday}
                  orderId={node.data.orderId}
                />
                {/* Right side of timeline */}
                <div>
                  <TimelineRight
                    orderId={node.data.orderId}
                    artist={node.data.artist}
                    price={node.data.price}
                  />
                  {node.data.orderId % 2 !== 0 ? null : (
                    <div className="flex flex-col items-center p-2">
                      {node.data.img1 && node.data.img1.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img1[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                      {node.data.img2 && node.data.img2.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img2[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                      {node.data.img3 && node.data.img3.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img3[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        {/* End of month */}
        <MonthHeader month="December" year="1963" />
        <div>
          {data.december.edges.map(({ node }) => {
            return (
              <div key={node.id} className="timeline-grid">
                {/* left side of timeline */}
                <div>
                  <TimelineLeft
                    orderId={node.data.orderId}
                    artist={node.data.artist}
                    price={node.data.price}
                  />
                  {node.data.orderId % 2 == 0 ? null : (
                    <div className="flex flex-col items-center p-2">
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
                  )}
                </div>
                {/* Center timeline */}
                <TimelineDates
                  fullDate={node.data.fullDate}
                  weekday={node.data.weekday}
                  orderId={node.data.orderId}
                />
                {/* Right side of timeline */}
                <div>
                  <TimelineRight
                    orderId={node.data.orderId}
                    artist={node.data.artist}
                    price={node.data.price}
                  />
                  {node.data.orderId % 2 !== 0 ? null : (
                    <div className="flex flex-col items-center p-2">
                      {node.data.img1 && node.data.img1.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img1[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                      {node.data.img2 && node.data.img2.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img2[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
                      {node.data.img3 && node.data.img3.url !== 0 ? (
                        <div className="flex">
                          <img
                            src={node.data.img3[0].url}
                            alt=""
                            className="self-center"
                          />
                        </div>
                      ) : null}
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

export default data1963
