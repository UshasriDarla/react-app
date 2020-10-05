import Axios from 'axios';
import React, { Component } from 'react';

class ReportPostForm extends Component {
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
        console.log(this.state)
        Axios.post('http://localhost:8000/reports/save', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const { Name, Discription, Url } = this.state
        return (
            < div >
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="Name" value={Name} onChange={this.onChangeHandler} style={{ padding: "10px", margin: "2px" }} /><br />
                    <input type="text" name="Discription" value={Discription} onChange={this.onChangeHandler} style={{ padding: "10px", margin: "2px" }} /><br />
                    <input type="text" name="Url" value={Url} onChange={this.onChangeHandler} style={{ padding: "10px", margin: "2px" }} /><br />
                    <button type="submit" style={{ padding: "10px", margin: "2px" }}>Submit</button>
                </form>
            </div >
        )
    }
}
export default ReportPostForm