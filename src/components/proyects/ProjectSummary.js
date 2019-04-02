import React from 'react';

const ProjectSummary = ({project}) => {
    return (
        <div className="card project-summary my-2">
            <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.content}</p>
                <p className="card-text secondary">3rd de septiembre, 2am</p>

            </div>
        </div>
    )
}

export default ProjectSummary;