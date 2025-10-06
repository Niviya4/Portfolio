import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";


export default function Contact() {
  const socials = [
    {
      icon: <FaEnvelope />,
      label: "niviyastephen019@gmail.com",
      link: "mailto:niviyastephen019@gmail.com",
      color: "#ff85a1",
      glow: "0 0 15px #ff85a1",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/niviyat2004/",
      color: "#0077b5",
      glow: "0 0 15px #0077b5",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      link: "https://github.com/Niviya4",
      color: "#24292e",
      glow: "0 0 15px #8b949e",
    },
    {
      icon: <FaInstagram />,
      label: "Ink & Insights",
      link: "https://instagram.com/yourid",
      color: "#e1306c",
      glow: "0 0 15px #ff8fab",
    },
  ];

  return (
    <div className="garden-bg">
      <motion.h2
        className="garden-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Let's Connect
      </motion.h2>

      <div className="social-bubbles">
        {socials.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bubble"
            style={{
              borderColor: item.color,
              boxShadow: item.glow,
            }}
            whileHover={{
              scale: 1.15,
              rotate: 2,
              boxShadow: `0 0 30px ${item.color}`,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <div className="bubble-icon" style={{ color: item.color }}>
              {item.icon}
            </div>
            <p>{item.label}</p>
          </motion.a>
        ))}
      </div>

      <motion.p
        className="footer-quote"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        “Every connection is a seed — let’s grow stories together 🌿”
      </motion.p>
    </div>
  );
}
