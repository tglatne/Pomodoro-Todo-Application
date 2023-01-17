import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import withNavigation from './WithNavigation';
import withParams from './WithPaams';

//import AuthenticationService from './AuthenticationService.js';

import AuthenticatedRoute from './AuthenticatedRoute';

import LoginComponent from './LoginComponent';

import TodosComponent from './TodosComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import WelcomeComponent from './WelcomeComponent';
import LogoutComponent from './LogoutComponent';

import TodoComponent from './TodoComponent';

class TodoApp extends Component {
    render() {

        const LoginComponentWithNavigation = withNavigation(LoginComponent)
        const WelcomeComponentWithParams = withParams(WelcomeComponent)
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent)
        const ListTodosComponentWithNavigation = withNavigation(TodosComponent)
        const TodoComponentWithParamsandNavigation = withParams(withNavigation(TodoComponent))
        return (
            <div className="TodoApp">
                <Router>
                    {/* <HeaderComponent/> */}
                    <HeaderComponentWithNavigation/>
                    <Routes>
                        <Route path  ="/" element = {<LoginComponentWithNavigation/>}/>
                        <Route path  ="/login" element = {<LoginComponentWithNavigation/>}/>
                        <Route path  ="/welcome/:name" element = {<AuthenticatedRoute><WelcomeComponentWithParams/></AuthenticatedRoute>}/>
                        <Route path = "/todos" element = {<AuthenticatedRoute><ListTodosComponentWithNavigation/></AuthenticatedRoute>}/>
                        <Route path = "/logout" element = {<AuthenticatedRoute><LogoutComponent/></AuthenticatedRoute>}/>
                        <Route path = "/todos/:id" element = {<AuthenticatedRoute><TodoComponentWithParamsandNavigation/></AuthenticatedRoute>}/>
                        <Route path = "*" element = {<ErrorComponent/>}/>
                    </Routes>
                    <FooterComponent/>
                </Router>

                {/* <LoginComponent/>
                <WelcomeComponent/> */}
            </div>
        )
    }
}

function ErrorComponent() {
    return (<div>An error occured!</div>)
}


function ShowFailed (props){
    if(props.hasLoginFailed){
        return <div>Failed</div>
    }
}

function ShowSuccess (props) {
    if(props.hasLoginSuccess){
        return <div>Login Successful</div>
    }
}

export default TodoApp;
