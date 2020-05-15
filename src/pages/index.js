import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

export const heroQuery = graphql`
  {
    hero: file(relativePath: { eq: "Front_Wider.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    date1954: file(relativePath: { eq: "homeDates/1954.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    date1955: file(relativePath: { eq: "homeDates/1955.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    date1956: file(relativePath: { eq: "homeDates/1956.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    date1957: file(relativePath: { eq: "homeDates/1957.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    date1958: file(relativePath: { eq: "homeDates/1958.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    date1959: file(relativePath: { eq: "homeDates/1959.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    date1960: file(relativePath: { eq: "homeDates/1960.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    date1961: file(relativePath: { eq: "homeDates/1961.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    date1962: file(relativePath: { eq: "homeDates/1962.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    date1963: file(relativePath: { eq: "homeDates/1963.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    date1964: file(relativePath: { eq: "homeDates/1964.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    date1965: file(relativePath: { eq: "homeDates/1965.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    date1966: file(relativePath: { eq: "homeDates/1966.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    date1967: file(relativePath: { eq: "homeDates/1967.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    date1968: file(relativePath: { eq: "homeDates/1968.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex flex-col max-w-screen-xl mx-auto">
        <div className="w-full shadow-md">
          <BackgroundImage
            fluid={data.hero.childImageSharp.fluid}
            className="w-full"
            style={{
              height: "85vh",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute flex flex-col items-center border-4 border-white ml-12 mt-12 bg-black text-white px-12 py-6 leading-tight rounded-md">
              <h2 className="text-4xl">The History Of</h2>
              <h1 className="text-8xl">Danceland</h1>
              <h2 className="text-4xl">A Midwest Ballroom</h2>
              <p className="mt-6">By: Steve Wilson</p>
            </div>
          </BackgroundImage>
        </div>
        <div className="flex">
          <div className="flex flex-col w-1/2 p-6 text-xl">
            <p className="my-4">
              Welcome to the website that is dedicated to preserving the history
              of Danceland Ballroom in Cedar Rapids, Iowa. You can view the
              history from the grand opening in 1929 to it’s razing in 1968
              (urban renewal). The array of top acts that graced the Danceland
              stage through the years is impressive to say the least.
            </p>
            <p className="my-4">
              The “Big Band” years saw Duke Ellington, Glenn Miller, Count
              Basie, Tommy Dorsey with Frank Sinatra, Louis Armstrong, Woody
              Herman, Gene Krupa, Les Brown with Doris Day, Lawrence Welk, Sammy
              Kaye, Eddy Howard and Stan Kenton all stop by.
            </p>
            <p className="my-4">
              The rock era started in 1955 with the booking of Bill Haley &amp;
              the Comets. Followed by Chuck Berry, Jerry Lee Lewis, Carl
              Perkins, Del Shannon, the Everly Brothers. Neil Sedaka, Bobby
              Darin, 4 Seasons, Gene Pitney, Dion &amp; the Belmonts, Roy
              Orbison, Brenda Lee, Jan &amp; Dean, The Ronettes, Beach Boys, The
              Animals, the Hollies, the Yardbirds and many more.
            </p>
            <p className="my-4">
              Not to forget the great country stars that includes Bob Wills
              &amp; His Texas Playboys, Kitty Wells, Webb Pierce, Buck Owens,
              Hank Thompson, Porter Wagoner, Johnny Horton, Faron Young, Jim
              Reeves, Jimmy Dean, Roger Miller.
            </p>
            <p className="my-4">
              It’s all here - the national acts, the local talent, the hits, the
              misses – the memories.
            </p>
            <p className="my-4">Check it out!</p>
            <p className="mt-4">
              Special Thanks to Ann Duggan, Dennis Hertle, Tim Canfield, Dan
              Choiniere, Tate Preston, Kathy Wall
            </p>
          </div>
          <div className="flex justify-between w-1/2 p-6">
            <div className="flex flex-col w-1/2">
              <Link to="/1955">
                <Img
                  fluid={data.date1955.childImageSharp.fluid}
                  className="w-full transform hover:scale-105"
                />
              </Link>
              <Link to="/1956">
                <Img
                  fluid={data.date1956.childImageSharp.fluid}
                  className="w-full transform hover:scale-105"
                />
              </Link>
              <Link to="/1957">
                <Img
                  fluid={data.date1957.childImageSharp.fluid}
                  className="w-full transform hover:scale-105"
                />
              </Link>
              <Link to="/1958">
                <Img
                  fluid={data.date1958.childImageSharp.fluid}
                  className="w-full transform hover:scale-105"
                />
              </Link>
              <Link to="/1959">
                <Img
                  fluid={data.date1959.childImageSharp.fluid}
                  className="w-full transform hover:scale-105"
                />
              </Link>
              <Link to="/1960">
                <Img
                  fluid={data.date1960.childImageSharp.fluid}
                  className="w-full transform hover:scale-105"
                />
              </Link>
              <Link to="/1961">
                <Img
                  fluid={data.date1961.childImageSharp.fluid}
                  className="w-full transform hover:scale-105"
                />
              </Link>
            </div>
            <div className="flex flex-col w-1/2">
              <Link to="/1962">
                <Img
                  fluid={data.date1962.childImageSharp.fluid}
                  className="w-full transform hover:scale-105"
                />
              </Link>
              <Link to="/1963">
                <Img
                  fluid={data.date1963.childImageSharp.fluid}
                  className="w-full transform hover:scale-105"
                />
              </Link>
              <Link to="/1964">
                <Img
                  fluid={data.date1964.childImageSharp.fluid}
                  className="w-full transform hover:scale-105"
                />
              </Link>
              <Link to="/1965">
                <Img
                  fluid={data.date1965.childImageSharp.fluid}
                  className="w-full transform hover:scale-105"
                />
              </Link>
              <Link to="/1966">
                <Img
                  fluid={data.date1966.childImageSharp.fluid}
                  className="w-full transform hover:scale-105"
                />
              </Link>
              <Link to="/1967">
                <Img
                  fluid={data.date1967.childImageSharp.fluid}
                  className="w-full transform hover:scale-105"
                />
              </Link>
              <Link to="/1968">
                <Img
                  fluid={data.date1968.childImageSharp.fluid}
                  className="w-full transform hover:scale-105"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
