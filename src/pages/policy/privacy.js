import React from "react"
import Layout from "@components/templates/layout"
import SEO from "@components/seo"
import Breadcrumb from "@components/molecules/breadcrumb"
import PrivacyPolicy from "@components/organisms/privacy-policy"

const PrivacyPolicyPage = () => (
  <Layout>
    <SEO title="プライバシーポリシー" keywords={[`プライバシーポリシー`]} />
    <div className="bg-white container mx-auto">
      <div className="flex flex-col justify-center">
        <Breadcrumb breadcrumbs={[
          { to: '/', label: 'Home' },
          { to: `/policy/privacy`, label: 'プライバシーポリシー', active: true },
        ]}
        />
        <PrivacyPolicy />
      </div>
    </div>

  </Layout>
)

export default PrivacyPolicyPage