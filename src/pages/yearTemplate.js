import React from "react"
import Layout from "../components/layout"

const TestPage = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <p className="text-center">Year Summary Paragraph(s)</p>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
          molestias corrupti voluptas iusto magnam quibusdam alias in, dolores
          cupiditate necessitatibus earum cumque consectetur nesciunt expedita.
          Temporibus quae sequi, error labore illum delectus magnam, fuga
          ratione ducimus quo ad consectetur perferendis, incidunt aliquid?
          Necessitatibus corporis iste repudiandae distinctio reprehenderit
          sequi porro.
        </p>
        <div className="flex my-6" style={{ boxShadow: "2px 2px 10px #333" }}>
          <div className="w-1/2" style={{ minHeight: "25vh" }}>
            <div className="flex flex-col justify-center text-center h-full">
              <p className="">January 4 | Wednesday</p>
              <h2 className="text-3xl font-bold py-2">
                Variety Club Orchestra
              </h2>
              <p className="text-md">66¢ till 9 / 75¢ after + tax</p>
            </div>
          </div>
          <div className="w-1/2 grid grid-cols-2 gap-2">
            <div className="flex justify-center">
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div className="flex my-6" style={{ boxShadow: "2px 2px 10px #333" }}>
          <div className="w-1/2" style={{ minHeight: "25vh" }}>
            <div className="flex flex-col justify-center text-center h-full">
              <p className="">January 4 | Wednesday</p>
              <h2 className="text-3xl font-bold py-2">
                Variety Club Orchestra
              </h2>
              <p className="text-md">66¢ till 9 / 75¢ after + tax</p>
            </div>
          </div>
          <div className="w-1/2 grid grid-cols-2 gap-2 p-4">
            <div className="flex justify-center">
              <figure className="self-center">
                <img src="https://via.placeholder.com/800" alt="" />
                <figcaption className="text-center">
                  Image caption #1
                </figcaption>
              </figure>
            </div>
            <div className="flex justify-center">
              <img
                src="https://via.placeholder.com/500x250"
                className="self-center"
                alt=""
              />
            </div>
            <div className="flex justify-center">
              <img
                src="https://via.placeholder.com/275"
                className="self-center"
                alt=""
              />
            </div>
            <div className="flex justify-center">
              <img
                src="https://via.placeholder.com/180x330"
                className="self-center"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TestPage
