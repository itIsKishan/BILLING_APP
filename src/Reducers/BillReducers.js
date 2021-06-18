const initialBillReducer = []

const BillReducer = (state = initialBillReducer,action) =>{
    switch(action.type) {
        case 'CREATE_BILL' : {
            return [{...action.payload}]
        }
        case 'ALL_BILLS' : {
            return [...action.payload]
        }
        case 'DELETE_BILL' : {
            return state.filter((ele) =>{
                return ele._id !== action.payload._id
            })
        }
        default : {
            return [...state]
        }
    }
}
export default BillReducer