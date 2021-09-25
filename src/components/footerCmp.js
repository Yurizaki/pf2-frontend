import * as React from "react";

class FooterCmp extends React.Component {
    constructor() {
        super()
        this.state = {
            latestCommit: ""
        }

        // fetch("/api/git-commit")
        // .then(res => res.json())
        // .then(result => {
        //     console.log(result)
        //     this.setState({
        //         latestCommit: result.latestCommit
        //     })
        // })
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


