import React from 'react';
import '../../css/index.css';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.handleMouseDown = this.handleMouseDown.bind(this);
		this.handleMouseUp = this.handleMouseUp.bind(this);
	}

	handleMouseDown(e) {
		e.target.className = 'nav-button active';
	}

	handleMouseUp(e) {
		e.target.className = 'nav-button';
	}

	render() {
		return (
			<nav className="nav-bar">
				<p id="logo">Todo-Application</p>
				<button 
					type="button"
					className="nav-button"
					id="clear-button"
					onClick={this.props.handleClearAllOption}
					onMouseDown={this.handleMouseDown}
					onMouseUp={this.handleMouseUp}>
					Clear All
				</button>

				<button 
					type="button"
					className="nav-button" 
					id="clear-selected-button" 
					onClick={this.props.handleClearSelectedOptions}
					onMouseDown={this.handleMouseDown}
					onMouseUp={this.handleMouseUp}>
					Clear Selected 
				</button>
			</nav>
		);
	}
}
