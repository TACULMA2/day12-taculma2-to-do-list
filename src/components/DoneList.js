import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ToDoGroup from './ToDoGroup';
import ToDoGenerator from './ToDoGenerator';
import * as todoApi from '../api/todoApi';
import { resetTodo } from './toDoReducer'; 
import DoneGroup from './DoneGroup';

const DoneList = (props) => {
    const todosList = useSelector((state) => state.todos);
    // const doneList = props.doneList ? props.doneList.filter(todos => todos.done) : [];
    const doneList = todosList.filter(todos => todos.done);
  
    return (
        <>
          <h1>Done List</h1>
          {doneList.map((todos) => (
                <DoneGroup todos={todos} key={todos.id} isDone={todos.isDone} />
            ))}
        </>
      );
  
};


export default DoneList;