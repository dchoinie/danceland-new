import React, { Component } from "react"
import Layout from "../components/layout"
import YearHeader from "../components/yearHeader"
import MonthHeader from "../components/monthHeader"
import { graphql } from "gatsby"

const data1954 = () => {
  return (
    <Layout>
      <div className="bg-white max-w-screen-xl mx-auto">
        <YearHeader img="https://via.placeholder.com/1280x920" summary="National acts that played at Danceland in 1954 include - Wayne King &amp; His Orchestra, “Whoopee” John Wilfahrt &amp; His Orchestra, WNAX Bohemian Band, Fezz Fritsche &amp; His Goosetown Band, Six Fat Dutchmen, Frank Yankovic &amp; His Yanks" />
        <MonthHeader month="January" year="1954" />
        <MonthHeader month="February" year="1954" />
        <MonthHeader month="March" year="1954" />
        <MonthHeader month="April" year="1954" />
        <MonthHeader month="May" year="1954" />
        <MonthHeader month="June" year="1954" />
        <MonthHeader month="July" year="1954" />
        <MonthHeader month="August" year="1954" />
        <MonthHeader month="September" year="1954" />
        <MonthHeader month="October" year="1954" />
        <MonthHeader month="November" year="1954" />
        <MonthHeader month="December" year="1954" />
      </div>
    </Layout>
  )
}

export default data1954
