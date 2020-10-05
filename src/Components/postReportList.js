import React, { Component } from "react";
import PostReportForm from './postReportForm'
class PostReportList extends Component {
    state = {
        currentIndex: -1,
        list: this.returnList()
    }
    returnList() {
        if (localStorage.getItem('reports') === null) {
            localStorage.setItem('reports', JSON.stringify([]))
        }
        return JSON.parse(localStorage.getItem('reports'))
    }
    onAddOrEdit = (data) => {
        var list = this.returnList()
        if (this.state.currentIndex === -1) {
            list.push(data)
        } else {
            list[this.state.currentIndex] = data
        }
        localStorage.setItem('reports', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }
    handleEdit(index) {
        this.setState({
            currentIndex: index
        })
    }
    handleDelete(index) {
        var list = this.returnList()
        list.splice(index, 1)
        localStorage.setItem('reports', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }
    render() {
        return (
            <div className="center">
                <PostReportForm onAddOrEdit={this.onAddOrEdit}
                    currentIndex={this.state.currentIndex}
                    list={this.state.list}
                />
                <table >
                        <tbody>
                            <tr style={{ fontWeight: "bold" }} >
                                <td>ReportName</td>
                                <td>ReportDiscription</td>
                                <td>ReportUrl</td>
                                <td>ReportEdit</td>
                                <td>ReportDelete</td>
                            </tr>
                            {this.state.list.map((item, index) => {
                                return (
                                    <tr key={index} >
                                        <td >{item.Name}</td>
                                        <td>{item.Discription}</td>
                                        <td>{item.Url}</td>
                                        <td><button onClick={() => this.handleEdit(index)}>Edit</button></td>
                                        <td><button onClick={() => this.handleDelete(index)}>Delete</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                </table>
            </div>
        )
    }
}
export default PostReportList