import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ToDoItemDetail = ({todoItem}) => {
    // const todosList = useSelector((state) => state.todos);
    // const { id } = useParams();

    // const todoItem = todosList.find(item => item.id === id);
    if (!todoItem) {
        return <div>No item selected</div>;
    }
    return(
        <div className = "todo-detail">
            <div>{todoItem.id}</div>
            <div>{todoItem.text}</div>
        </div>
    )

}

export default ToDoItemDetail;