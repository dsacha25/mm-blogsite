import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  let { author } = data.site.siteMetadata

  return (
    <footer className={footerStyles.footer}>
      <hr />
      <p>Created by {author}, © 2020</p>
    </footer>
  )
}

export default Footer

// Alt + 0 1 6 9 = ©
