import * as React from "react";
import PageCmp from "../components/pageCmp";
import "./index.scss"
import * as Contentful from "contentful"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


const sideChil = (<>side bar child her</>)

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: ""
        };

        const contentfulConfig = {
            spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID ||
                process.env.CONTENTFUL_SPACE_ID,
            accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN ||
                process.env.CONTENTFUL_ACCESS_TOKEN,
          };

          const client = Contentful.createClient({
            // This is the space ID. A space is like a project folder in Contentful terms
            space: contentfulConfig.spaceId,
            // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
            accessToken: contentfulConfig.accessToken
          });

          client
            .getEntry("4a11vMhRrFA5Vzon1TeMeY")
            .then(entry => {
                console.log("entry")
                console.log(entry)
                const rawRichTextField = entry.fields.paragraph1;
                return documentToHtmlString(rawRichTextField);
            })
            .then(renderedHtml => {
                // do something with html, like write to a file
                console.log("renderedHtml");
                console.log(renderedHtml);
                document.getElementById('rich-text-body').innerHTML = renderedHtml;
              })
            .catch(err => {
                console.log(err)
            });


    }

    render() {
        console.log("this.state.result")
        console.log(this.state.result)
        let data = "";
        if(this.state.result) {
            data = this.state.result.data.fields.paragraph1;
        }
        return (

            <div>
                <PageCmp hasSidebar={true} pageTitle="Alex" sideChil={sideChil}>
                 <div id="rich-text-body" className="content"></div>
                </PageCmp>

            </div>
        )

    }
}
export default Index;
