module.exports = {
    siteMetadata: {
        title: 'Site Title',
        author: 'Shubham Agrawal'
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `pages`,
              path: `${__dirname}/src/`,
            },
          },
          'gatsby-plugin-sharp',
          {
            resolve: 'gatsby-transformer-remark',
            options: {
              plugins: [
                'gatsby-remark-relative-images',
                {
                  resolve: 'gatsby-remark-images',
                  options: {
                    maxWidth: 750,
                    linkImagesToOriginal: false
                  }
                }
              ]
            }

          },
    ]
}