import * as React from "react";
import PageCmp from "../components/pageCmp";
import "./index.scss"
import * as Contentful from "contentful"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import Particles from "react-tsparticles";


const sideChil = (<>side bar child her</>)

class Index extends React.Component {
    constructor(props) {
        super(props);


        this.particlesInit = this.particlesInit.bind(this);
        this.particlesLoaded = this.particlesLoaded.bind(this);

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

    particlesInit(main) {
        console.log("main");
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        main.options = {
            background: {
              color: {
                value: "#0d47a1",
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }
      }

      particlesLoaded(container) {
        console.log("container");
        console.log(container);
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
