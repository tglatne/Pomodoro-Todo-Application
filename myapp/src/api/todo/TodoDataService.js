import axios from "axios"

class TodoDataService {
    retrieveAllTodos(name) {
        //console.log("executed");
        return axios.get(`http://localhost:8080/jpa/users/${name}/todos`)
    }

    retrieveTodo(name, id) {
        //console.log("executed");
        return axios.get(`http://localhost:8080/jpa/users/${name}/todos/${id}`)
    }

    deleteTodo(name, id) {
        //console.log("executed");
        return axios.delete(`http://localhost:8080/jpa/users/${name}/todos/${id}`)
    }

    updateTodo(name, id, todo) {
        //console.log("executed");
        return axios.put(`http://localhost:8080/jpa/users/${name}/todos/${id}`, todo)
    }

    createTodo(name, todo) {
        //console.log("executed");
        return axios.post(`http://localhost:8080/jpa/users/${name}/todos`, todo)
    }
}

export default new TodoDataService()