import React from 'react';
import '../../css/index.css';


export default class Option extends React.Component {
	get_current_date() {
		const today = new Date();
		let dd = today.getDate();
		let mm = today.getMonth() + 1; //January is 0!
		const yyyy = today.getFullYear();

		if (dd < 10) {
			dd = '0' + dd;
		}
		if (mm < 10) {
			mm = '0' + mm;
		}

		return dd + '/' + mm + '/' + yyyy;
	}

	render() {
		const option_id = 'checkbox-' + this.props.id;
		const isDone = this.props.isDone(this.props.id);
		return(
			<div className="task-entry">
				<input 
					type="checkbox" 
					name="checkbox-entry" 
					id={option_id} 
					defaultChecked={this.props.checked} 
					className='checkbox'
					onChange={() => this.props.handleToggleSelectedOptions(this.props.id)}
				/>
				<label htmlFor={option_id} 
					className={`${isDone ? 'stroked' : ''}`}>
					{this.props.optionText}
				</label>
				<p className="date">{this.get_current_date()}</p> 
				<input type="button" className="done-button" value="+" onClick={() => this.props.handleDoneOption(this.props.id)}/>
				<input type="button" className="delete-button" value="-" onClick={() => this.props.handleDeleteOption(this.props.id)}/>
			</div>
		);
	}
}

