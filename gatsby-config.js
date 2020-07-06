module.exports = {
    siteMetadata: {
        title: `𓆉𓆉𓆉`,
        description: `at least 3 turtles`,
        author: `@iammatthias`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/turtle.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-styled-components`,
    ],
}
