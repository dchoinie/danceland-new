import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ModalImage from "react-modal-image"

export const postersQuery = graphql`
  {
    poster1: file(relativePath: { eq: "posters/1.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster2: file(relativePath: { eq: "posters/2.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster3: file(relativePath: { eq: "posters/3.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster4: file(relativePath: { eq: "posters/4.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster5: file(relativePath: { eq: "posters/5.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster6: file(relativePath: { eq: "posters/6.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster7: file(relativePath: { eq: "posters/7.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster8: file(relativePath: { eq: "posters/8.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster9: file(relativePath: { eq: "posters/9.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster10: file(relativePath: { eq: "posters/10.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster11: file(relativePath: { eq: "posters/11.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster12: file(relativePath: { eq: "posters/12.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster13: file(relativePath: { eq: "posters/13.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster14: file(relativePath: { eq: "posters/14.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster15: file(relativePath: { eq: "posters/15.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster16: file(relativePath: { eq: "posters/16.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster17: file(relativePath: { eq: "posters/17.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster18: file(relativePath: { eq: "posters/18.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster19: file(relativePath: { eq: "posters/19.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster20: file(relativePath: { eq: "posters/20.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster21: file(relativePath: { eq: "posters/21.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster22: file(relativePath: { eq: "posters/22.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster23: file(relativePath: { eq: "posters/23.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster24: file(relativePath: { eq: "posters/24.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster25: file(relativePath: { eq: "posters/25.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster26: file(relativePath: { eq: "posters/26.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster27: file(relativePath: { eq: "posters/27.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster28: file(relativePath: { eq: "posters/28.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster29: file(relativePath: { eq: "posters/29.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster30: file(relativePath: { eq: "posters/30.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster31: file(relativePath: { eq: "posters/31.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster32: file(relativePath: { eq: "posters/32.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster33: file(relativePath: { eq: "posters/33.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster34: file(relativePath: { eq: "posters/34.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster35: file(relativePath: { eq: "posters/35.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster36: file(relativePath: { eq: "posters/36.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster37: file(relativePath: { eq: "posters/37.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster38: file(relativePath: { eq: "posters/38.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster39: file(relativePath: { eq: "posters/39.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster40: file(relativePath: { eq: "posters/40.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster41: file(relativePath: { eq: "posters/41.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster42: file(relativePath: { eq: "posters/42.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster43: file(relativePath: { eq: "posters/43.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster44: file(relativePath: { eq: "posters/44.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster45: file(relativePath: { eq: "posters/45.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster46: file(relativePath: { eq: "posters/46.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster47: file(relativePath: { eq: "posters/47.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster48: file(relativePath: { eq: "posters/48.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster49: file(relativePath: { eq: "posters/49.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    poster50: file(relativePath: { eq: "posters/50.JPG" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
  }
`

