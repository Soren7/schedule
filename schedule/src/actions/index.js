import { 
    FETCH_COURSES,
    TOGGLE_ENROLLED
    } from './types';

export function toggleEnrolled(id) {
    return {
        type: TOGGLE_ENROLLED,
        payload: id
    };
}

export function fetchCourses() {
    return {
       type: FETCH_COURSES, 
       payload: [
            {
                id: 0,
                title: "Up and Running with Redis", 
                description: "In this course you'll learn how to work with the efficient Redis database to manage key / vallue relationships.",
                enrolled: false
            },
            {
                id: 1,
                title: "HTML-CSS Bootcamp",
                description: "Learn HTML5 and CSS3 from scratch, starting with the basics and finishing by building five projects from scratch.",
                enrolled: false
            },
            {
                id: 2,
                title: "UX for Developers",
                description: "This User Exerprience (UX) course examines how to develope a sysetem for approaching application development and enhancing the experience for the user.",
                enrolled: false
            },
            {
                id: 3,
                title: 'Problem Solving',
                description: "In this course you'll take a practical look at how to build a large number of software applications and features. By taking a systems analysis and design approach to development and leveraging UML, you'll be able to model systems and prepare to build the projects.",
                enrolled: false
            },
            {
                id: 4,
                title: 'UML for Developers',
                description: 'This course teaches the foundational building blocks of utilizing UML in order to model software systems.',
                enrolled: false
            },
            {
                id: 5,
                title: 'Algorithm Bootcamp',
                description: 'Algorithm Bootcamp - In this in depth course you will learn how to work with algorithms, including: how to measure their performance, understanding data structures, and implementing all of the algorithms in code.',
                enrolled: false
            },
            {
                id: 6,
                title: 'Introduction to Programming with Python',
                description: 'This course teaches the fundamentals of programming and utilizes the Python programming language.',
                enrolled: false
            },
            {
                id: 7,
                title: 'TypeScript Development',
                description: 'This course gives an introduction to the TypeScript programming language, including walking through the: syntax, best practices, and practical systems for building TypeScript programs.',
                enrolled: false
            },
            {
                id: 8,
                title: 'Introduction to Javascript',
                description: 'This course gives an introduction to the JavaScript programming language, including the basic syntax, how to work with collections, and input/output.',
                enrolled: false
            },
            {
                id: 9,
                title: 'Dissecting Rails 5',
                description: 'Learn how to build powerful applications using this comprehensive guide to the Ruby on Rails web framework.',
                enrolled: false
            },
            {
                id: 10,
                title: 'this is an example',
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non urna diam. Mauris ultricies dui a metus consequat placerat. Proin sit amet mollis metus. Nullam id urna eu augue lobortis pellentesque. Maecenas consectetur orci sed enim scelerisque sollicitudin. Praesent purus ipsum, luctus vitae ligula vitae, lacinia scelerisque leo. Fusce leo lorem, eleifend ut tempus sit amet, mattis quis arcu. Morbi eu dui augue. Donec nulla turpis, ornare id hendrerit a, imperdiet vel odio. Aliquam erat volutpat. Suspendisse magna ligula, aliquet eget tempor vitae, iaculis id ex. In facilisis vel turpis imperdiet dignissim. Mauris et odio vitae sapien blandit tristique.Duis pulvinar ex diam, eget suscipit est varius eget. Vestibulum sed ultrices est, sed gravida augue. Nunc pulvinar consectetur mattis. Duis tempor magna sit amet tincidunt accumsan. Phasellus venenatis porttitor mi in sollicitudin. Vestibulum porttitor, massa ac mollis semper, tellus erat vestibulum augue, vel sodales magna nibh ultrices leo. Praesent lorem sem, tincidunt sit amet iaculis vel, mattis sed libero. Integer erat nibh, porttitor a velit molestie, consequat gravida justo. Maecenas vitae commodo risus. Aliquam erat volutpat. Nulla facilisis risus ligula, ut rutrum ipsum bibendum vel. Nam cursus, sem et facilisis pellentesque, enim erat blandit leo, ultricies tincidunt tellus ante ut felis. Maecenas euismod lorem augue, sed vehicula sem rutrum vel. Morbi sit amet porttitor erat, non efficitur nulla.",
                enrolled: false
            }
          ]
    };
}