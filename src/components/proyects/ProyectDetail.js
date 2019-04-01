import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-detail">
            <div className="card project-summary my-2">
                <div className="card-body">
                    <h5 className="card-title">Titulo del proyecto - {id}</h5>
                    <p className="card-text">Loren ipsum sdksajdsajfjkfhdjkf</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Posted by The Net Ninja</li>
                    <li class="list-group-item">2nd september 2017</li>
                </ul>
            </div>
        </div>
    )
}

export default ProjectDetails;


