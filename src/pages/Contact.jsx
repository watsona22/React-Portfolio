//https://mailtrap.io/blog/react-contact-form/#Script-for-Expressjs-Nodejs-auto-reply-email
import React from 'react';
import { validateEmail } from '../utils/helpers';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            errorMessage: '' // Add errorMessage state
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!validateEmail(this.state.email)) {
            this.setState({ errorMessage: 'Email is invalid' });
            return;
        }
        if (!this.state.name) {
            this.setState({ errorMessage: 'Name required' });
            return;
        }
        if (!this.state.message) {
            this.setState({ errorMessage: 'Message required' });
            return;
        }


    }

    resetForm() {
        this.setState({ name: '', email: '', message: '', errorMessage: '' }); // Clear errorMessage state
    }

    render() {
        return (
            <div className="App-header form">
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameEdit.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailEdit.bind(this)} />
                        {this.state.errorMessage && <p className="error-message">{this.state.errorMessage}</p>} {/* Display error message */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageEdit.bind(this)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }

    onNameEdit(event) {
        this.setState({ name: event.target.value });
    }

    onEmailEdit(event) {
        this.setState({ email: event.target.value, errorMessage: '' }); // Clear error message when email changes
    }

    onMessageEdit(event) {
        this.setState({ message: event.target.value });
    }
}

export default App;
