import * as React from "react";


export default class SearchCmp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tag : ""
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		let newVal = event.target.value;

		if (newVal === "Search Tags") {
			newVal = ""
		}

		this.setState({
			tag: newVal
		});
	}

	handleSubmit() {
		this.props.onChange(this.state.tag);
	}



	render() {
		return (
			<div>
				<div class="field has-addons has-addons-centered">
					<p class="control">
						<span class="select">
							<select onChange={this.handleChange} ref={this.selectRef}>
								<option class="default-option">Search Tags</option>
								{this.props.tagData &&
									this.props.tagData.map((element) => (
										<option>{element.name}</option>
									))}
							</select>
						</span>
					</p>
					<p class="control">
						<a class="button is-primary" onClick={this.handleSubmit}>
							Submit
						</a>
					</p>
				</div>

				<hr />
			</div>
		);
	}
}
