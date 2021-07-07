import React from "react";

interface Todo {
    id: string;
    text: string;
    complete: boolean;
}

interface Props {
    todo: Todo;
    toogleTodo: ToggleTodo;
    removeTodo: ToggleRemove;
    editTodo: ToggleEdit;
}

export const TodoListItem: React.FC<Props> = ({todo, toogleTodo, removeTodo, editTodo}) => {
    return (
            <li>
                <label
                    style={{ textDecoration: todo.complete ? 'line-through' : undefined}}
                >
                    <input 
                        type="checkbox" 
                        checked={todo.complete}
                        onClick={() => {
                            toogleTodo(todo);
                        }}
                        />
                {todo.text}
                </label>
                <button onClick={() => {removeTodo(todo.id)}}>remove</button>
                <button onClick={() => {editTodo(todo.id) }}>edit</button>
            </li>
        );
};