import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

export default () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  return (
    <div className="bg-black text-white py-4 mt-12 px-24">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <div className="flex w-full justify-around border-b border-white pb-4">
          <ul className="flex flex-col">
            <li>
              <h6 className="text-2xl text-gray-200">Navigate</h6>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Early Years</Link>
            </li>
            <li>
              <Link to="/">Danceland Bio</Link>
            </li>
            <li>
              <Link to="/">Posters</Link>
            </li>
            <li>
              <Link to="/">Danceland Bandstand</Link>
            </li>
            <li>
              <Link to="/">Darlowe Oleson</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
          <div className="flex flex-col">
            <h6 className="text-2xl text-gray-200">Search By Year</h6>
            <div className="flex justify-between">
              <ul>
                <li>
                  <Link to="/">1954</Link>
                </li>
                <li>
                  <Link to="/1955">1955</Link>
                </li>
                <li>
                  <Link to="/1956">1956</Link>
                </li>
                <li>
                  <Link to="/1957">1957</Link>
                </li>
                <li>
                  <Link to="/1958">1958</Link>
                </li>
                <li>
                  <Link to="/1959">1959</Link>
                </li>
                <li>
                  <Link to="/1960">1960</Link>
                </li>
                <li>
                  <Link to="/1961">1961</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="/">1962</Link>
                </li>
                <li>
                  <Link to="/1963">1963</Link>
                </li>
                <li>
                  <Link to="/1964">1964</Link>
                </li>
                <li>
                  <Link to="/1965">1965</Link>
                </li>
                <li>
                  <Link to="/1966">1966</Link>
                </li>
                <li>
                  <Link to="/1967">1967</Link>
                </li>
                <li>
                  <Link to="/1968">1968</Link>
                </li>
              </ul>
            </div>
          </div>
          <ul>
            <li>
              <h6 className="text-2xl text-gray-200">Legal</h6>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Terms &amp; Conditions</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-full items-center pt-4">
          <div className="flex justify-center py-2">
            <div className="border border-white rounded-full p-2 mr-1">
              <FaFacebook />
            </div>
            <div className="border border-white rounded-full p-2 mx-1">
              <FaTwitter />
            </div>
            <div className="border border-white rounded-full p-2 ml-1">
              <FaInstagram />
            </div>
          </div>
          <p>© {new Date().getFullYear()} Steve Wilson</p>
        </div>
      </div>
    </div>
  )
}
