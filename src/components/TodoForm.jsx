import { useState, useEffect } from "react"

const initialFormValues = {
    title: '',
    description: ''
}

const TodoForm = ({ todoAdd, todoEdit }) => {

    const [formValues, setFormValues] = useState(initialFormValues)
    const { title, description } = formValues

    const [error, setError] = useState(null)

    const [successMessage, setsuccessMessage] = useState(null)


    //edit form
    useEffect(() => {
        if (todoEdit) {
            setFormValues(todoEdit)
        }

    }, [todoEdit])



    const handleInputChange = (e) => {

        const changedFormValues = {
            ...formValues,
            [e.target.name]: e.target.value
        }

        setFormValues(changedFormValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (title.trim() === '') {
            setError('Debes colocar un titulo')
            setsuccessMessage(null)
            return;
        }

        if (description.trim() === '') {
            setError('Debes colocar un descripcion')
            setsuccessMessage(null)
            return;
        }

        //Agregar tarea
        todoAdd(formValues)
        setFormValues(initialFormValues)
        setsuccessMessage('Agregado con exito')

        setTimeout(() => {
            setsuccessMessage(null);
        }, 2000);

        setError(null)
    }

    return (
        <div>
            <h1>Nueva tarea</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Titulo"
                    className="form-control"
                    value={title}
                    name="title"
                    onChange={handleInputChange}
                />
                <textarea
                    placeholder="Descripcion"
                    className="form-control mt-2"
                    value={description}
                    name="description"
                    onChange={handleInputChange}
                >

                </textarea>
                <button
                    className="btn btn-primary btn-block mt-2"
                >
                    Agregar tarea
                </button>
            </form>
            {
                error &&
                (
                    <div className="alert alert-danger mt-2">
                        {error}
                    </div>
                )
            }
            {
                successMessage &&
                (
                    <div className="alert alert-success mt-2">
                        {successMessage}
                    </div>
                )
            }
        </div>
    )
}

export default TodoForm
