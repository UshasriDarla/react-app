import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers, deleteUsers,postUsers } from './userActions'
import User from './userComponent'

function UserContainer({ userData, fetchUsers, deleteUsers }) {
    useEffect(() => {
        fetchUsers()
    }, []);
    return (userData.loading ?
        (<h2>loading</h2>) : userData.error ?
            (<h2>{userData.error}</h2>) :
            (<div>
                <table>
                    <tbody>
                        {
                            userData.users.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.Name}</td>
                                        <td>{item.Discription}</td>
                                        <td>{item.Url}</td>
                                        <td><button onClick={() => deleteUsers(item)}>Delete</button></td>
                                        <td>  <User user={item} />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>))
}

const mapStateToProps = state => {
    return {
        userData: state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => {
            dispatch(fetchUsers())
        },
        deleteUsers: (data) => {
            dispatch(deleteUsers(data))
        },
        postUsers: (data) => {
            dispatch(postUsers(data))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)


