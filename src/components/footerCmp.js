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
            <footer class="footer has-background-danger">
                <div class="content has-text-centered">
                    <p>
                        {this.state.latestCommit}
                    </p>
                </div>
            </footer>
        );
    }
}

export default FooterCmp;
