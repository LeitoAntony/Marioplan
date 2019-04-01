import React, { Component } from 'react'

export class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="my-2">Ingresar</h5>
                    <div className="form-group">
                        <label htmlFor="email" className="form-check-label">Email</label>
                        <input type="email" className="form-control" id="email" onChange={this.handleChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-check-label">Password</label>
                        <input type="password" className="form-control" id="password" onChange={this.handleChange}></input>
                    </div>
                    <button className="btn btn-primary">Enviar</button>
                </form>
            </div>
        )
    }
}

export default SignIn
