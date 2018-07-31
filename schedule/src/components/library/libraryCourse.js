

import React, { Component } from 'react';
import Arrow from '../arrow';
import Icon from '../icon';
import Action from '../action';

class LibraryCourse extends Component {
    render() {
        return(
            <div className="library-course"> 
                <div className="library-course__title-check"> 
                    <lable className="library-course__title"> {this.props.title}</lable>
                    { Icon('fas fa-check', 'library-course__icon') }
                </div>
                <Arrow className="library-course__arrow"/>
                <Action className="library-course__action"/>
                
                <div className="library-course__description"> 
                    <lable>Course Description</lable>
                    <p>
                        {this.props.description}
                    </p>
                </div>
            </div>
        );
    }
}

export default LibraryCourse;