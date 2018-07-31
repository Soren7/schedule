import React, { Component } from 'react';

class ProgressTracker extends Component {
    render() {
        return (
            <div className="progress-tracker">
                <lable className="progress-tacker__lable"> Progress Tracker</lable>
                <div className="progress-tracker__percentage">
                    0%
                </div>
            </div>
        );
    }
}

export default ProgressTracker;