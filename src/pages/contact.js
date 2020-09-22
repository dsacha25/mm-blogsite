import React from "react"

import Link from "gatsby-link"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>Find me on facebook.</p>

      <p>
        Need a developer? <a href="https://akton.blue/contact">Contact Me</a>
      </p>

      <Link to="/">Home</Link>
    </Layout>
  )
}

export default ContactPage
