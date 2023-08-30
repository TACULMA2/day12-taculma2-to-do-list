import React from 'react';
import { useSelector } from 'react-redux';
import ToDoGroup from './ToDoGroup';
import ToDoGenerator from './ToDoGenerator';

const TodoList = (props) => {
    const todosList = useSelector((state) => state.todos);
    const doneList = todosList.filter(todo => todo.done);

  return (
    <>
      <h1>Todo List</h1>
      <ToDoGroup todoListItems={props.isDone ? doneList : todosList} />
      {!props.isDone && <ToDoGenerator />}
    </>
  );
};


export default TodoList;