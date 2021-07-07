import React, { useState } from 'react';

import './App.css';
// import { TodoListItem} from './TodoListItem';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';
const initialTodos: Todo[] = [
  {
    id: "1290390312adslds",
    text: "walk the dog", 
    complete: false,
  },
  {
    id: "1290390312adsl132",
    text: "write app",
    complete: true,
  },
];

const initialEdit: EditFlag = {
  editFlag: false,
  editId: ""
}

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [edit, setEdit] = useState(initialEdit);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo){
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    if(edit.editFlag){
      const newTodos = todos.map(todo => {
        if (todo.id === edit.editId) {
          return {
            ...todo,
            text: text,
          };
        }
        return todo;
      });
      setTodos(newTodos);
      setEdit(initialEdit);
    }
    else{
      let date = Date.now();
      let id: string = date.toString() + "asd";
      console.log(id);
      const newTodo = { id: id, text, complete: false };
      setTodos([...todos, newTodo]);
    }
  };

  const removeTodo: ToggleRemove = (id: string) => {
    let newArray = todos.filter(function(todo){
      return todo.id !== id
    });
    setTodos(newArray);
  };

  const editTodo: ToggleEdit = (id: string) => {
    let edit = {editFlag : true, editId: id};
    setEdit(edit);
  }

  const coretKabeh = () => {
    const newTodos = todos.map(todo => {
      if (todo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }
  
  let nameLabel:string;
  if(edit.editFlag){
    nameLabel = "edit todo";
  }else{
    nameLabel = "add todo";
  }

  return (
    <div>
      <h1>Hello World</h1>
        <TodoList todos={todos} toggleTodo={toggleTodo} toggleRemove={removeTodo} toggleEdit={editTodo}/>
        <AddTodoForm addTodo={addTodo} nameLabel={nameLabel}/>
        <button onClick={() => {coretKabeh()}}>Mari Kabeh</button>
    </div>
  );
}

export default App;
