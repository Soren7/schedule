
import React, { Component } from 'react';


class ScheduleCourse extends Component {
    render() {
        return(
            <div className="schedule-course"> 
                <lable>{this.props.title}</lable>
            </div>
        );
    }
}

export default ScheduleCourse;