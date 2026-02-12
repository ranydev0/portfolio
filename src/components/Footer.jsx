import SocialSection from "./SocialSection";

function currentYear() {
  return new Date().getFullYear();
}

function Footer() {
  return (
    <footer>
      <div id="footer-social">
        <div id="text-container">
          <p>My Portfolio &copy; {currentYear()} - All Rights Reserved</p>
          <p>
            Built with{" "}
            <span style={{ color: "red", fontSize: "1.35em" }}>{"\u2665"}</span>{" "}
            by Rany Daioub
          </p>
        </div>
        <SocialSection />
      </div>
      <p id="footer-text">MY PORTFOLIO</p>
    </footer>
  );
}

export default Footer;
