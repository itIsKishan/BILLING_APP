import {createStore, combineReducers, applyMiddleware} from 'redux'
import CustomerReducer from '../Reducers/CustomerReducer'
import thunk from 'redux-thunk'
import productReducer from '../Reducers/ProductsReducers'
import BillReducer from '../Reducers/BillReducers'

// a store which maintains four different state value such as userInfo, customer, product, bills
const configureStore = () =>{

    const store = createStore(combineReducers({
        customer : CustomerReducer,
        product : productReducer,
        bill : BillReducer
    }),applyMiddleware(thunk))

    return store
}
export default configureStore