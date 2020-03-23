import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Img from "gatsby-image"

export const postersQuery = graphql`
  {
    poster1: file(relativePath: { eq: "posters/1.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster2: file(relativePath: { eq: "posters/2.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster3: file(relativePath: { eq: "posters/3.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster4: file(relativePath: { eq: "posters/4.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster5: file(relativePath: { eq: "posters/5.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster6: file(relativePath: { eq: "posters/6.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster7: file(relativePath: { eq: "posters/7.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster8: file(relativePath: { eq: "posters/8.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster9: file(relativePath: { eq: "posters/9.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster10: file(relativePath: { eq: "posters/10.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster11: file(relativePath: { eq: "posters/11.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster12: file(relativePath: { eq: "posters/12.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster13: file(relativePath: { eq: "posters/13.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster14: file(relativePath: { eq: "posters/14.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster15: file(relativePath: { eq: "posters/15.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster16: file(relativePath: { eq: "posters/16.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster17: file(relativePath: { eq: "posters/17.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster18: file(relativePath: { eq: "posters/18.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster19: file(relativePath: { eq: "posters/19.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster20: file(relativePath: { eq: "posters/20.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster21: file(relativePath: { eq: "posters/21.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster22: file(relativePath: { eq: "posters/22.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster23: file(relativePath: { eq: "posters/23.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster24: file(relativePath: { eq: "posters/24.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster25: file(relativePath: { eq: "posters/25.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster26: file(relativePath: { eq: "posters/26.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster27: file(relativePath: { eq: "posters/27.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster28: file(relativePath: { eq: "posters/28.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster29: file(relativePath: { eq: "posters/29.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster30: file(relativePath: { eq: "posters/30.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster31: file(relativePath: { eq: "posters/31.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster32: file(relativePath: { eq: "posters/32.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster33: file(relativePath: { eq: "posters/33.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster34: file(relativePath: { eq: "posters/34.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster35: file(relativePath: { eq: "posters/35.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster36: file(relativePath: { eq: "posters/36.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster37: file(relativePath: { eq: "posters/37.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster38: file(relativePath: { eq: "posters/38.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster39: file(relativePath: { eq: "posters/39.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster40: file(relativePath: { eq: "posters/40.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster41: file(relativePath: { eq: "posters/41.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster42: file(relativePath: { eq: "posters/42.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster43: file(relativePath: { eq: "posters/43.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster44: file(relativePath: { eq: "posters/44.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster45: file(relativePath: { eq: "posters/45.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster46: file(relativePath: { eq: "posters/46.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster47: file(relativePath: { eq: "posters/47.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster48: file(relativePath: { eq: "posters/48.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster49: file(relativePath: { eq: "posters/49.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    poster50: file(relativePath: { eq: "posters/50.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ({ data }) => {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto grid grid-cols-5 gap-2">
        <Img
          className="my-4"
          fluid={data.poster1.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster2.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster3.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster4.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster5.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster6.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster7.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster8.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster9.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster10.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster11.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster12.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster13.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster14.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster15.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster16.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster17.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster18.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster19.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster20.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster21.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster22.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster23.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster24.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster25.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster26.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster27.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster28.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster29.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster30.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster31.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster32.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster33.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster34.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster35.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster36.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster37.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster38.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster39.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster40.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster41.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster42.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster43.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster44.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster45.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster46.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster47.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster48.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster49.childImageSharp.fluid}
          style={{ width: "100%" }}
        />

        <Img
          className="my-4"
          fluid={data.poster50.childImageSharp.fluid}
          style={{ width: "100%" }}
        />
      </div>
    </Layout>
  )
}
