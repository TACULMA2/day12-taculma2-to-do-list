import api from "./api";
export const getTodoTasks = () => {
    return api.get('/todos');
}

export const updateTodoTask = (id, todoTask) => {
    return api.put('/todos/${id}', todoTask);
}