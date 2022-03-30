import React, { Fragment, useState ,useContext} from 'react';
import './Create.css';
import Header from '../Header/Header';
import {authContext,firebaseContext} from '../../Store/Context'
import {useHistory} from 'react-router-dom'

const Create = () => {

const [product , setProduct] = useState('');
const [category , setCategory] = useState('');
const [price , setPrice] = useState('');
const [image , setImage] = useState(null);

const {firebase} = useContext(firebaseContext);
const {user} = useContext(authContext)
const date = new Date()
const history = useHistory()

const addProduct = ()=>{

  firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
    ref.getDownloadURL().then((url)=>{
      firebase.firestore().collection('products').add({
        product,
        category,
        price,
        url,
        userId : user.uid,
        createdAt : date.toDateString()
      }).then(()=>{
        history.push('/')
      })
    }).catch((err)=>{
      alert(err.messsage)
    })
  })

}

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
       
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={product}
              onChange={(e)=>setProduct(e.target.value)}
              required/>
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              required/>
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            required/>
            <br />
         
          <br />
          <img alt="Posts" width="200px" height="200px"
           src={image ? URL.createObjectURL(image) : '' }></img>
        
            <br />
            <input type="file"  onChange={(e)=>setImage(e.target.files[0])} />
            <br />
            <button className="uploadBtn" onClick={addProduct}>upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
