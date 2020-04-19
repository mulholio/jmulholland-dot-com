import React from 'react'
import { graphql } from 'gatsby'
import { TextColumn, Layout } from '../components'

const Page = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { title } = frontmatter
  return (
    <Layout pageName={title}>
      <TextColumn>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </TextColumn>
    </Layout>
  )
}

export const query = graphql`
  query pageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default Page
