class AuthenticationService {

    registerSuccessfulLogin(username, password){
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout(){
        console.log('logged out')
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')

        if(user === null){
            return false
        }
        else {
            return true
        }
    }

    getLoggedInUser() {
        let user = sessionStorage.getItem('authenticatedUser')

        if(user === null){
            return ''
        }
        else {
            return user
        }
    }
}

export default new AuthenticationService()