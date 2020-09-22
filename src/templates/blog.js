import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import templateStyles from "./template.module.scss"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/head"

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       frontmatter {
//         title
//         date
//         author
//       }
//       html
//       fields {
//         slug
//       }
//     }
//   }
// `

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = ({ data }) => {
  console.log("Props: ", data)

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url

        return <img alt={alt} src={url} />
      },
    },
  }

  let { title, publishedDate, body } = data.contentfulBlogPost

  return (
    <Layout>
      <Head title={title} />
      <h1>{title}</h1>
      <small>Date: {publishedDate}</small>
      <hr />
      {documentToReactComponents(body.json, options)}
      <div>
        <p>{/* Author: <strong>{frontmatter.author}</strong> */}</p>
      </div>
      <div className={templateStyles.button}>
        <Link to="/blog">{"< "}Back</Link>
      </div>
    </Layout>
  )
}

export default Blog
