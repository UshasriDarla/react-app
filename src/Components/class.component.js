import React, { Component } from "react";

class FirstClass extends Component {
    render() {
        return (
            <div>
                <h1> {this.props.name}</h1>
               {this.props.children}
                </div>
                )
    }
}
export default FirstClass