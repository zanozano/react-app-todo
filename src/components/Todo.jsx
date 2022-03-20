const Todo = ({ todo, todoDelete, todoToggleCompleted, setTodoEdit }) => {

    const { title, description } = todo

    return (
        <div className="card mt-2">
            <div className="card-body">
                <h3 className="card-title text-end">
                    {title}
                    <button
                        onClick={() => todoToggleCompleted(todo.id)}
                        className={`ms-2 btn btn-sm ${todo.completed ? 'btn-success' : 'btn-outline-success'}`}
                    >
                        {todo.completed ? 'Terminado' : 'Pendiente'}
                    </button>
                </h3>
                <p className="card-text text-end">
                    {description}
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => setTodoEdit(todo)}
                    >
                        Editar
                    </button>
                    <button
                        onClick={() => todoDelete(todo.id)}
                        className="btn btn-sm btn-outline-danger"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Todo
