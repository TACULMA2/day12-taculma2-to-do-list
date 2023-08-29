import { List, Typography, Button } from 'antd';
import { CloseCircleTwoTone } from '@ant-design/icons';
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
                    <div style={{ flex: 1 }}>{item.text}</div>
                    <Button type="primary" shape="circle" icon={<CloseCircleTwoTone/>} />
                </List.Item>
                )}
            />          
        </div>

    );
}

export default ToDoGroup;