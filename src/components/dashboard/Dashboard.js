import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectsList from '../proyects/ProjectsList';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <ProjectsList/>
                    </div>
                    <div className="col-12 col-sm-5 col-offset-1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;