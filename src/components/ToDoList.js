import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ToDoGroup from './ToDoGroup';
import ToDoGenerator from './ToDoGenerator';
import * as todoApi from '../api/todoApi';
import { resetTodo } from './ToDoReducer'; 

const TodoList = (props) => {
    const todosList = useSelector((state) => state.todos);
    const doneList = todosList.filter(todo => todo.done);
    const dispatch = useDispatch();

  //   useEffect(() => {
  //     async function fetchData() {
  //       todoApi.getTodoTasks().then( response => 
  //       dispatch(resetTodo(response.data)));
  //     }
  //     fetchData();
  // }, []);
  
    return (
      <>
      <h1>Todo List</h1>
      <ToDoGroup todoListItems={props.isDone ? doneList : todosList} />
          <ToDoGenerator />
    </>
    );
};


export default TodoList;