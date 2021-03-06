import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';

export class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.createProject(this.state)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="my-2">Nuevo proyecto</h5>
                    <div className="form-group">
                        <label htmlFor="title" className="form-check-label">Titulo</label>
                        <input type="text" className="form-control" id="title" onChange={this.handleChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content" className="form-check-label">Contenido</label>
                        <textarea id="content"  className="form-control" onChange={this.handleChange}></textarea>
                    </div>
                    <button className="btn btn-primary">Enviar</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject);
