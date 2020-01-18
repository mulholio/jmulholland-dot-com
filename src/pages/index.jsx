import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import BlogCard from '../components/BlogCard'
import CardsContainer from '../components/styles/CardsContainer'
import { format } from 'date-fns'

const BlogCardsContainer = styled.div`
  .readMore {
    font-weight: ${props => props.theme.semiBold};
    color: ${props => props.theme.n300};
    margin-top: ${props => props.theme.s4};
  }

  .readMore:hover {
    color: ${props => props.theme.n400};
  }
`

const Index = ({ data, location }) => (
  <Layout pathname={location.pathname}>
    <p>
      I'm a software engineer living in London where I spend most of
      my time building things at{' '}
      <a href='https://www.memrise.com/'>Memrise</a> and&nbsp;
      <a href='https://github.com/mulholio'>
        for other random projects
      </a>
      .
    </p>
    <p>
      Outside of code, I'm into{' '}
      <Link to='/thoughts#philosophy'>philosophy</Link> (my previous
      primary subject matter), systems-thinking,&nbsp;
      <Link to='/thoughts#design'>design,</Link>
      <Link to='/thoughts#meta-learning-and-productivity'>
        {' '}
        personal development
      </Link>{' '}
      and the future. If you're interested in finding out more about
      me then head to <Link to='/thoughts'>/thoughts</Link>.
    </p>
    <p>
      I view this blog as a vehicle for meeting interesting people so,
      if there is anything here you find interesting,&nbsp;
      <a href='https://twitter.com/mulholio'>DM me</a> or let me buy
      you a coffee if you're in London.
    </p>
    <p>
      If you would like to find me elsewhere on the internet I'm on
      <a href='https://twitter.com/mulholio'>Twitter</a>,&nbsp;
      <a href='https://github.com/mulholio'>GitHub</a>, and email
      (james at thissite.com).
    </p>
    <BlogCardsContainer>
      <h4>Articles</h4>
      <CardsContainer>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogCard
            key={node.fields.slug}
            link={node.fields.slug}
            title={node.frontmatter.title}
            detail={format(
              new Date(node.frontmatter.date),
              'do MMM yyyy'
            )}
          />
        ))}
      </CardsContainer>
    </BlogCardsContainer>
  </Layout>
)

export const query = graphql`
  query recentBlogQuery {
    allMarkdownRemark(
      filter: { frontmatter: { type: { ne: "page" } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default Index
