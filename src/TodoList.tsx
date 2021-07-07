import React from "react";
import  { TodoListItem } from './TodoListItem';

interface Props {
    todos: Todo[];
    toggleTodo: ToggleTodo;
    toggleRemove: ToggleRemove;
    toggleEdit: ToggleEdit;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo, toggleRemove, toggleEdit }) => {
    return (
        <ul>
            {todos.map(todo => (
                <TodoListItem key={todo.text} todo={todo} toogleTodo={toggleTodo} removeTodo={toggleRemove} editTodo={toggleEdit}/>
            ))}
        </ul>
    );
};