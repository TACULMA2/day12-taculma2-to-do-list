import api from "./api";
export const getTodoTasks = () => {
    return api.get('/todos');
}

export const updateTodoTask = (id, todoTask) => {
    return api.put(`/todos/${id}`, todoTask);
}

export const deleteTodoTask = (id) => {
    return api.delete(`/todos/${id}`);
}

export const addTodoTask = (todoList) => {
    return api.post('/todos', todoList);
}