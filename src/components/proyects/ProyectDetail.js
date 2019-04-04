import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = (props) => {
    const { project } = props;
    if (project) {
        return (
            <div className="container section project-detail">
                <div className="card project-summary my-2">
                    <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{ProjectDetails.content}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Posted by {project.authorFirstName} {project.authorLastname}</li>
                        <li className="list-group-item">2nd september 2017</li>
                    </ul>
                </div>
            </div>
        )
    }
    return (
        <div className="container">
            <p>Cargando Proyecto...</p>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project: project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails);


