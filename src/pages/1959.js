import React, { Component } from "react"
import Layout from "../components/layout"
import YearHeader from '../components/yearHeader'
import MonthHeader from "../components/monthHeader"
import { graphql } from "gatsby"

const data1959 = () => {
  return (
    <Layout>
      <div className="bg-white max-w-screen-xl mx-auto">
      <YearHeader img="https://via.placeholder.com/1280x920" summary="National acts that played at Danceland in 1959 include - Eddie Cochran, Dion &amp; The Belmonts, Johnny Horton, The Diamonds, Duane Eddy, Conway Twitty, Dale Hawkins, Johnny Cash &amp; The Tennessee Two, Frankie Avalon, Jimmy Clanton, Fabian, The Rockin’ R’s, Freddy Cannon, The Tempos, Buddy Knox, Johnny &amp; The Hurricanes, Tommy Edwards, The Big Beats, Santo &amp; Johnny, Frankie Ford, Gary Stites, Barbara Evans, The Rock-A-Teens, Jimmy Bowen, Johnny Carroll, Bill Sherrell &amp; The Dell-Tones, Sandy Nelson, Frankie Sardo, The Crickets with Ronnie Smith, The Mystics, Carl Dobkins, Jr., Skip &amp; Flip, Joe London, Floyd Robinson, Roscoe &amp; The Little Green Men, Kenny Loran, Dick Caruso, The Bell Notes, Tony Bellus, The Passions, Tommy Facenda, Bucky &amp; The Premieres, Debbie Stevens, Gary Shelton, Steve Bledsoe &amp; The Blue Jays, Tommy Dee, Suzi Arden, Jim Reeves, Judy Lynn, Cowboy Copas, Little Della Rae, Grandpa Jones, Pat Kelly &amp; The Shamrocks, Big Tiny Little, Bob &amp; Bobbie Thomas, “Whoopee” John Wilfahrt &amp; His Orchestra, Blue Barron &amp; His Orchestra, Paul Neighbors &amp; His Orchestra" />
        <MonthHeader month="January" year="1959" />
        <MonthHeader month="February" year="1959" />
        <MonthHeader month="March" year="1959" />
        <MonthHeader month="April" year="1959" />
        <MonthHeader month="May" year="1959" />
        <MonthHeader month="June" year="1959" />
        <MonthHeader month="July" year="1959" />
        <MonthHeader month="August" year="1959" />
        <MonthHeader month="September" year="1959" />
        <MonthHeader month="October" year="1959" />
        <MonthHeader month="November" year="1959" />
        <MonthHeader month="December" year="1959" />
      </div>
    </Layout>
  )
}

export default data1959
