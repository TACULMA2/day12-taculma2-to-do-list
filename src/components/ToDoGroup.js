import { List, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../components/ToDoReducer';

const ToDoGroup= (props) => {
    const dispatch = useDispatch();

    const handleToggle = (id) => {
        dispatch(toggleTodo(id));
      };

    return (
        <div>
            <List
                bordered
                dataSource={props.todoListItems}
                renderItem={(item) => (
                <List.Item onClick={() => handleToggle(item.id)} style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
                <Typography.Text mark>{item.done ? 'done' : 'not done'}</Typography.Text> {item.text}
                </List.Item>
                )}
            />          
        </div>

    );
}

export default ToDoGroup;