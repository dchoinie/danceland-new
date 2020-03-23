import React, { Component } from "react"
import Layout from "../components/layout"
import YearHeader from '../components/yearHeader'
import MonthHeader from "../components/monthHeader"
import { graphql } from "gatsby"

const data1961 = () => {
  return (
    <Layout>
      <div className="bg-white max-w-screen-xl mx-auto">
      <YearHeader img="https://via.placeholder.com/1280x920" summary="National acts that played at Danceland in 1961 include - The Ventures, Del Shannon, Bobby Vee, Donnie Brooks, Dion, Jimmy Dean, Conway Twitty, Ray Stevens, Johnny Cash, Danny &amp; The Juniors, Bill Black’s Combo, Jan &amp; Dean, Dick &amp; Dee Dee, Bobby Vinton, Larry Verne, The Champs, Buck Owens, The Fendermen, Tony Orlando, Cathy Jean &amp; The Roommates, Johnny Burnette, Buddy Knox, Dicky Doo &amp; The Don’ts, Jerry Fuller, Wanda Jackson, Ral Donner, The String-A-Longs, Bobby Bare, Johnny &amp; The Hurricanes, Gary Stites, Janie Grant, Ray Ruff, Gene Simmons, Johnny Maestro, Ersel Hickey, Chuck Tharp, Gerry Granahan, B. Bumble &amp; The Stingers, Bobby Lord, Johnny Western, The Velaires, Pee Wee Hunt &amp; His Twelfth Street Ragtime Band" />
        <MonthHeader month="January" year="1961" />
        <MonthHeader month="February" year="1961" />
        <MonthHeader month="March" year="1961" />
        <MonthHeader month="April" year="1961" />
        <MonthHeader month="May" year="1961" />
        <MonthHeader month="June" year="1961" />
        <MonthHeader month="July" year="1961" />
        <MonthHeader month="August" year="1961" />
        <MonthHeader month="September" year="1961" />
        <MonthHeader month="October" year="1961" />
        <MonthHeader month="November" year="1961" />
        <MonthHeader month="December" year="1961" />
      </div>
    </Layout>
  )
}

export default data1961
