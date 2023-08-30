import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ToDoGroup from './ToDoGroup';
import ToDoGenerator from './ToDoGenerator';
import * as todoApi from '../api/todoApi';
import { resetTodo } from './toDoReducer'; 
import { useTodo } from '../hooks/useToDo';

const TodoList = (props) => {
  const {loadTodos} = useTodo();
    const todosList = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {

      loadTodos();
  
    }, []);
    console.log("todosList in TodoList:", todosList);
  
    return (
      <>
      <h1>Todo List</h1>
      <ToDoGroup todoListItems={todosList} />
          <ToDoGenerator />
    </>
    );
};


export default TodoList;