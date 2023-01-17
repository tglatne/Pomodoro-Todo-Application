import React, {Component} from "react";
import moment from "moment";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TodoDataService from "../../api/todo/TodoDataService"; 
import AuthenticationService from "./AuthenticationService";


class TodoComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id : this.props.params.id,
            description : '',
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
        
    }

    onSubmit(values){

        let username = AuthenticationService.getLoggedInUser()

        if(this.state.id === -1) {

            TodoDataService.createTodo(username, {
                id : this.state.id,
                description : values.description,
                targetDate : values.targetDate
            }).then(
                () => {
                    this.props.navigate('/todos')
                }
            )

        }else {

                TodoDataService.updateTodo(username, this.state.id, {
                    id : this.state.id,
                    description : values.description,
                    targetDate : values.targetDate
                }).then(
                    () => {
                        this.props.navigate('/todos')
                    }
                )
            }
        }

    componentDidMount() {

        if (this.state.id === -1) {
            return
        }
        let username = AuthenticationService.getLoggedInUser()
        TodoDataService.retrieveTodo(username, this.state.id)
        .then(response => this.setState ({
            description : response.data.description,
            targetDate : moment(response.data.targetDate).format('YYYY-MM-DD')
        }))
    }

    validate(values) {

        let errors = {}
        if(!values.description) {
            errors.description = 'Enter a desc'
        }else if(values.description.length<5){
            errors.description = 'Enter a atleast 5 chars desc'
        }

        if(!moment(values.targetDate).isValid()){
            errors.targetDate = 'enter targetdate'
        }
        return errors
    }
    render() {

        let {description, targetDate} = this.state
        //let targetdate = this.state.targetDate
        return (
            
                    <div> 
                        <h1>Todo</h1>
                        <div className="container">
                            <Formik
                                initialValues={{description : description, targetDate : targetDate}}
                                onSubmit = {this.onSubmit}
                                validateOnBlur = {false}
                                validateOnChange = {false}
                                validate = {this.validate}
                                enableReinitialize = {true}
                            >
                                {
                                    (props) => (
                                        <Form>
                                            <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                            <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
                                            <fieldset className="form-group">
                                                <label>Description</label>
                                                <Field className = "form-control" type="text" name = "description"></Field>
                                            </fieldset>
                                            <fieldset className="form-group">
                                                <label>Target Date</label>
                                                <Field className = "form-control" type="date" name="targetDate"></Field>
                                            </fieldset>
                                            <button type="submit" className="btn btn-success">Save</button>
                                        </Form>
                                    )
                                }
                            </Formik>
                        </div>    
                    
                    </div>
        )
    }
}

export default TodoComponent