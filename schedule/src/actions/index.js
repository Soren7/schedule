import { FETCH_COURSES } from './types';

function fetchCourses() {
    return {
       type: FETCH_COURSES, 
       payload: [
            {
                title: "Up and Running with Redis", 
                Description: "In this course you'll learn how to work with the efficient Redis database to manage key / vallue relationships."
            },
            {
                title: "HTML-CSS Bootcamp",
                descprition: "Learn HTML5 and CSS3 from scratch, starting with the basics and finishing by building five projects from scratch."
            },
            {
                title: "UX for Developers",
                description: "This User Exerprience (UX) course examines how to develope a sysetem for approaching application development and enhancing the experience for the user."
            }
          ]
    };
}