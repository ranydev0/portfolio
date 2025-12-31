function WorkCard({ content }) {
  return (
    <div className="work-card-container">
      <div className="card-top">
        <table>
          <thead>
            <tr>
              <th>{content.company}</th>
              <th></th>
              <th className="company">
                <img
                  className="company-logo"
                  src={content.logo}
                  alt={content.company}
                />
              </th>
            </tr>
          </thead>
        </table>

        <table>
          <tbody>
            <tr>
              <td>
                <strong>Team:</strong>
              </td>
              <td colSpan={2}>{content.team}</td>
            </tr>
            <tr>
              <td>
                <strong>Role:</strong>
              </td>
              <td colSpan={2}>{content.role}</td>
            </tr>
            <tr>
              <td>
                <strong>Description:</strong>
              </td>
              <td colSpan={2}>{content.description}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card-bottom">
        <section className="masonry">
          {content.achievements.map((achievement, index) => (
            <article key={index} className="card">
              <p>{achievement}</p>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}

export default WorkCard;
