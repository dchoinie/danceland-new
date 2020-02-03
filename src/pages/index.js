import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Welcome from "../components/welcome"
import RecordSpinner from "../components/recordSpinnerSelectors"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Welcome />
    <div>
      <h2 className="has-text-centered text-4xl py-12">Search By Year</h2>
      <div id="record-spinner-container" className="mx-56">
        <RecordSpinner year="1954" to="/1954" />
        <RecordSpinner year="1955" to="/1954" />
        <RecordSpinner year="1956" to="/1954" />
        <RecordSpinner year="1957" to="/1954" />
        <RecordSpinner year="1958" to="/1954" />
        <RecordSpinner year="1959" to="/1954" />
        <RecordSpinner year="1960" to="/1954" />
        <RecordSpinner year="1961" to="/1954" />
        <RecordSpinner year="1962" to="/1954" />
        <RecordSpinner year="1963" to="/1954" />
        <RecordSpinner year="1964" to="/1954" />
        <RecordSpinner year="1965" to="/1954" />
        <RecordSpinner year="1966" to="/1954" />
        <RecordSpinner year="1967" to="/1954" />
        <RecordSpinner year="1968" to="/1954" />
      </div>
    </div>
  </Layout>
)

export default IndexPage
