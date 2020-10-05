import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editUsers } from './userActions'

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: "",
            Discription: "",
            Url: "",
        }
    }
    onChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e => {
        e.preventDefault()
        this.props.editUsers({
            Name: this.state.Name,
            Discription: this.state.Discription,
            Url: this.state.Url,
            id: this.props.user.id
        })
    }
    render() {
        return (
            <div >
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="Name" value={this.state.Name} onChange={this.onChangeHandler} /> <br />
                    <input type="text" name="Discription" value={this.state.Discription} onChange={this.onChangeHandler} /> <br />
                    <input type="text" name="Url" value={this.state.Url} onChange={this.onChangeHandler} /> <br />
                    <button type="submit">Edit</button> <br />
                </form>
            </div >
        )
    }
}
const mapStateToProps = state => {
    return {
    }
}
const mapDispatchToProps = dispatch => {
    return {
        editUsers: (data) => {
            dispatch(editUsers(data))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(User)


