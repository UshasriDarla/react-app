
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { postUsers, fetchUsers } from './userActions'
import UserContainer from './userContainer'

class CreateUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: "",
            Discription: "",
            Url: ""
        }
    }
    onChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e => {
        e.preventDefault()
        this.props.onAdd(this.state)
    }
    handleReset = e => {
        e.preventDefault()
        this.setState({
            Name: "",
            Discription: "",
            Url: ""
        })
    }
    render() {
        return (
            <div>
                < div >
                    <form onSubmit={this.submitHandler} style={{ backgroundColor: 'GrayText' }}>
                        <input type="text" name="Name" value={this.state.Name} onChange={this.onChangeHandler} /><br />
                        <input type="text" name="Discription" value={this.state.Discription} onChange={this.onChangeHandler} /><br />
                        <input type="text" name="Url" value={this.state.Url} onChange={this.onChangeHandler} /><br />
                        <button type="submit" style={{margin:'5px'}}>Submit</button>
                        <button onClick={this.handleReset.bind(this)} style={{margin:'5px'}}>Cancel</button>
                    </form>
                </div >
                <div style={{ backgroundColor: "#f3f3f4" }}>
                    <UserContainer />
                </div>
            </div>
        )
    }

}
const mapStateToProps = state => {
    return {
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onAdd: (user) => {
            dispatch(postUsers(user))
        },
        onGet: () => {
            dispatch(fetchUsers())
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)
