import React, { Component } from "react"
import Layout from "../components/layout"
import YearHeader from '../components/yearHeader'
import MonthHeader from "../components/monthHeader"
import { graphql } from "gatsby"

const data1958 = () => {
  return (
    <Layout>
      <div className="bg-white max-w-screen-xl mx-auto">
        <YearHeader img="https://via.placeholder.com/1280x920" summary="National acts that played at Danceland in 1958 include - Gene Vincent &amp; The Blue Caps, Bobby Darin, Dion &amp; The Belmonts, Buddy Knox, Jimmy Bowen, The Crescendos, Johnny Cash, Carl Perkins, Jimmy Clanton, The Big Beats, Jo Ann Campbell, Wanda Jackson, Bobby Helms, Will Mercer, The Dukes Of Dixieland, Richard Maltby, Don Gibson, Jim Reeves, Hank Thompson &amp; His Brazos Valley Boys, Billy Walker, Kitty Wells, Jimmy Newman, Leon McAuliffe, Norma Jean, Bobby Lord, Johnnie &amp; Jack, “Whoopee” John Wilfahrt &amp; His Orchestra, Tony Pastor, Teddy Phillips &amp; His Orchestra, Chuck Foster &amp; His Orchestra" />
        <MonthHeader month="January" year="1958" />
        <MonthHeader month="February" year="1958" />
        <MonthHeader month="March" year="1958" />
        <MonthHeader month="April" year="1958" />
        <MonthHeader month="May" year="1958" />
        <MonthHeader month="June" year="1958" />
        <MonthHeader month="July" year="1958" />
        <MonthHeader month="August" year="1958" />
        <MonthHeader month="September" year="1958" />
        <MonthHeader month="October" year="1958" />
        <MonthHeader month="November" year="1958" />
        <MonthHeader month="December" year="1958" />
      </div>
    </Layout>
  )
}

export default data1958
