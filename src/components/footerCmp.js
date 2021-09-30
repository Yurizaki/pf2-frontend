import * as React from "react";

class FooterCmp extends React.Component {
    constructor() {
        super()
        this.state = {
            latestCommit: ""
        }

    }

    render() {
        return (
            <footer className="footer pb-6">
                <div className="content has-text-centered">
                    <p>
                        Built on React w/Gatsby.
                        With Contentful CMS integration.
                        Stylised with Bulma.
                        Hosted on Gatsby Cloud.
                    </p>
                </div>
            </footer>
        );
    }
}

export default FooterCmp;
