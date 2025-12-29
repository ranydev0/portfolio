function Section({ children, title }) {
  return (
    <section className="section-container-vertical section-container">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
