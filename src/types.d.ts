interface Todo {
    id: string;
    text: string;
    complete: boolean;
}

interface EditFlag {
    editFlag: boolean;
    editId: string;
}

type ToggleTodo = (selectedTodo: Todo) => void;
type ToggleRemove = (id: string) => void;
type ToggleEdit = (id: string) => void;
type AddTodo = (text: string) => void;