import Axios from 'axios';
import React, { Component } from 'react';


const api = Axios.create({
    baseURL: 'http://localhost:8000/api/reports/get'
})


class ReportList extends Component {
    state = {
        reports: []
    }
    constructor() {
        super()
        Axios.get('http://localhost:8000/api/reports/get').then(res => {
            this.setState({ reports: res.data })
            console.log(res.data)
        })
    }
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {
                            this.state.reports.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.Name}</td>
                                        <td>{item.Discription}</td>
                                        <td>{item.Url}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ReportList