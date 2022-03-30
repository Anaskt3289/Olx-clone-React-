import React,{useContext} from 'react';
import {useHistory} from 'react-router-dom'
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import {authContext,firebaseContext} from '../../Store/Context'
function Header() {

  const {user} = useContext(authContext)
  const {firebase} = useContext(firebaseContext)
  const history = useHistory()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName" onClick={()=>{history.push('/')}}>
          <OlxLogo ></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="language">
          <span>{user ? `Welcome ${user.displayName}` : 'Login'} </span>
         
        </div>
       
       {user && <span onClick={()=>{
         firebase.auth().signOut().then(()=>{
           history.push('/login')
         })
       }} className='logout'>Logout</span>}
        <div className="sellMenu" onClick={()=>history.push('/create')}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
