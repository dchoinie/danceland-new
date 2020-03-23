import React, { Component } from "react"
import Layout from "../components/layout"
import YearHeader from '../components/yearHeader'
import MonthHeader from "../components/monthHeader"
import { graphql } from "gatsby"

const data1962 = () => {
  return (
    <Layout>
      <div className="bg-white max-w-screen-xl mx-auto">
      <YearHeader img="https://via.placeholder.com/1280x920" summary="National acts that played at Danceland in 1962 include - Neil Sedaka, Gene Pitney, The Everly Brothers, Jay &amp; The Americans, Johnny Burnette, The Duprees, Duane Eddy, Linda Scott, Bill Haley &amp; The Comets, Bobby Vinton, Del Shannon, Wanda Jackson, Johnny Tillotson, Freddy Cannon, Dickey Lee, Brian Hyland, Tony Orlando, Joey Dee &amp; The Starliters, Bobby Vee, The Belmonts, Conway Twitty, The Champs, Jimmy Clanton, Jerry Lee Lewis, Johnny Cash, The Marketts, Buddy Knox, The Hollywood Argyles, Bill Black’s Combo, Babs Tino, Johnny &amp; The Hurricanes, Kenny Chandler, Jamie Coe, The Big Beats, Gary Criss, Myron Lee &amp; The Caddies, Ray Ruff, Billy Joe &amp; The Checkmates, The Velaires, Big Tiny Little" />
        <MonthHeader month="January" year="1962" />
        <MonthHeader month="February" year="1962" />
        <MonthHeader month="March" year="1962" />
        <MonthHeader month="April" year="1962" />
        <MonthHeader month="May" year="1962" />
        <MonthHeader month="June" year="1962" />
        <MonthHeader month="July" year="1962" />
        <MonthHeader month="August" year="1962" />
        <MonthHeader month="September" year="1962" />
        <MonthHeader month="October" year="1962" />
        <MonthHeader month="November" year="1962" />
        <MonthHeader month="December" year="1962" />
      </div>
    </Layout>
  )
}

export default data1962
