import React from "react"
import Layout from "@components/templates/layout"
import SEO from "@components/seo"
import Breadcrumb from "@components/molecules/breadcrumb"
import Contact from "@components/organisms/contact"

const ContactPage = () => (
  <Layout>
    <SEO title="問い合わせ" keywords={[`問い合わせ`]} />
    <div className="bg-white container mx-auto">
      <div className="flex flex-col justify-center">
        <Breadcrumb breadcrumbs={[
          { to: '/', label: 'Home' },
          { to: `/contact`, label: '問い合わせ', active: true },
        ]}
        />
        <Contact />
      </div>
    </div>

  </Layout>
)

export default ContactPage