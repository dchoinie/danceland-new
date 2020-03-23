import React, { Component } from "react"
import Layout from "../components/layout"
import YearHeader from '../components/yearHeader'
import MonthHeader from "../components/monthHeader"
import { graphql } from "gatsby"

const data1966 = () => {
  return (
    <Layout>
      <div className="bg-white max-w-screen-xl mx-auto">
      <YearHeader img="https://via.placeholder.com/1280x920" summary="National acts that played at Danceland in 1966 include - The Animals, Mitch Ryder &amp; The Detroit Wheels, The Hollies, Jr. Walker &amp; The All Stars, The Vogues, ? &amp; The Mysterians, The Turtles, The Left Banke, Johnny &amp; The Hurricanes, The Gentrys, Cannibal &amp; The Headhunters, The McCoys, Jerry Lee Lewis, The T-Bones, New Colony Six, Gary Lewis &amp; The Playboys, Freddy Cannon, Dee Jay &amp; The Runaways, The Boys Next Door, Pete Klint Quintet, The Coachmen, Lou Christie, The Marketts, The Kingsmen" />
        <MonthHeader month="January" year="1966" />
        <MonthHeader month="February" year="1966" />
        <MonthHeader month="March" year="1966" />
        <MonthHeader month="April" year="1966" />
        <MonthHeader month="May" year="1966" />
        <MonthHeader month="June" year="1966" />
        <MonthHeader month="July" year="1966" />
        <MonthHeader month="August" year="1966" />
        <MonthHeader month="September" year="1966" />
        <MonthHeader month="October" year="1966" />
        <MonthHeader month="November" year="1966" />
        <MonthHeader month="December" year="1966" />
      </div>
    </Layout>
  )
}

export default data1966
