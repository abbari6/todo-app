import { FaPen, FaTrash } from 'react-icons/fa'
const Tasks = ({ tasks , onDelete, onEdit}) => {
    return (
        <>
            <ul className="list-group">
              {
                    tasks.map((task) => (
                        <li key={task.id} className="list-group-item">{task.name} <span className="right"> <FaPen onClick={(id)=>onEdit(task)} color='gray' cursor='pointer' /> <FaTrash onClick={(id)=>onDelete(task.id)} color='red' cursor='pointer' /> </span> </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Tasks