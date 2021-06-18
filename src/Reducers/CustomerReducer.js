// initial value for the state
const initialCustomerData = []

// the reducer to set the state value upon the action thats as been dispatched
const CustomerReducer = (state = initialCustomerData,action) =>{
    switch(action.type){
        case 'ADD_CUSTOMER' : {
            return [...state,{...action.payload}]
        }
        case 'LIST_CUSTOMER' : {
            return [...action.payload]
        }
        case 'SINGLE_CUSTOMER' : {
            return {...action.payload}
        }
        case 'DELETE_CUSTOMER' : {
            return state.filter((ele)=>{
                return ele._id !== action.payload._id
            })
        }
        default : {
            return [...state]
        }
    }
}
export default CustomerReducer