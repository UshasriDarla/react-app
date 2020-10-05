import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './userTypes'
import { POST_USERS_REQUEST, POST_USERS_SUCCESS, POST_USERS_FAILURE } from './userTypes'
import { EDIT_USERS_REQUEST, EDIT_USERS_SUCCESS, EDIT_USERS_FAILURE } from './userTypes'
import { DELETE_USERS_REQUEST, DELETE_USERS_SUCCESS, DELETE_USERS_FAILURE } from './userTypes'

import axios from 'axios'

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
export const fetchUserSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error

    }
}
export const postUsersRequest = () => {
    return {
        type: POST_USERS_REQUEST
    }
}
export const postUserSuccess = users => {
    return {
        type: POST_USERS_SUCCESS,
        payload: users
    }
}
export const postUsersFailure = error => {
    return {
        type: POST_USERS_FAILURE,
        payload: error

    }
}
export const deleteUsersRequest = () => {
    return {
        type: DELETE_USERS_REQUEST
    }
}
export const deleteUserSuccess = () => {
    return {
        type: DELETE_USERS_SUCCESS,
        payload: []
    }
}
export const deleteUsersFailure = error => {
    return {
        type: DELETE_USERS_FAILURE,
        payload: error

    }
}
export const editUsersRequest = () => {
    return {
        type: EDIT_USERS_REQUEST
    }
}
export const editUserSuccess = () => {
    return {
        type: EDIT_USERS_SUCCESS,
    }
}
export const editUsersFailure = error => {
    return {
        type: EDIT_USERS_FAILURE,
        payload: error

    }
}
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('http://localhost:8000/api/reports/get')
            .then((response) => {
                const users = response.data
                dispatch(fetchUserSuccess(users))
            })
            .catch(error => {
                const errormsg = error.message
                dispatch(fetchUsersFailure(errormsg))
            })
    }
}
export const postUsers = (data) => {
    return (dispatch) => {
        dispatch(postUsersRequest)
        axios.post('http://localhost:8000/reports/save', data)
            .then((response) => {
                const users = [response.data.postgresRes]
                dispatch(postUserSuccess(users))
            })
            .catch(error => {
                const errormsg = error.message
                dispatch(postUsersFailure(errormsg))
            })
    }
}
export const deleteUsers = (data) => {
    return (dispatch) => {
        dispatch(deleteUsersRequest)
        axios.delete('http://localhost:8000/api/reports/delete/' + data.id)
            .then(() => {
                dispatch(deleteUserSuccess())
            })
            .catch(error => {
                const errormsg = error.message
                dispatch(deleteUsersFailure(errormsg))
            })
    }
}
export const editUsers = (data) => {
    return (dispatch) => {
        dispatch(editUsersRequest)
        axios.patch('http://localhost:8000/api/reports/edit/' + data.id, data)
            .then(() => {
                dispatch(editUserSuccess())
            })
            .catch(error => {
                const errormsg = error.message
                dispatch(editUsersFailure(errormsg))
            })
    }
}