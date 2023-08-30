import { useDispatch } from "react-redux"
import * as todoApi from "../api/todoApi";
import { resetTodo } from "../components/toDoReducer";

export const useTodo = () => {
    const dispatch = useDispatch();

    async function loadTodos() {
        const response = await todoApi.getTodoTasks();
        dispatch(resetTodo(response.data));
      };

        const addTodo = async (todoListItems) => {
        await todoApi.addTodoTask(todoListItems);
        loadTodos();
      };

        const deleteTodo = async (id) => {
        await todoApi.deleteTodoTask(id);
        loadTodos();
      };

        const toggleTodo = async (id, done) => {
        await todoApi.updateTodoTask(id,{done});
        loadTodos();
      };

      return {loadTodos, addTodo, deleteTodo, toggleTodo };

    };
    
    
//       const updateTodo = async (id,todoListItems) => {
//         await todoApi.updateTodoTask(id, todoListItems);
//         loadTodos();
//       };
    
//       return { loadTodos, addTodo, toggleTodo, updateTodo, deleteTodo, };
// };

