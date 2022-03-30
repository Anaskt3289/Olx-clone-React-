import React,{ useState ,useContext} from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import { firebaseContext } from '../../Store/Context';
import {useHistory} from 'react-router-dom'

function Login() {

const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const {firebase} = useContext(firebaseContext)
const history = useHistory()



const handleLogin = (e)=>{
  e.preventDefault()
 firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
   history.push('/')
 })
}

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required/>
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required/>
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>history.push('/signup')}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
