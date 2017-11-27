"use strict";

import dispatcher from '../dispatcher/AppDispatcher.jsx';

export function createTodo(option) {
	dispatcher.dispatch({
		type: "CREATE_TODO",
		option,
	});
}

export function deleteTodo(id) {
	dispatcher.dispatch({
		type: "DELETE_TODO",
		id
	});
}

export function clearTodo() {
	dispatcher.dispatch({
		type: "CLEAR_TODO",
	});
}

export function toggleDoneState(id) {
	dispatcher.dispatch({
		type: "TOGGLE_DONE_STATE",
		id
	});
}

export function toggleSelectedState(id) {
	dispatcher.dispatch({
		type: "TOGGLE_SELECTED_STATE",
		id
	});
}

export function clearSelectedTodo(){
	dispatcher.dispatch({
		type: "CLEAR_SELECTED_TODO"
	});
}
