import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    {
      music1: file(relativePath: { eq: "musicnotes1.jpg" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      music2: file(relativePath: { eq: "musicnotes2.jpg" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      music3: file(relativePath: { eq: "musicnotes3.jpg" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      music4: file(relativePath: { eq: "musicnotes4.jpg" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="welcome-grid mx-56">
      <article className="message is-dark welcome-header">
        <div className="message-body">
          Welcome to the website that is dedicated to preserving the history of
          Danceland Ballroom in Cedar Rapids, Iowa. You can view the history
          from the grand opening in 1929 to it’s razing in 1968 (urban renewal).
          The array of top acts that graced the Danceland stage through the
          years is impressive to say the least.
        </div>
      </article>
      <div className="flex justify-center max-w-xs mx-auto">
        <Img
          fluid={data.music3.childImageSharp.fluid}
          style={{ width: "100%" }}
        />
      </div>
      <article className="message is-dark welcome-body">
        <div className="message-body">
          The “Big Band” years saw Duke Ellington, Glenn Miller, Count Basie,
          Tommy Dorsey with Frank Sinatra, Louis Armstrong, Woody Herman, Gene
          Krupa, Les Brown with Doris Day, Lawrence Welk, Sammy Kaye, Eddy
          Howard and Stan Kenton all stop by.
        </div>
      </article>
      <div className="flex justify-center max-w-xs mx-auto">
        <Img
          fluid={data.music2.childImageSharp.fluid}
          style={{ width: "100%" }}
        />
      </div>
      <article className="message is-dark welcome-body">
        <div className="message-body">
          The rock era started in 1955 with the booking of Bill Haley &amp; the
          Comets. Followed by Chuck Berry, Jerry Lee Lewis, Carl Perkins, Del
          Shannon, the Everly Brothers. Neil Sedaka, Bobby Darin, 4 Seasons,
          Gene Pitney, Dion &amp; the Belmonts, Roy Orbison, Brenda Lee, Jan
          &amp; Dean, The Ronettes, Beach Boys, The Animals, the Hollies, the
          Yardbirds and many more.
        </div>
      </article>
      <div className="flex justify-center max-w-xs mx-auto">
        <Img
          fluid={data.music3.childImageSharp.fluid}
          style={{ width: "100%" }}
        />
      </div>
      <article className="message is-dark welcome-body">
        <div className="message-body">
          Not to forget the great country stars that includes Bob Wills &amp;
          His Texas Playboys, Kitty Wells, Webb Pierce, Buck Owens, Hank
          Thompson, Porter Wagoner, Johnny Horton, Faron Young, Jim Reeves,
          Jimmy Dean, Roger Miller.
        </div>
      </article>
      <div className="flex justify-center max-w-xs mx-auto">
        <Img
          fluid={data.music4.childImageSharp.fluid}
          style={{ width: "100%" }}
        />
      </div>
      <article className="message is-dark welcome-closing">
        <div className="message-body">
          It’s all here - the national acts, the local talent, the hits, the
          misses – the memories. Check it out!
        </div>
      </article>
    </div>
  )
}
