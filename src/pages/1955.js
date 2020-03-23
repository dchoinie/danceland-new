import React, { Component } from "react"
import Layout from "../components/layout"
import YearHeader from "../components/yearHeader"
import MonthHeader from "../components/monthHeader"
import { graphql } from "gatsby"

const data1955 = () => {
  return (
    <Layout>
      <div className="bg-white max-w-screen-xl mx-auto">
        <YearHeader img="https://via.placeholder.com/1280x920" summary="1955 was the year live rock and roll came to Cedar Rapids. The date was October 6th and the band was Bill Haley &amp; His Comets. That would signal the beginning of Danceland being the place for eastern Iowans to witness live rock and roll. Later that month Boyd Bennett &amp; His Rockets, became the second rock and rollers to make an appearance. Also gracing the Danceland stage in 1955 were the innovating orchestra of Sauter-Finegan, polka great “Whoopee” John Wilfahrt &amp; His Orchestra and Yankton South Dakota’s popular WNAX Bohemian Band. Major country acts include Pee Wee King &amp; His Golden West Cowboys and Bob Wills &amp; His Texas Playboys." />
        <MonthHeader month="January" year="1955" />
        <MonthHeader month="February" year="1955" />
        <MonthHeader month="March" year="1955" />
        <MonthHeader month="April" year="1955" />
        <MonthHeader month="May" year="1955" />
        <MonthHeader month="June" year="1955" />
        <MonthHeader month="July" year="1955" />
        <MonthHeader month="August" year="1955" />
        <MonthHeader month="September" year="1955" />
        <MonthHeader month="October" year="1955" />
        <MonthHeader month="November" year="1955" />
        <MonthHeader month="December" year="1955" />
      </div>
    </Layout>
  )
}

export default data1955
