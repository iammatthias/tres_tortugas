module.exports = {
    siteMetadata: {
        title: `𓆉𓆉𓆉`,
        description: `do it for the sea turtles`,
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
                name: `𓆉𓆉𓆉`,
                short_name: `𓆉𓆉𓆉`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/turtle.png`,
            },
        },
        `gatsby-plugin-styled-components`,
    ],
}
