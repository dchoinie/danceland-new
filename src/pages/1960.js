import React, { Component } from "react"
import Layout from "../components/layout"
import YearHeader from '../components/yearHeader'
import MonthHeader from "../components/monthHeader"
import { graphql } from "gatsby"

const data1960 = () => {
  return (
    <Layout>
      <div className="bg-white max-w-screen-xl mx-auto">
      <YearHeader img="https://via.placeholder.com/1280x920" summary="National acts that played at Danceland in 1960 include - Johnny Cash, Bobby Vee, Frankie Ford, Bobby Rydell, Carl Mann, The Four Preps, Jimmy Clanton, Johnny Burnette, Brian Hyland, Wanda Jackson, Conway Twitty, The Fendermen, Gene Vincent, Danny &amp; The Juniors, Jack Scott, Johnny Tillotson, Freddy Cannon, Buddy Knox, Johnny Preston, Dicky Doo &amp; The Don’ts, The Fireballs, Bobby Helms, Johnny &amp; The Hurricanes, The Skyliners, Carl Dobkins, Jr., Donnie Brooks, Johnny Ferguson, The Hollywood Argyles, Ray Smith, The Champs, Harold Dorman, The Crests, Rod Lauren, Gary Stites, Johnny Restivo, Nick DeMatteo, Dick Caruso, Danny Valentino, Johnny McKay, Larry Ellis, Skip &amp; Flip, Johnny Ferguson, Gary Miles, The Big Beats, Jim Reeves, Big Tiny Little, “Whoopee” John Wilfahrt &amp; His Orchestra, Don Glasser &amp; His Orchestra, Buddy Morrow, Sammy Stevens &amp; His Orchestra, Smokey Stover, Russ Carlyle &amp; His Orchestra, Ralph Zarnow &amp; His Orchestra " />
        <MonthHeader month="January" year="1960" />
        <MonthHeader month="February" year="1960" />
        <MonthHeader month="March" year="1960" />
        <MonthHeader month="April" year="1960" />
        <MonthHeader month="May" year="1960" />
        <MonthHeader month="June" year="1960" />
        <MonthHeader month="July" year="1960" />
        <MonthHeader month="August" year="1960" />
        <MonthHeader month="September" year="1960" />
        <MonthHeader month="October" year="1960" />
        <MonthHeader month="November" year="1960" />
        <MonthHeader month="December" year="1960" />
      </div>
    </Layout>
  )
}

export default data1960
