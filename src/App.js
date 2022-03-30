import React,{useContext,useEffect} from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost'
import {authContext,firebaseContext} from './Store/Context'
import Post from './Store/postsContext'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {

  const {setUser} = useContext(authContext)
  const {firebase} = useContext(firebaseContext)

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })

  return (
    <BrowserRouter>
    <div>

      <Post>


    <Route exact path='/'>
      <Home />
     </Route>

     <Route exact path='/signup'>
       <Signup/>
     </Route>

     <Route exact path='/login'>
       <Login/>
     </Route>

     <Route exact path='/create'>
       <Create/>
     </Route>

     <Route exact path='/viewProduct'>
       <ViewPost/>
     </Route>


      </Post>
      

    </div>
    </BrowserRouter>
  );
}

export default App;
