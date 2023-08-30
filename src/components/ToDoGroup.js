import { List, Button, Popconfirm } from 'antd';
import { CloseCircleTwoTone } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../components/ToDoReducer';
import ToDoItem from './ToDoItem';

const ToDoGroup= (props) => {
    const dispatch = useDispatch();

    const handleToggle = (id) => {
      if(props.isDone) {
        console.log("go to the detail page");
      }else{
        dispatch(toggleTodo(id));
      }
      };

      const handleDelete = (id) => {
        dispatch(deleteTodo(id));
      };
      
      // const todoItems = props.isDone  
      // ? props.todoItems.filter((todoItem) => todoItem.done)
      // : props.todoItems;

    return  (
        <div>
            <List
                bordered
                dataSource={props.todoListItems}
                renderItem={(item) => (
                    <List.Item style={{ textDecoration: item.done ? 'line-through' : 'none' }} todoItem={item} key={item.id} isDone={props.isDone} >
                    <div onClick={() => handleToggle(item.id)} style={{ flex: 1, cursor: 'pointer' }}>
                      {item.text}
                    </div>
                    <Popconfirm title="Are you sure to delete this todo?" onConfirm={() => handleDelete(item.id)} okText="Yes" cancelText="No">
                      <Button type="primary" shape="circle" icon={<CloseCircleTwoTone />} />
                    </Popconfirm>
                  </List.Item>
                )} 
            /> 
        </div>
    
    );
}

export default ToDoGroup;