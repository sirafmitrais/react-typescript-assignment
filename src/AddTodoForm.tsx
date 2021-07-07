import React, { useState } from "react";

interface Props{
    addTodo: AddTodo;
    nameLabel:string;
}

export const AddTodoForm: React.FC<Props>= ({ addTodo, nameLabel}) => {
    const [text, setText] = useState('');
    return (
        <form>
            <input 
            type="text"
            value={text}
            onChange={e => {
                setText(e.target.value);
            }}
            />
            <button 
            type="submit"
            onClick={e => {
                e.preventDefault();
                addTodo(text);
                setText('');
            }}
            >
                {nameLabel}
            </button>
        </form>
    );
};