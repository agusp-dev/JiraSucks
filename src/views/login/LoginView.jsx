import React from 'react'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from '../../utils/firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig)

class LoginView extends React.Component {

  onSignIn = () => {
    console.log('on sign in')
  }

  onSignOut = () => {
    console.log('on sign out')
  }

  
  render() {
    const { user, signOut, signInWithGoogle } = this.props
    console.log('LoginView render', user, signOut, signInWithGoogle)
    
    return (
      <div>

        {
          user 
            ? <div>
                <p>Hello, {user.displayName}</p>
                <button onClick={this.onSignOut}>Sign Out</button>
              </div> 
            
            : <div>
                <p>Please, Sign In with Google</p>
                <button onClick={signInWithGoogle}>Sign In</button>
              </div>
        }
        
      </div>
    )
  }
}

const firebaseAppAuth = firebaseApp.auth()
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider() 
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(LoginView)