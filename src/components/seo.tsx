/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

interface Props {
    description: string;
    lang: string;
    meta: any;
    title: string;
}

// tslint:disable-next-line: typedef
function SEO({ description, lang, meta, title }: Props) {
    const { site } = useStaticQuery(
        // tslint:disable-next-line: no-void-expression
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: 'description',
                    // tslint:disable-next-line: object-literal-sort-keys
                    content: metaDescription
                },
                {
                    property: 'og:title',
                    // tslint:disable-next-line: object-literal-sort-keys
                    content: title
                },
                {
                    property: 'og:description',
                    // tslint:disable-next-line: object-literal-sort-keys
                    content: metaDescription
                },
                {
                    property: 'og:type',
                    // tslint:disable-next-line: object-literal-sort-keys
                    content: 'website'
                },
                {
                    name: 'twitter:card',
                    // tslint:disable-next-line: object-literal-sort-keys
                    content: 'summary'
                },
                {
                    name: 'twitter:creator',
                    // tslint:disable-next-line: object-literal-sort-keys
                    content: site.siteMetadata.author
                },
                {
                    name: 'twitter:title',
                    // tslint:disable-next-line: object-literal-sort-keys
                    content: title
                },
                {
                    name: 'twitter:description',
                    // tslint:disable-next-line: object-literal-sort-keys
                    content: metaDescription
                }
            ].concat(meta)}
        />
    );
}

SEO.defaultProps = {
    lang: 'en',
    meta: [],
    // tslint:disable-next-line: object-literal-sort-keys
    description: ''
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired
};

export default SEO;
