import React from 'react';
import ReactDOM from 'react-dom/client';
import { courses } from './CoursesDb.js';
import Course from './course.js';
import './index.css';



const CourseList = () => {
  return (
    <section className="courselist">
      {courses.map((course) => {
        return <Course {...course} key={course.seq}></Course>;
      })}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CourseList></CourseList>);
