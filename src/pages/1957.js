import React, { Component } from "react"
import Layout from "../components/layout"
import YearHeader from '../components/yearHeader'
import MonthHeader from "../components/monthHeader"
import { graphql } from "gatsby"

const data1957 = () => {
  return (
    <Layout>
      <div className="bg-white max-w-screen-xl mx-auto">
        <YearHeader img="https://via.placeholder.com/1280x920" summary="National acts that played at Danceland in 1957 include - Johnny Cash, The Everly Brothers, Gene Vincent &amp; His Blue Caps, Jerry Lee Lewis, Buddy Knox, Jimmy Bowen, Bobby Helms, Wanda Jackson, Hank Thompson &amp; His Bravos Valley Boys, Porter Wagoner, Jim Reeves, Ray Price, Marty Robbins, Leroy Van Dyke, Leon McAuliffe &amp; His Cimarron Boys, Lee Emerson, Chuck Foster &amp; His Orchestra, Guy Lombardo &amp; His Orchestra, Don Glasser &amp; His Orchestra, Six Fat Dutchmen, “Whoopee” John Wilfahrt &amp; His Orchestra" />
        <MonthHeader month="January" year="1957" />
        <MonthHeader month="February" year="1957" />
        <MonthHeader month="March" year="1957" />
        <MonthHeader month="April" year="1957" />
        <MonthHeader month="May" year="1957" />
        <MonthHeader month="June" year="1957" />
        <MonthHeader month="July" year="1957" />
        <MonthHeader month="August" year="1957" />
        <MonthHeader month="September" year="1957" />
        <MonthHeader month="October" year="1957" />
        <MonthHeader month="November" year="1957" />
        <MonthHeader month="December" year="1957" />
      </div>
    </Layout>
  )
}

export default data1957
