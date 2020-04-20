import React from "react"
import Layout from "../components/layout"

const Contact = () => {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex">
          <div className="flex w-1/2" style={{ border: "1px solid red" }}></div>
          <div className="flex w-1/2" style={{ border: "1px solid red" }}>
            <form action="" className="text-xl w-full">
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
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  className="border border-gray-400 p-2 rounded mx-2 my-2 w-full"
                ></textarea>
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className="m-2 p-2 bg-gray-400 border border-gray-600 roundeda"
                >
                  Submit
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
