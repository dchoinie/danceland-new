import React, { Component } from "react"
import Layout from "../components/layout"
import YearHeader from '../components/yearHeader'
import MonthHeader from "../components/monthHeader"
import { graphql } from "gatsby"

const data1967 = () => {
  return (
    <Layout>
      <div className="bg-white max-w-screen-xl mx-auto">
      <YearHeader img="https://via.placeholder.com/1280x920" summary="When it was becoming apparent Danceland was going to be a victim of an Urban Renewal project things started to go downhill, There were a few national bands booked for 1967 but they stopped pursuing any addition name acts, They would rely on an increasing number of local bands to carry on. Danceland was no longer running ads in the Cedar Rapids Gazette so it is unknown who played after August (if anyone). This was the beginning of the end. The known national acts that played at Danceland in 1967 include - The Music Machine, Sam The Sham &amp; The Pharaohs, The Cryan Shames, The Casinos, The Left Banke, The Fabulous Flippers, Pete Klint Quintet" />
        <MonthHeader month="January" year="1967" />
        <MonthHeader month="February" year="1967" />
        <MonthHeader month="March" year="1967" />
        <MonthHeader month="April" year="1967" />
        <MonthHeader month="May" year="1967" />
        <MonthHeader month="June" year="1967" />
        <MonthHeader month="July" year="1967" />
        <MonthHeader month="August" year="1967" />
        <MonthHeader month="September" year="1967" />
        <MonthHeader month="October" year="1967" />
        <MonthHeader month="November" year="1967" />
        <MonthHeader month="December" year="1967" />
      </div>
    </Layout>
  )
}

export default data1967
