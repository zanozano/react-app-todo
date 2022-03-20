import React, { useState } from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const initialTodos = [
    {
        id: 1,
        title: 'Todo #1',
        description: 'Descripcion Todo #1',
        completed: false,
    },
    {
        id: 2,
        title: 'Todo #2',
        description: 'Descripcion Todo #2',
        completed: true,
    },
];


const App = () => {

    const [todos, setTodos] = useState(initialTodos);

    const [todoEdit, setTodoEdit] = useState(null);



    // delete
    const todoDelete = (todoId) => {
        const changedTodos = todos.filter(todo => todo.id !== todoId)
        setTodos(changedTodos)

    }

    // complete primera forma
    const todoToggleCompleted = (todoId) => {

        // const changedTodos = todos.map(todo => {

        //     const todoEdit = {
        //         ...todo,
        //         completed: !todo.completed
        //     }
        //     if (todo.id === todoId) {
        //         return todoEdit
        //     }
        //     else {
        //         return todo
        //     }

        // })

        // complete segunda forma
        // const changedTodos = todos.map(todo => (
        //     todo.id === todoId
        //         ? { ...todo, completed: !todo.completed }
        //         : todo
        // ))

        // complete tercera forma
        const changedTodos = todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)

        setTodos(changedTodos)
    }

    //agregar todo

    const todoAdd = (todo) => {

        const newTodo = {
            id: Date.now(),
            ...todo,
            completed: false
        }

        const changedTodos = [
            newTodo,
            ...todos,
        ]

        setTodos(changedTodos)
    }

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-8'>
                    <TodoList
                        todos={todos}
                        todoDelete={todoDelete}
                        todoToggleCompleted={todoToggleCompleted}
                        setTodoEdit={setTodoEdit}
                    />
                </div>
                {/*  */}
                <div className='col-4'>
                    <TodoForm
                        todoAdd={todoAdd}
                        todoEdit={todoEdit}
                    />
                </div>
            </div>
        </div>
    )
}

export default App