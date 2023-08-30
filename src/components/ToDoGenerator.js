import { useState } from "react";
import { Button, Input, Space, message } from 'antd';
import { useDispatch } from "react-redux";
import { addTodo } from './toDoReducer';
import { v4 as uuidv4} from 'uuid';
import '../ToDoGenerator.css';
import { useTodo } from "../hooks/useToDo";


const ToDoGenerator = () => {
    const { addTodo } = useTodo();
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");
    
    const addTodoItem = async () => {
        if (inputValue.trim() !== "") {
            await addTodo({text: inputValue, id: uuidv4(), done: false});
            setInputValue("");
        } else {
            message.error("Blank is not accepted. Please input a proper value.");
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addTodoItem();
        }
    }
    console.log("props.todoListItems in ToDoGenerator:", inputValue);
    return (
        <div>
            <Space.Compact>
                <Input value={inputValue} onChange={event => setInputValue(event.target.value)} onKeyDown={handleKeyDown}/>
                <Button onClick={addTodoItem} >Add</Button>
            </Space.Compact>
        </div>
    );
}

export default ToDoGenerator;