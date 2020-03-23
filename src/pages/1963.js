import React, { Component } from "react"
import Layout from "../components/layout"
import YearHeader from '../components/yearHeader'
import MonthHeader from "../components/monthHeader"
import { graphql } from "gatsby"

const data1963 = () => {
  return (
    <Layout>
      <div className="bg-white max-w-screen-xl mx-auto">
      <YearHeader img="https://via.placeholder.com/1280x920" summary="National acts that played at Danceland in 1963 include - The Beach Boys, 4 Seasons, Chubby Checker, Conway Twitty, Dion, Roy Orbison, Little Peggy March, The Fendermen, The Ventures, Freddy Cannon, Jerry Lee Lewis, The Everly Brothers, Sandy Nelson, Bobby Vinton, Pastel Six, Dick &amp; Dee Dee, Johnny Tillotson, Paul &amp; Paula, Crickets, Timi Yuro, The Kingsmen, Tommy Roe, Jimmy Gilmer &amp; The Fireballs, Brian Hyland, Lou Christie, Jay &amp; The Americans, Bill Black’s Combo, Joey Dee &amp; The Starliters, Johnny Cymbal, Steve Alaimo, Johnny &amp; The Hurricanes, Myron Lee &amp; The Caddies, Charlie Russo, The Velaires, Wanda Jackson, Burch Ray &amp; The Walkers, Lonnie Mack, The Champs, Little Jimmy Dickens, The Strangers, Six Fat Dutchmen, George Hamilton IV" />
        <MonthHeader month="January" year="1963" />
        <MonthHeader month="February" year="1963" />
        <MonthHeader month="March" year="1963" />
        <MonthHeader month="April" year="1963" />
        <MonthHeader month="May" year="1963" />
        <MonthHeader month="June" year="1963" />
        <MonthHeader month="July" year="1963" />
        <MonthHeader month="August" year="1963" />
        <MonthHeader month="September" year="1963" />
        <MonthHeader month="October" year="1963" />
        <MonthHeader month="November" year="1963" />
        <MonthHeader month="December" year="1963" />
      </div>
    </Layout>
  )
}

export default data1963
