import React from "react"
import RecordSpinner from "../components/recordSpinner"

const RecordSpinners = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 lg:px-0">
      <div className="flex justify-center">
        <h2 className="text-5xl">Search By Year</h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 lg:gap-6">
        <RecordSpinner year="1954" to="/1954" />
        <RecordSpinner year="1955" to="/1955" />
        <RecordSpinner year="1956" to="/1956" />
        <RecordSpinner year="1957" to="/1957" />
        <RecordSpinner year="1958" to="/1958" />
        <RecordSpinner year="1959" to="/1959" />
        <RecordSpinner year="1960" to="/1960" />
        <RecordSpinner year="1961" to="/1961" />
        <RecordSpinner year="1962" to="/1962" />
        <RecordSpinner year="1963" to="/1963" />
        <RecordSpinner year="1964" to="/1964" />
        <RecordSpinner year="1965" to="/1965" />
        <RecordSpinner year="1966" to="/1966" />
        <RecordSpinner year="1967" to="/1967" />
        <RecordSpinner year="1968" to="/1968" />
      </div>
    </div>
  )
}

export default RecordSpinners
