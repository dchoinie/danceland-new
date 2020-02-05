import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"

export default () => {
  return (
    <Layout>
      <PageTitle title="Danceland Bandstand" />
      <div className="mx-56">
        <p>
          In December 1957 Danceland’s Darlowe Olsen created a local television
          dance program that was modeled/patterned after Dick Clark’s American
          Bandstand. He called it Danceland Bandstand, natch. The dances were
          held on Sunday afternoons from 2-5 PM and telecast over KCRG-TV from
          3-4. Local KCRG radio disc jockeys &#40;Dave Etzel, Jim Young, Jim
          Jensen&#41; served as the host/emcee. The dances were for ages 13-18.
          Dress-up rules applied and parents were always welcome. It ran for two
          seasons. Both seasons featured a combination of records hops, local
          live music and an occasional national act. Sometimes a national act
          would play Saturday night and hold over for the Sunday slot.
        </p>
      </div>
    </Layout>
  )
}
