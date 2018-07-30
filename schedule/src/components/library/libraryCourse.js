import React, { Component } from 'react';

import Icon from '../icon'

class LibraryCourse extends Component {
    render() {
        return(
            <div className="library-couse"> 
                <lable className="library-course__title"> Problem Solving</lable>
                { Icon('fas fa-check', 'library-course__iocn') }
                {/* arrow icon */}
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