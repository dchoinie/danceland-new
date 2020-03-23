import React, { Component } from "react"
import Layout from "../components/layout"
import YearHeader from "../components/yearHeader"
import MonthHeader from "../components/monthHeader"
import { graphql } from "gatsby"

const data1956 = () => {
  return (
    <Layout>
      <div className="bg-white max-w-screen-xl mx-auto">
        <YearHeader img="https://via.placeholder.com/1280x920" summary="National acts that played at Danceland in 1956 include: Boyd Bennett &amp; His Rockets, Wanda Jackson, Faron Young, Webb Pierce, Marvin Rainwater, Porter Wagoner, Hank Thompson &amp; His Bravos Valley Boys, Red Sovine, Bill Wimberly &amp; His Country Rhythm Boys, Bobby Lord, Jimmy &amp; Johnny, Rusty Draper, Dick Mango &amp; His Orchestra, Ray Pearl &amp; His Musical Gems, Six Fat Dutchmen, “Whoopee” John Wilfahrt &amp; His Orchestra" />
      <MonthHeader month="January" year="1956" />
      <MonthHeader month="February" year="1956" />
      <MonthHeader month="March" year="1956" />
      <MonthHeader month="April" year="1956" />
      <MonthHeader month="May" year="1956" />
      <MonthHeader month="June" year="1956" />
      <MonthHeader month="July" year="1956" />
      <MonthHeader month="August" year="1956" />
      <MonthHeader month="September" year="1956" />
      <MonthHeader month="October" year="1956" />
      <MonthHeader month="November" year="1956" />
      <MonthHeader month="December" year="1956" />
      </div>
    </Layout>
  )
}

export default data1956
