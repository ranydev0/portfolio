function EducationCard({ title, image, date, degree, achievements }) {
  return (
    <div className="education-card">
      <div className="institute">
        <img className="logo" src={image} alt={title} />
        <h3>{title}</h3>
      </div>
      <hr />
      <div className="institute-details">
        <p>{date}</p>
        <p>{degree}</p>
        {achievements.map((achievement, index) => (
          <p key={index}>{achievement}</p>
        ))}
      </div>
    </div>
  );
}

export default EducationCard;
