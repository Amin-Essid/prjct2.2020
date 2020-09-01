import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 className='error-msg'>404</h1>
    <h1 className="error-msg">هذه الصفحة غير موجودة</h1>
  </Layout>
)

export default NotFoundPage
