import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './userTypes'
import { POST_USERS_REQUEST, POST_USERS_SUCCESS, POST_USERS_FAILURE } from './userTypes'
import { DELETE_USERS_REQUEST, DELETE_USERS_SUCCESS, DELETE_USERS_FAILURE } from './userTypes'
import { EDIT_USERS_REQUEST, EDIT_USERS_SUCCESS, EDIT_USERS_FAILURE } from './userTypes'

const initializeState = {
    loading: false,
    users: [],
    error: '',
}
const reducer = (state = initializeState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        case POST_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case POST_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload
            }
        case POST_USERS_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        case DELETE_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload
            }
        case DELETE_USERS_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        case EDIT_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case EDIT_USERS_SUCCESS:
            return {
                loading: false,
                users: []
            }
        case EDIT_USERS_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default: return state
    }
}
export default reducer