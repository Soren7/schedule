
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Action from '../action';


class ScheduleCourse extends Component {
    render() {
        return(
            <div className="schedule-course"> 
                <lable className="schedule-course__lable">{this.props.title}</lable>
                <Action onClick={() => this.props.toggleEnrolled(this.props.id)} className="schedule-course__action"/>
            </div>
        );
    }
}

export default connect(null, actions)(ScheduleCourse);