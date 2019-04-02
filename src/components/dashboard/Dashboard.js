import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectsList from '../proyects/ProjectsList';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        //console.log(this.props);
        const { projects } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <ProjectsList projects={projects}/>
                    </div>
                    <div className="col-12 col-sm-5 col-offset-1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard);