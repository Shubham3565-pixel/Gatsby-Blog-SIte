import React from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

import '../assets/css/blog.css'

const BlogPage = () => {

    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `)

    return (
        <Layout>
            <h1>Blog</h1>
            {/* <p>Posts will show up here later on.</p> */}
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                          <Link to ={`/blog/${edge.node.fields.slug}`}>
                            <div className="blog-list">
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p style={{fontStyle:"italic"}}>{edge.node.frontmatter.date}</p>
                            </div>
                          </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage