import { Buy_Cake } from './cakType'
const initialState = {
    numOfCakes: 10
}
const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case Buy_Cake: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}
export default cakeReducer