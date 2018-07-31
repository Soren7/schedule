

import React, { Component } from 'react';
import Arrow from '../arrow';
import Icon from '../icon';

class LibraryCourse extends Component {
    render() {
        return(
            <div className="library-course"> 
                <div className="library-course__title-arrow"> 
                    <lable className="library-course__title"> Problem Solving</lable>
                    { Icon('fas fa-check', 'library-course__icon') }
                </div>
                <Arrow className="library-course__arrow"/>
                {/*action button component */}
                { Icon('fas fa-plus-circle', 'library-colurse-action') }
                <div className="library-course__description"> 
                    <lable>Course Description</lable>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit varius interdum. Mauris porta fringilla consectetur. Ut tincidunt lectus ac libero molestie ornare. Donec nec nulla felis. Orci varius natoque penatibus et magn</p>
                </div>
            </div>
        );
    }
}

export default LibraryCourse;