import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component{
    state = {
        name: {
            value: '',
            type: 'text',
            errors: {
                required: false
            }
        },
        email: {
            value: '',
            type: 'email',
            errors: {
                required: false
            }
        },
        message: {
            value: '',
            type: 'text',
            errors: {
                required: false
            }
        }
    };

    contactHandler = () => {
        //the part where you email
    }

    nameHandler = e => {
        const nameCopy = Object.assign({}, this.state.name);

        nameCopy.value = e.target.value;

        if(nameCopy.value.length > 0){
            nameCopy.errors.required = false;
        }
        else
        {
            nameCopy.errors.required = true;
        }
        this.setState({ name: nameCopy });
    }

    emailHandler = e => {

        const emailCopy = Object.assign({}, this.state.email);

        emailCopy.value = e.target.value;

        if(emailCopy.value.length > 0){
            emailCopy.errors.required = false;
        }
        else
        {
            emailCopy.errors.required = true;
        }

        this.setState({ email: emailCopy });
    }

    messageHandler = e => {

        const messageCopy = Object.assign({}, this.state.message);

        messageCopy.value = e.target.value;

        if(messageCopy.value.length > 0){
            messageCopy.errors.required = false;
        }
        else
        {
            messageCopy.errors.required = true;
        }

        this.setState({ message: messageCopy });
    }

    render(){
        return (
            <div className="row color--footer">
                <h2 className="test">Contact me</h2>
                <div className="col-lg-6 contact-page">
                    <div className="contact-box gradient--bg">
                        <form onSubmit={this.contactHandler}>
                            <div className="form--group">
                                <label className="label-text" htmlFor="name">Name</label>
                                <input 
                                    type={this.state.name.type} 
                                    placeholder="Type your name here"
                                    onChange={this.nameHandler}
                                    value={this.state.name.value}
                                    id="name"
                                />
                                {this.state.name.errors.required ? <span className="error-message">Name is required</span> : null}
                            </div>
                            <div className="form--group">
                                <label className="label-text" htmlFor="email">Email</label>
                                <input 
                                    type={this.state.email.type} 
                                    placeholder="Type your email here"
                                    onChange={this.emailHandler}
                                    value={this.state.email.value}
                                    id="email"
                                />
                                {this.state.email.errors.required ? <span className="error-message">Email is required</span> : null}
                            </div>
                            <div className="form--group">
                                <label className="label-text" htmlFor="message">Message</label>
                                <input 
                                    type={this.state.message.type} 
                                    placeholder="Type your message here"
                                    onChange={this.messageHandler}
                                    value={this.state.message.value}
                                    id="message"
                                />
                                {this.state.message.errors.required ? <span className="error-message">Message is required</span> : null}
                            </div>
                            <div className="form--group">
                                <button className="btn-send">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6">
                    <p>email:arber.breznica@hotmail.com</p>
                    <p>Instagram:*******</p>                
                </div>
            </div>
        );
    }
};

export default Footer;