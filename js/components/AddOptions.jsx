import React from 'react';
import '../../css/index.css';

export default class AddOptions extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleChangeOption = this.handleChangeOption.bind(this);
	}
	handleAddOption(e) {
		this.props.handleAddOptions(this.state.input);
	}

	handleChangeOption(e) {
		this.setState({input: e.target.value});	
	}

	render() {
		return (
			<div className="main-content-bar">
				<input type="text" className="form-main-bar-text" placeholder="Enter a new task" onChange={this.handleChangeOption}/>
				<button type="button" className="form-main-bar-button" onClick={this.handleAddOption}>+</button>
			</div>
		);
	}
}
