import { List, Button, Popconfirm, Modal } from 'antd';
import { CloseCircleTwoTone } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from './toDoReducer';
import * as todoApi from '../api/todoApi';
import ToDoItemDetail from './ToDoItemDetail';
import { useState } from 'react';

const DoneGroup= (props) => {
    const dispatch = useDispatch();
    const [showDetail, setShowDetail] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);

    const handleToggle = (item) => {
      if(item.done) {
        setShowDetail(true);
        setSelectedTodo(item);
      }else{
        dispatch(toggleTodo(item.id));
      }
      };
      const handleCloseDetail = () => {
        setSelectedTodo(null);
        setShowDetail(false);
    };

      const handleDelete = (id) => {
        dispatch(deleteTodo(id));
      };
      
    return  (
        <div>
           {/* {showDetail ? (
                <ToDoItemDetail todoItem={props.todos} />
            ) : ( */}
            <List
                bordered
                dataSource={[props.todos]}
                renderItem={(item) => (
                    <List.Item style={{ textDecoration: item.done ? 'line-through' : 'none' }} todoItem={item} key={item.id} disabled={item.done} onClick={() => handleToggle(item)}>
                    <div onClick={() => handleToggle(item.done)} style={{ flex: 1, cursor: 'pointer' }}>
                    <span>{item.text}</span>
                    </div>
                  </List.Item>
                )} 
            /> 
            {/* )} */}
            <Modal
                title="Todo Item Detail"
                open={showDetail}
                onCancel={handleCloseDetail}
                footer={[
                    <Button key="back" onClick={handleCloseDetail}>
                        Go back
                    </Button>,
                ]}
            >
                <ToDoItemDetail todoItem={selectedTodo} />
            </Modal>
        </div>
    
    );
}

export default DoneGroup;