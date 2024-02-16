//https://mailtrap.io/blog/react-contact-form/#Script-for-Expressjs-Nodejs-auto-reply-email
import React from 'react';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        ({
            method: "POST",
            url: "http://localhost:3000/send",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }
    resetForm() {
        this.setState({ name: '', email: '', message: '' })
    }
    render() {

        return (
            <div className="App header">
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameEdit.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailEdit.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Words</label>
                        <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageEdit.bind(this)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
    onNameEdit(event) {
        this.setState({ name: event.target.value })
    }
    onEmailEdit(event) {
        this.setState({ email: event.target.value })
    }
    onMessageEdit(event) {
        this.setState({ message: event.target.value })
    }
}
export default App;