export default ({ data }) => {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row my-12 px-6 lg:px-0">
          <div className="flex w-full lg:w-1/2 lg:pr-4">
            <h5 className="text-5xl self-center">
              THE ARTISTRY OF ANDY JENNINGS
            </h5>
          </div>
          <div className="flex w-full lg:w-1/2 lg:pl-4">
            <p className="self-center">
              At the entrance to the ballroom Danceland patrons were greeted by
              a poster that would announce upcoming or current shows. Poster is
              probably an under-statement. These were large 28” X 44”
              hand-painted one-of-a kind mini-masterpieces created by talented
              local artist Andy Jennings. The posters were on hard cardboard and
              rested on an easel right across from the box office. Very few of
              these exist today.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-1 lg:gap-2 px-6 lg:px-0 z-0">
          <div className="w-full">
            <ModalImage
              small={data.poster1.childImageSharp.fluid.src}
              large={data.poster1.childImageSharp.fluid.src}
              alt={data.poster1.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster2.childImageSharp.fluid.src}
              large={data.poster2.childImageSharp.fluid.src}
              alt={data.poster2.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster3.childImageSharp.fluid.src}
              large={data.poster3.childImageSharp.fluid.src}
              alt={data.poster3.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster4.childImageSharp.fluid.src}
              large={data.poster4.childImageSharp.fluid.src}
              alt={data.poster4.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster5.childImageSharp.fluid.src}
              large={data.poster5.childImageSharp.fluid.src}
              alt={data.poster5.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster6.childImageSharp.fluid.src}
              large={data.poster6.childImageSharp.fluid.src}
              alt={data.poster6.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster7.childImageSharp.fluid.src}
              large={data.poster7.childImageSharp.fluid.src}
              alt={data.poster7.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster8.childImageSharp.fluid.src}
              large={data.poster8.childImageSharp.fluid.src}
              alt={data.poster8.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster9.childImageSharp.fluid.src}
              large={data.poster9.childImageSharp.fluid.src}
              alt={data.poster9.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster10.childImageSharp.fluid.src}
              large={data.poster10.childImageSharp.fluid.src}
              alt={data.poster10.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster11.childImageSharp.fluid.src}
              large={data.poster11.childImageSharp.fluid.src}
              alt={data.poster11.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster12.childImageSharp.fluid.src}
              large={data.poster12.childImageSharp.fluid.src}
              alt={data.poster12.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster13.childImageSharp.fluid.src}
              large={data.poster13.childImageSharp.fluid.src}
              alt={data.poster13.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster14.childImageSharp.fluid.src}
              large={data.poster14.childImageSharp.fluid.src}
              alt={data.poster14.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster15.childImageSharp.fluid.src}
              large={data.poster15.childImageSharp.fluid.src}
              alt={data.poster15.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster16.childImageSharp.fluid.src}
              large={data.poster16.childImageSharp.fluid.src}
              alt={data.poster16.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster17.childImageSharp.fluid.src}
              large={data.poster17.childImageSharp.fluid.src}
              alt={data.poster17.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster18.childImageSharp.fluid.src}
              large={data.poster18.childImageSharp.fluid.src}
              alt={data.poster18.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster19.childImageSharp.fluid.src}
              large={data.poster19.childImageSharp.fluid.src}
              alt={data.poster19.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster20.childImageSharp.fluid.src}
              large={data.poster20.childImageSharp.fluid.src}
              alt={data.poster20.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster21.childImageSharp.fluid.src}
              large={data.poster21.childImageSharp.fluid.src}
              alt={data.poster21.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster22.childImageSharp.fluid.src}
              large={data.poster22.childImageSharp.fluid.src}
              alt={data.poster22.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster23.childImageSharp.fluid.src}
              large={data.poster23.childImageSharp.fluid.src}
              alt={data.poster23.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster24.childImageSharp.fluid.src}
              large={data.poster24.childImageSharp.fluid.src}
              alt={data.poster24.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster25.childImageSharp.fluid.src}
              large={data.poster25.childImageSharp.fluid.src}
              alt={data.poster25.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster26.childImageSharp.fluid.src}
              large={data.poster26.childImageSharp.fluid.src}
              alt={data.poster26.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster27.childImageSharp.fluid.src}
              large={data.poster27.childImageSharp.fluid.src}
              alt={data.poster27.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster28.childImageSharp.fluid.src}
              large={data.poster28.childImageSharp.fluid.src}
              alt={data.poster28.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster29.childImageSharp.fluid.src}
              large={data.poster29.childImageSharp.fluid.src}
              alt={data.poster29.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster30.childImageSharp.fluid.src}
              large={data.poster30.childImageSharp.fluid.src}
              alt={data.poster30.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster31.childImageSharp.fluid.src}
              large={data.poster31.childImageSharp.fluid.src}
              alt={data.poster31.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster32.childImageSharp.fluid.src}
              large={data.poster32.childImageSharp.fluid.src}
              alt={data.poster32.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster33.childImageSharp.fluid.src}
              large={data.poster33.childImageSharp.fluid.src}
              alt={data.poster33.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster34.childImageSharp.fluid.src}
              large={data.poster34.childImageSharp.fluid.src}
              alt={data.poster34.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster35.childImageSharp.fluid.src}
              large={data.poster35.childImageSharp.fluid.src}
              alt={data.poster35.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster36.childImageSharp.fluid.src}
              large={data.poster36.childImageSharp.fluid.src}
              alt={data.poster36.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster37.childImageSharp.fluid.src}
              large={data.poster37.childImageSharp.fluid.src}
              alt={data.poster37.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster38.childImageSharp.fluid.src}
              large={data.poster38.childImageSharp.fluid.src}
              alt={data.poster38.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster39.childImageSharp.fluid.src}
              large={data.poster39.childImageSharp.fluid.src}
              alt={data.poster39.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster40.childImageSharp.fluid.src}
              large={data.poster40.childImageSharp.fluid.src}
              alt={data.poster40.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster41.childImageSharp.fluid.src}
              large={data.poster41.childImageSharp.fluid.src}
              alt={data.poster41.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster42.childImageSharp.fluid.src}
              large={data.poster42.childImageSharp.fluid.src}
              alt={data.poster42.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster43.childImageSharp.fluid.src}
              large={data.poster43.childImageSharp.fluid.src}
              alt={data.poster43.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster44.childImageSharp.fluid.src}
              large={data.poster44.childImageSharp.fluid.src}
              alt={data.poster44.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster45.childImageSharp.fluid.src}
              large={data.poster45.childImageSharp.fluid.src}
              alt={data.poster45.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster46.childImageSharp.fluid.src}
              large={data.poster46.childImageSharp.fluid.src}
              alt={data.poster46.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster47.childImageSharp.fluid.src}
              large={data.poster47.childImageSharp.fluid.src}
              alt={data.poster47.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster48.childImageSharp.fluid.src}
              large={data.poster48.childImageSharp.fluid.src}
              alt={data.poster48.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster49.childImageSharp.fluid.src}
              large={data.poster49.childImageSharp.fluid.src}
              alt={data.poster49.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <ModalImage
              small={data.poster50.childImageSharp.fluid.src}
              large={data.poster50.childImageSharp.fluid.src}
              alt={data.poster50.name}
              hideDownload={true}
              hideZoom={true}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
