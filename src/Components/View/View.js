import React,{useState,useContext,useEffect} from 'react';
import {firebaseContext} from '../../Store/Context'
import {PostContext} from '../../Store/postsContext'

import './View.css';
function View() {

const [userDetails , setUserDetails] = useState('')
const {firebase} = useContext(firebaseContext)
const {postDetails} = useContext(PostContext)
const productDetails = JSON.parse(localStorage.getItem('productDetails'))

useEffect(()=>{
const {userId} = productDetails
firebase.firestore().collection('users').where("id","==",userId).get().then((res)=>{

res.forEach(element => {
  setUserDetails(element.data())
})

}).catch((err)=>{
  alert(err.message)
})

},[])


  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={productDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {productDetails.price} </p>
          <span>{productDetails.product}</span>
          <p>{productDetails.category}</p>
          <span>{productDetails.createdAt}</span>
        </div>
        {userDetails &&
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>
         }
      </div>
    </div>
  );
}
export default View;
