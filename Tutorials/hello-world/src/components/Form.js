import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            comment: "",
            topic: "react"
        };
    }

    handleUsernameChange = event => {
        this.setState(
            {
                username: event.target.value
            },
            () => {
                console.log(this.state);
            }
        );
    };

    handleCommentChange = event => {
        this.setState({
            comment: event.target.value
        });
    };

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.handleUsernameChange}
                    />
                    <br />
                    <label>Comment</label>
                    <input
                        type="textarea"
                        value={this.state.comment}
                        onChange={this.handleCommentChange}
                    />
                    <br />
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                    </select>
                    <button type="submit">Submit</button>
                </div>
            </form>
        );
    }
}

export default Form;
