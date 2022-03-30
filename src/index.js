import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from './Firebase/Config'
import Context,{firebaseContext} from './Store/Context'

ReactDOM.render(

<firebaseContext.Provider value={{firebase}}>
<Context>

<App />
</Context>
</firebaseContext.Provider>
    
, document.getElementById('root'));
