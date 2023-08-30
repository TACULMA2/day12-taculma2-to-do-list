import { List, Button, Popconfirm, Modal } from 'antd';
import { CloseCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, updateTodo } from '../components/ToDoReducer';
import * as todoApi from '../api/todoApi';
import { useState } from 'react';

const ToDoGroup= (props) => {
    const dispatch = useDispatch();
    const [showDetail, setShowDetail] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);

    const handleToggle = (id) => {
      if(props.isDone) {
        console.log("go to the detail page");
      }else{
        // async
        // await todoApi.getTodoTasks(props.id, {done: !props.task.done});
        // const response = todoApi.getTodoTasks();
        // dispatch(updateTodoTask(response.data));
        dispatch(toggleTodo(id));
      }
      };

      const handleDelete = (id) => {
        dispatch(deleteTodo(id));
      };

      const handleUpdate = (id) => {
        dispatch(updateTodo(id));
      }

      const handleCloseDetail = () => {
        setSelectedTodo(null);
        setShowDetail(false);
    };
      
    return  (
      <div>
            <List
                bordered
                dataSource={props.todoListItems}
                renderItem={(item) => (
                    <List.Item style={{ textDecoration: item.done ? 'line-through' : 'none' }} todoItem={item} key={item.id} isDone={props.isDone}>
                        <div onClick={() => handleToggle(item.id)} style={{ flex: 1, cursor: 'pointer' }}>
                            <span>{item.text}</span>
                        </div>
                        <Button shape="circle" icon={< DeleteOutlined/>} />
                        <Modal>
                        title= "Update The Item"
                        visible={showDetail}
                        onCancel={handleCloseDetail}
                        <Button key="update" onClick={handleCloseDetail}>
                        Update
                        </Button>,
                        <Button key="back" onClick={handleCloseDetail}>
                        Go back
                        </Button>,
                        </Modal>

                        <Popconfirm title="Are you sure to delete this todo?" onConfirm={() => handleDelete(item.id)} okText="Yes" cancelText="No">
                            <Button shape="circle" icon={<CloseCircleOutlined />} />
                        </Popconfirm>
                    </List.Item>
                )}
            />
        </div>
    );
}

export default ToDoGroup;