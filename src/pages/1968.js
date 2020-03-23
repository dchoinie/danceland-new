import React, { Component } from "react"
import Layout from "../components/layout"
import YearHeader from '../components/yearHeader'
import MonthHeader from "../components/monthHeader"
import { graphql } from "gatsby"

const data1968 = () => {
  return (
    <Layout>
      <div className="bg-white max-w-screen-xl mx-auto">
      <YearHeader img="https://via.placeholder.com/1280x920" summary="It is unknown who played the first part of 1968 (if anyone). The Pete Klint Quintet had the honor of playing the final dance on March 17." />
        <MonthHeader month="January" year="1968" />
        <MonthHeader month="February" year="1968" />
        <MonthHeader month="March" year="1968" />
        <MonthHeader month="April" year="1968" />
        <MonthHeader month="May" year="1968" />
        <MonthHeader month="June" year="1968" />
        <MonthHeader month="July" year="1968" />
        <MonthHeader month="August" year="1968" />
        <MonthHeader month="September" year="1968" />
        <MonthHeader month="October" year="1968" />
        <MonthHeader month="November" year="1968" />
        <MonthHeader month="December" year="1968" />
      </div>
    </Layout>
  )
}

export default data1968
