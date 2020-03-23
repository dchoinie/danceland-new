import React, { Component } from "react"
import Layout from "../components/layout"
import YearHeader from '../components/yearHeader'
import MonthHeader from "../components/monthHeader"
import { graphql } from "gatsby"

const data1964 = () => {
  return (
    <Layout>
      <div className="bg-white max-w-screen-xl mx-auto">
      <YearHeader img="https://via.placeholder.com/1280x920" summary="National acts that played at Danceland in 1964 include - Jan &amp; Dean, The Ronettes, Chuck Berry, Roy Orbison, Chad &amp; Jeremy, Dee Dee Sharp, The Everly Brothers, Roger Miller, The Crystals, Dale &amp; Grace, Bobby Vee, The Astronauts, Nino Tempo &amp; April Stevens, Bobby Vinton, Jerry Lee Lewis, Brian Hyland, The Rip Chords, Terry Stafford, Bobby Goldsboro, The Hondells, Conway Twitty, The Champs, Lonnie Mack, Johnny &amp; The Hurricanes, The Fabulous Flippers, Ronny &amp; The Daytonas, The Trashmen, Gene Simmons, The Marketts, Jimmy Clanton, Troy Shondell, Myron Lee &amp; The Caddies, Bill Black’s Combo, The Rivieras, Buddy Knox" />
        <MonthHeader month="January" year="1964" />
        <MonthHeader month="February" year="1964" />
        <MonthHeader month="March" year="1964" />
        <MonthHeader month="April" year="1964" />
        <MonthHeader month="May" year="1964" />
        <MonthHeader month="June" year="1964" />
        <MonthHeader month="July" year="1964" />
        <MonthHeader month="August" year="1964" />
        <MonthHeader month="September" year="1964" />
        <MonthHeader month="October" year="1964" />
        <MonthHeader month="November" year="1964" />
        <MonthHeader month="December" year="1964" />
      </div>
    </Layout>
  )
}

export default data1964
