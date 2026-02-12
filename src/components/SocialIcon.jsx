function SocialIcon({ icon, link, children }) {
  return (
    <a className="social" href={link} target="_blank">
      <img className="social-icon" src={icon} alt={children} />
      <p className="social-text">{children}</p>
    </a>
  );
}

export default SocialIcon;
