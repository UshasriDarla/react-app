import React, { Component } from "react";
class PostReportForm extends Component {
    state = {
        ...this.returnStateObj()
    }
    returnStateObj() {
        if (this.props.currentIndex === -1) {
            return {
                Name: "",
                Discription: "",
                Url: ""
            }
        } else {
            return this.props.list[this.props.currentIndex]
        }
    }
    componentDidUpdate(previousProps) {
        if (previousProps.currentIndex !== this.props.currentIndex || previousProps.list.length !== this.props.list.length)
            this.setState({
                ...this.returnStateObj()
            })
    }
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.onAddOrEdit(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} autoComplete="off" style={{ backgroundColor: "#676a6c", padding: "50px" }} >
                    <input style={{ padding: "10px", margin: "2px" }} name="Name" placeholder="report Name" value={this.state.Name} onChange={this.handleInputChange} /><br />
                    <input style={{ padding: "10px", margin: "2px" }} name="Discription" placeholder="report Discription" value={this.state.Discription} onChange={this.handleInputChange} /><br />
                    <input style={{ padding: "10px", margin: "2px" }} name="Url" placeholder="report Url" value={this.state.Url} onChange={this.handleInputChange} /><br />
                    <button style={{ padding: "10px", margin: "2px" }} type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default PostReportForm