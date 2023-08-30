import { List, Button, Popconfirm, Modal, Input } from 'antd';
import { CloseCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, updateTodo, resetTodo } from './toDoReducer';
import * as todoApi from '../api/todoApi';
import { useState } from 'react';
import { useTodo } from '../hooks/useToDo';

const ToDoGroup= (props) => {
    const dispatch = useDispatch();
    const { deleteTodo, toggleTodo } = useTodo();
    const [showUpdate, setShowUpdate] = useState(false);
    const [updatingTodo, setUpdatingTodo] = useState(null);
    const [updatedText, setUpdatedText] = useState('');

    const handleToggle = async (id, done) => {
      await toggleTodo(id, done);
      };

      const handleDelete = async (id) => {
        await deleteTodo(id);
      };

      const handleUpdate = (id) => {
        dispatch(updateTodo({id, text: updatedText}));
        setShowUpdate(false);
      }

      const handleOpenUpdateModal = (todoItem) => {
        setUpdatingTodo(todoItem);
        setUpdatedText(todoItem.text);
        setShowUpdate(true);
    };

      const handleCloseUpdateModal = () => {
        setUpdatingTodo(null);
        setShowUpdate(false);
    };
      

    console.log("props.todoListItems in ToDoGroup:", props.todoListItems);
    return  (
      <div>
            <List
                bordered
                dataSource={props.todoListItems.todos}
                renderItem={(item) => (
                    <List.Item style={{ textDecoration: item.done ? 'line-through' : 'none' }}
                    todoItem={item}
                    key={item.id}
                    isDone={props.isDone} >
                        <div onClick={() => handleToggle(item.id, !item.done)} style={{ flex: 1, cursor: 'pointer' }}>
                            <span>{item.text}</span>
                            <span> </span>
                        </div>
                        <Button shape="circle" icon={< DeleteOutlined/>} onClick={() => handleOpenUpdateModal(item)}/>
                        <Popconfirm title="Are you sure to delete this todo?" onConfirm={() => handleDelete(item.id)} okText="Yes" cancelText="No">
                            <Button shape="circle" icon={<CloseCircleOutlined />} />
                        </Popconfirm>
                    </List.Item>
          )}
       />
        <Modal
    title="Update The Item"
    open={showUpdate}
    onCancel={handleCloseUpdateModal}
    footer={[
        <Button key="back" onClick={handleCloseUpdateModal}>
            Go back
        </Button>,
        <Button key="update" type="primary" onClick={() => handleUpdate(updatingTodo.id)}>
            Update
        </Button>,
    ]}
>
    <Input value={updatedText} onChange={(e) => setUpdatedText(e.target.value)} />
</Modal>

                        

        </div>
    );
}

export default ToDoGroup;