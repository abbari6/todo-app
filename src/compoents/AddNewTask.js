import { useEffect } from "react";

const AddNewTask = ({ addTask, input, setInput, editTask, setEditTask, tasks, setTask }) => {
    useEffect(() => {
        if (editTask) {
            setInput(editTask.name);
        } else {
            setInput('');
        }
    }, [setInput, editTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!editTask) {
            if (!input) {
                alert('Please enter the value.');
                return
            }
            addTask({ name: input });
            setInput('');
        } else {
            if (!input) {
                alert('Please enter the value.');
                return
            }
            updateTask(input, editTask.id)
        }

    }

    const updateTask = (name, id) => {
        const newTask = tasks.map((task) =>
            task.id === id ? { id, name } : task
        );
        setTask(newTask);
        setEditTask('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Enter your task</label>
                <input type="text" className="form-control" id="name" placeholder="Buy me a coffee" value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
            <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary mb-3 btn-sm">Submit</button>
            </div>
        </form>
    )
}

export default AddNewTask