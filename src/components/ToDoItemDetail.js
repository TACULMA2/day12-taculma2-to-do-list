import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ToDoItemDetail = () => {
    const todoTask =  useSelector(state => state.todo.tasks.find(task =>task.id === id));
    const { id } = useParams();

    return(
        <div className = "todo-detail">
            <h1>Todo Item Detail</h1>
            <div>{todoTask?.id}</div>
            <div>{todoTask?.text}</div>
        </div>
    )

}

export default ToDoItemDetail;