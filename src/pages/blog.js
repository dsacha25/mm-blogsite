import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

// const MARKDOWN_QUERY = graphql`
//   query {
//     allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             title
//             date
//           }
//           excerpt
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// `

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  let { edges } = data.allContentfulBlogPost

  return (
    <Layout>
      <Head title="Blogs" />
      <h1>Blog</h1>

      <ol className={blogStyles.posts}>
        {edges.map(edge => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
                <p>{edge.node.slug}</p>
                {/* <small>{edge.node.excerpt}</small> */}
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
