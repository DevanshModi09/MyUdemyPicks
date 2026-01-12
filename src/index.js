import React from 'react';
import ReactDOM from 'react-dom/client';
import { courses } from './CoursesDb';
import Course from './course';
import './index.css';

const CourseList = () => {
  return (
    <main className="container">
      <header className="header">
        <h1>
          My <span>Udemy</span> Picks
        </h1>
        <p className="subtitle">
          A structured MERN stack roadmap — from fundamentals to deployment
        </p>
      </header>

      <section className="courselist">
        {courses.map((course) => (
          <Course key={course.seq} {...course} />
        ))}
      </section>
      <footer className="footer">
        <p>
          Note: These are my personal Udemy course picks for the MERN stack. I
          recommend following this order for a smooth learning journey, but feel
          free to adapt it to your own pace and goals.
        </p>
      </footer>
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CourseList />);
