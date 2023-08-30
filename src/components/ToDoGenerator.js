import { useState } from "react";
import { Button, Input, Space, message } from 'antd';
import { useDispatch } from "react-redux";
import { addTodo } from '../components/ToDoReducer';
import { v4 as uuidv4} from 'uuid';
import '../ToDoGenerator.css';


const ToDoGenerator = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");
    
    const addTodoItem = () => {
        if (inputValue.trim() !== "") {
            dispatch(addTodo({text: inputValue, id: uuidv4(), done: false}));
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

    return (
        <div>
            <Space.Compact>
                <Input value={inputValue} onChange={event => setInputValue(event.target.value)} onKeyDown={handleKeyDown}/>
                <Button onClick={addTodoItem} type="primary">Add</Button>
            </Space.Compact>
        </div>
    );
}

export default ToDoGenerator;