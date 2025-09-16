import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="social">
      <a href="mailto:you@example.com"><FaEnvelope /><p>niviyastephen019@gmail.com</p></a>
      <br></br>
      <br></br>
      <a href="https://www.linkedin.com/in/niviyat2004/"><FaLinkedin /><p>Niviya.Linkedin</p></a>
      <br></br>
      <br></br>
      <a href="https://github.com/Niviya4"><FaGithub /><p>Niviya.Github</p></a>
      <br></br>
      <br></br>
      <a href="https://instagram.com/yourid"><FaInstagram /><p>Niviya.InkandInsights</p></a>
      <br></br>
    </div>
  );
}
