import * as Contentful from "contentful"

export default function handler(req, res) {
    const contentfulConfig = {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID ||
            process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN ||
            process.env.CONTENTFUL_ACCESS_TOKEN,
      };

      console.log(contentfulConfig)

      const client = Contentful.createClient({
        // This is the space ID. A space is like a project folder in Contentful terms
        space: contentfulConfig.spaceId,
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: contentfulConfig.accessToken
      });

      client
        .getEntry("1Hh9WNn7OoHSSS1Mkx8zRv")
        .then(entry => {
            console.log(entry)
            res.status(200).json({ data: entry })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ err: err })
        });
}
