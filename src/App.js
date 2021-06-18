import React from 'react'
import UserauthComponent from './Components/userAuthComponents/UserAuthComponent'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import configureStore from './Store/CustomerStore'
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props){
  const store = configureStore()
  store.subscribe(() =>{
    console.log(store.getState())
  })
  return (
    <div>
      <BrowserRouter>
      <Provider store = {store}>
      <UserauthComponent/>
      </Provider>
      </BrowserRouter>
    </div>
  )
}
export default App