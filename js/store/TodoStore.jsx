import { EventEmitter } from "events";
import dispatcher from '../dispatcher/AppDispatcher.jsx';
class TodoStore extends EventEmitter {
	constructor(props){
		super(props);

		this.entries =  [{
			option: 'sparta what is your proffesion',
			isSelected: false,
			isDone: false,
		}]
	}
	createTodo(option) {
		const id = Date.now();
		this.entries.push({
			option,
			isSelected: false,
			isDone: false
		});

		this.emit('change');
	}

	deleteTodo(id) {
		this.entries.splice(id, 1);
		this.emit('change');
	}

	clearTodo(){
		this.entries.length = 0;
		this.emit('change');
	}

	toggleDoneState(id) {
		this.entries[id].isDone = !this.entries[id].isDone;
		this.emit('change');
	}

	toggleSelectedState(id) {
		this.entries[id].isSelected = !this.entries[id].isSelected;
		this.emit('change');
	}

	clearSelectedTodo() {
		if (this.entries) {
			this.entries.forEach((element, i) => {
				if (element.isSelected) {
					this.entries.splice(i, 1);
				}
			});
		this.emit('change');
		}
	}

	getAll() {
		return this.entries;
	}

	handleActions(action) {
		switch(action.type) {
			case "CREATE_TODO":
				this.createTodo(action.option);
				break;

			case "DELETE_TODO": 
				this.deleteTodo(action.id);
				break;
			
			case "CLEAR_TODO":
				this.clearTodo();
				break;
			case "TOGGLE_DONE_STATE":
				this.toggleDoneState(action.id);
				break;
			case "TOGGLE_SELECTED_STATE":
				this.toggleSelectedState(action.id);
				break;
			case "CLEAR_SELECTED_TODO":
				this.clearSelectedTodo();
				break;
		}
	}
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
export default todoStore;
