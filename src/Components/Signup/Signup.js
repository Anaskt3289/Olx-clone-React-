import React,{ useState, useContext } from 'react';
import Logo from '../../olx-logo.png';
import { firebaseContext } from '../../Store/Context';
import './Signup.css';
import {useHistory} from 'react-router-dom'

export default function Signup() {

  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [mobile,setMobile] = useState('');
  const [password,setPassword] = useState('');
  const {firebase} = useContext(firebaseContext)
  const history = useHistory()

  const handleSubmit = (e)=>{
     e.preventDefault()


    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      console.log("helloo");
      console.log(result);
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:mobile
        }).then(()=>{
          history.push('/login')
        })
      })

    })
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            value={username}
            type="text"
            id="fname"
            name="name"
            onChange={(e)=>setUsername(e.target.value)}
          required/>
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={email}
            type="email"
            id="fname"
            name="email"
            onChange={(e)=>setEmail(e.target.value)}
            required/>
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            value={mobile}
            type="number"
            id="lname"
            name="phone"
            onChange={(e)=>setMobile(e.target.value)}
            required/>
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            value={password}
            type="password"
            id="lname"
            name="password"
            onChange={(e)=>setPassword(e.target.value)}
            required/>
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={()=>history.push('/login')}>Login</a>
      </div>
    </div>
  );
}
