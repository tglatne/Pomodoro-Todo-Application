import React, {Component} from "react";
import AuthenticationService from "./AuthenticationService";

class LoginComponent extends Component {

    constructor (props) {
        super(props)

        this.state = {
            username : 'TodoApp',
            password : '',
            LoginFailed : false,
            LoginSuccess : false,
        }

        // this.HandleUsernameChange = this.HandleUsernameChange.bind(this)
        // this.HandlePasswordChange = this.HandlePasswordChange.bind(this)

        this.HandleChange = this.HandleChange.bind(this)
        this.LoginAuth = this.LoginAuth.bind(this)
    }

    HandleChange (event) {

        this.setState(
            {
                [event.target.name] : event.target.value
            }
        )
    }

    LoginAuth () {
        //TodoApp, dummy

        if(this.state.username === 'TodoApp' && this.state.password === 'dummy'){

            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)

            this.props.navigate(`/welcome/${this.state.username}`)
            this.setState({LoginSuccess : true})
            this.setState({LoginFailed : false})
        }
        else{
            this.setState({LoginFailed : true})
            this.setState({LoginSuccess : false})
        }
    }
    // HandleUsernameChange (event) {
    //     console.log(event.target.value)

    //     this.setState (
    //         {
    //             username : event.target.value
    //         }
    //     )
    // }

    // HandlePasswordChange (event) {
    //     console.log(event.target.value)
    //     this.setState(
    //         {
    //             password : event.target.value
    //         }
    //     )
    // }

    render () {
        return (
            <div> 
                <h1>Login</h1>
                <div className='container'>
                    {/* <div>Login Successful</div> */}
                    {/* <ShowSuccess hasLoginSuccess = {this.state.LoginSuccess}/> */}
                    {this.state.LoginSuccess && <div>Login Successful</div>}
                    {/* <ShowFailed hasLoginFailed = {this.state.LoginFailed}/> */}
                    {this.state.LoginFailed && <div className='alert alert-warning'>Failed</div>}
                    {/* <div>Login Failed</div> */}
                    UserName : <input type='text' name='username' value = {this.state.username} onChange={this.HandleChange}/>
                    Password : <input type="password" name="password" value = {this.state.password} onChange={this.HandleChange }/>
                    <button className='btn btn' onClick={this.LoginAuth}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent