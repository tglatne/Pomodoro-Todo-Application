import axios from "axios";
import TodoApp from "../../components/todo/TodoApp";


class HelloWorldService {
    executeHelloWorldService() {
        //console.log("executed");
        return axios.get('http://localhost:8080/hello-world')
    }

    executeHelloWorldBeanService() {
        //console.log("executed");
        return axios.get('http://localhost:8080/hello-world-bean')
    }

    executeHelloWorldBeanPathService(name) {

        let username = 'TodoApp'
        let password = 'dummy'

        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password);
        //console.log("executed");
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`, {headers: {Authorization : basicAuthHeader}})
    }
}

export default new HelloWorldService()