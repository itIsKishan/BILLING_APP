// initial value for the state
const initialProductData = []

// the reducer to set the state value upon the action thats as been dispatched
const productReducer = (state = initialProductData, action) =>{
     switch(action.type){
        case 'ADD_PRODUCT' : {
            return [...state, {...action.payload}]
        }
        case 'LIST_PRODUCT' : {
            return [...action.payload]
        }
        case 'DELETE_PRODUCT' : {
            return state.filter((prod) => {
                return prod._id !== action.payload._id
            })
        }
        default : {
            return [...state]
         }
     }
}

export default productReducer