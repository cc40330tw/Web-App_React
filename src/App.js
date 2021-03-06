import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import {useSpring, animated} from 'react-spring';

function App() {
  const [registrationFormStatus, setRegistrationFormStatus]=useState(false);
  const loginProps = useSpring({
    /*left: registrationFormStatus ? -430 : 0,
    opacity: registrationFormStatus ? 0 : 1*/
    left: registrationFormStatus ? -500 : 0
  })
  const registerProps = useSpring({
    /*left: registrationFormStatus ? 0 : 430,
    opacity: registrationFormStatus ? 1 : 0*/
    left: registrationFormStatus ? 0 : 500
  })

  const loginBtnProps = useSpring({borderBottom: registrationFormStatus ? 'solid 2px #201c1cbe' : 'solid 0px transparent'})
  const registerBtnProps = useSpring({borderBottom: registrationFormStatus ? 'solid 0px transparent' : 'solid 2px #201c1cbe'})
  

  function registerClicked() {alert('register clicked'); setRegistrationFormStatus(true)}
  function loginClicked() {alert('login clicked'); setRegistrationFormStatus(false)}
  

  return (
  <div className="login-register-wrapper">
    <div className="nav-buttons">
      <animated.button onClick={loginClicked} id="loginBtn" style={loginBtnProps}>Login</animated.button>
      <animated.button onClick={registerClicked} id="registerBtn" style={registerBtnProps}>Register</animated.button>
    </div>
    
    <div className="form-group">
      <animated.form action='' id='loginform' style={loginProps}><LoginForm/></animated.form>
      <animated.form action='' id='registerform' style={registerProps}><RegisterForm/></animated.form>
    </div>
    
    <animated.div className="forgot-panel" style={loginProps}><a href='#'>Forgot your password</a></animated.div>
  </div>
  );
}

function LoginForm() {
  return(
    <React.Fragment>
      <label for='username'>USERNAME</label>
      <input type='text' id='username' />
      <label for='password'>PASSWORD</label>
      <input type='text' id='password' />
      <input type='submit' value='submit' className='submit' />
    </React.Fragment>
  )
}
function RegisterForm() {
  return(
    <React.Fragment>
      <label for='fullname'>full name</label>
      <input type='text' id='fullname'/>
      <label for='email'>email</label>
      <input type='text' id='email'/>
      <label for='password'>password</label>
      <input type='text' id='password'/>
      <label for='confirmpassword'>confirm password</label>
      <input type='text' id='confirmpassword'/>
      <input type='submit' value='submit' className='submit'/>
    </React.Fragment>
  )
} 
export default App;
