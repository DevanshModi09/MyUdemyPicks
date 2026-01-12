const Course = (props) => {
  const { seq, img, courseTitle, courseDuration, courseInstructor } = props;
  return (
    <article className="course">
      <img src={img} alt={courseTitle} />
      <h2>{courseTitle}</h2>
      <h3>{'By: ' + courseInstructor}</h3>
      <h4>{courseDuration + ' hours'}</h4>
    </article>
  );
};

export default Course;
