import { List, Button, Popconfirm } from 'antd';
import { CloseCircleTwoTone } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../components/ToDoReducer';

const ToDoGroup= (props) => {
    const dispatch = useDispatch();

    const handleToggle = (id) => {
        dispatch(toggleTodo(id));
      };

      const handleDelete = (id) => {
        dispatch(deleteTodo(id));
      };

    return (
        <div>
            <List
                bordered
                dataSource={props.todoListItems}
                renderItem={(item) => (
                <List.Item onClick={() => handleToggle(item.id)} style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
                    <div style={{ flex: 1 }}>{item.text}</div>
                    <Popconfirm title="Are you sure to delete this todo?" onConfirm={() => handleDelete(item.id)} okText="Yes" cancelText="No">
                    <Button type="primary" shape="circle" icon={<CloseCircleTwoTone/>} />
                    </Popconfirm>
                </List.Item>
                )}
            />          
        </div>

    );
}

export default ToDoGroup;