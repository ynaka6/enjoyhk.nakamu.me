import React from "react"
import Layout from "@components/templates/layout"
import SEO from "@components/seo"
import Breadcrumb from "@components/molecules/breadcrumb"
import MadeWith from "@components/organisms/made-with"

const MadeWithPage = ({ data }) => (
  <Layout>
    <SEO title="Made with" keywords={[`gatsby`, `react`, `tailwindcss`]} />
    <div className="bg-white container mx-auto">
      <div className="flex flex-col justify-center">
        <Breadcrumb breadcrumbs={[
          { to: '/', label: 'Home' },
          { to: `/made-with`, label: 'Made with', active: true },
        ]}
        />
        <MadeWith />
      </div>
    </div>
  </Layout>
)

export default MadeWithPage

