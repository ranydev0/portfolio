import SocialIcon from "./SocialIcon";
import Github from "../assets/github-light.png";
import LinkedIn from "../assets/linkedin-light.png";
import Email from "../assets/email-light.png";

function SocialSection() {
  return (
    <div className="social-container">
      <SocialIcon
        icon={Github}
        link="https://github.com/ranydev0"
        children="GitHub"
      />
      <SocialIcon
        icon={LinkedIn}
        link="https://www.linkedin.com/in/ranyd"
        children="LinkedIn"
      />
      <SocialIcon
        icon={Email}
        link="mailto:ranydaioub11@gmail.com"
        children="Email"
      />
    </div>
  );
}

export default SocialSection;
