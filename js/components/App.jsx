import React from 'react';
import '../../css/index.css';
import Header from './Header.jsx';
import AddOptions from './AddOptions.jsx';
import Options from './Options.jsx';
import Dispatcher from '../dispatcher/AppDispatcher.jsx';
import * as TodoActions from '../actions/TodoActions.jsx';
import TodoStore from '../store/TodoStore.jsx';

export default class App extends React.Component {
	constructor(props) {
		console.log(Dispatcher);
		super(props);
		this.state = {
			entries: TodoStore.getAll(),
		};
	}

	componentWillMount() {
		TodoStore.on('change', () => {
			this.setState({
				enteries: TodoStore.getAll(),
			})
		})	
	}

	createTodo(option) {
		TodoActions.createTodo(option);
	}

	deleteTodo(id) {
		TodoActions.deleteTodo(id);
	}

	clearTodo() {
		TodoActions.clearTodo();
	}

	toggleSelectedState(id) {
		TodoActions.toggleSelectedState(id);
	}

	toggleDoneState(id) {
		TodoActions.toggleDoneState(id);
	}

	getDoneState(index) {
		return this.state.entries[index].isDone;
	}

	clearSelectedTodo() {
		TodoActions.clearSelectedTodo();
	}

	render(){
		return (
			<div>
				<Header 
					handleClearAllOption={this.clearTodo.bind(this)}
					handleClearSelectedOptions={this.clearSelectedTodo.bind(this)}
				/>
				<AddOptions handleAddOptions={this.createTodo.bind(this)}/>
				<Options 
					entries={this.state.entries}
					handleToggleSelectedOptions={this.toggleSelectedState.bind(this)}
					handleDoneOption={this.toggleDoneState.bind(this)}
					isDone={this.getDoneState.bind(this)}
					handleDeleteOption={this.deleteTodo.bind(this)}
				/>
			</div>
		);
	}
}

