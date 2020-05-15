import React from "react"
import Layout from "../components/layout"
import { FaAngleRight } from "react-icons/fa"

const Contact = () => {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex">
          <div className="flex flex-col w-1/2 px-6">
            <h2 className="text-5xl">Contact</h2>
            <p className="my-4 text-lg">
              Thanks for visiting the Danceland website. My mission is to
              accurately document the history of this legendary venue.
            </p>
            <p className="mt-4 text-lg">
              Any additions, corrections or comments are welcome. Feel free to
              contact us.
            </p>
          </div>
          <div className="flex w-1/2">
            <form action="" className="text-xl w-full text-gray-600">
              <div className="flex">
                <label htmlFor="first" className="hidden">
                  First
                </label>
                <input
                  type="text"
                  name="first"
                  id="first"
                  placeholder="First Name"
                  className="border border-gray-400 p-2 rounded mx-2 my-2 w-1/2"
                  required
                />
                <label htmlFor="last" className="hidden">
                  Last
                </label>
                <input
                  type="text"
                  name="last"
                  id="last"
                  placeholder="Last Name"
                  className="border border-gray-400 p-2 rounded mx-2 my-2 w-1/2"
                  required
                />
              </div>
              <div className="flex">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="border border-gray-400 p-2 rounded mx-2 my-2 w-1/2"
                  required
                />
                <label htmlFor="phone" className="hidden">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  className="border border-gray-400 p-2 rounded mx-2 my-2 w-1/2"
                />
              </div>
              <div className="flex">
                <label
                  htmlFor="fileUpload"
                  id="fileUpload"
                  name="fileUpload"
                  className="hidden"
                ></label>
                <input
                  type="file"
                  name="fileUpload"
                  id="fileUpload"
                  className="p-2"
                />
              </div>
              <div className="flex">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  className="border border-gray-400 p-2 rounded mx-2 my-2 w-full"
                  required
                ></textarea>
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className="m-2 p-2 bg-gray-400 rounded-md text-gray-800 flex hover:bg-gray-500"
                >
                  Submit <FaAngleRight className="self-center ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
