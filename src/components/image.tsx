import { graphql, useStaticQuery } from 'gatsby'
// tslint:disable-next-line: match-default-export-name
import Img from 'gatsby-image'
import React from 'react'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

// tslint:disable-next-line: typedef
const Image = () => {
    // tslint:disable-next-line: no-void-expression
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image
