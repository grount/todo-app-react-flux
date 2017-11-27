import React from 'react';
import Option from './Option.jsx';
import '../../css/index.css';


export default class Options extends React.Component {
	constructor(props) {
		super(props);
		this.id = 0;
	}

	render() {
		this.id = 0;
		return (
			<div id="main-content">
				{this.props.entries.map((entry) => 
					<Option 
						key={this.id} 
						optionText={entry.option}
						id={this.id++}
						handleToggleSelectedOptions={this.props.handleToggleSelectedOptions}
						checked={entry.isSelected}
						handleDoneOption={this.props.handleDoneOption}
						handleDeleteOption={this.props.handleDeleteOption}
						isDone={this.props.isDone}
					/>)}
			</div>
		);
	}
}

