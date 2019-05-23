const path = require('path')

module.exports = {
  siteMetadata: {
    title: `EnjoyHK`,
    description: `香港移住を自由に楽しく共有していくブログ`,
    author: `@nakanakamu0828`,
    siteUrl: process.env.SITE_URL
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        icon: `contents/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    // Add after these plugins if used
    // { 
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: true, // Print removed selectors and processed file names
    //     // develop: true, // Enable while using `gatsby develop`
    //     tailwind: true, // Enable tailwindcss support
    //     // whitelist: ['whitelist'], // Don't remove this selector
    //     // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
    //     // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
    //   }
    // },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-feed`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/contents/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/contents/jsons`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow, noopener, noreferrer"
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: false,
              className: `custom-class`,
              maintainCase: false,
            },
          },
          {
            resolve: 'gatsby-remark-toc',
            options: {
              header: '目次', // the custom header text
              include: [
                'contents/**/*.md' // an include glob to match against
              ],
              mdastUtilTocOptions: {
                maxDepth: 3
              }
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          `gatsby-remark-component`,
          `gatsby-remark-responsive-iframe`
        ],
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@": path.resolve(__dirname),
          "@components": path.resolve(__dirname, 'src/components'),
          "@contents": path.resolve(__dirname, 'contents')
        },
        extensions: []
      }
    },
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: [
          "IFRAMELY_API_KEY",
          "GOOGLE_ANALYTICS_TRACKING_ID",
          "SITE_URL"
        ]
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID
      }
    },
  ],
}
