import React, { Component } from "react";
import axios from "axios";

class ResourceList extends Component {
	constructor(props) {
		super(props);
		this.state = { resources: [] };
	}

	async componentDidMount() {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/${this.props.resource}`
		);

		this.setState({ resources: response.data });
	}

	async componentDidUpdate(prevProps) {
		if (prevProps.resource !== this.props.resource) {
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/${this.props.resource}`
			);

			this.setState({ resources: response.data });
		}
	}

	render() {
		return (
			<ul>
				{this.state.resources.map(record => (
					<li key={record.id}>{record.title}</li>
				))}
			</ul>
		);
	}
}

export default ResourceList;
