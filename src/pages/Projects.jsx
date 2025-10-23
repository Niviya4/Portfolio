import { motion } from "framer-motion";
import gourmetImg from "../assets/Untitled design.png";

const projects = [
  {
    name: "Gourmet",
    desc: "Food review app.",
    url: gourmetImg,
  },
  {
    name: "The Missile Man",
    desc: "RAG app answering questions about A.P.J Abdul Kalam.",
    url: "https://www.guvi.in/rag/a54fc7a9-56ca-4867-9987-788d12142010/",
  },
  
  {
    name: "RandomVerse",
    desc: "Your daily dose of random verse.",
    url: "https://niviya4.github.io/FeelGoodQuotes/",
  },
  {
    name: "Illaku",
    desc: "A design of social platform for Sports enthusiasts.",
    url: "https://www.behance.net/gallery/221570845/-(illaku)-An-App-for-Sports-Enthusiasts",
  },
];

export default function Projects() {
  return (
    <div className="projects-container">
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        💻 Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <motion.a
            key={index}
            href={proj.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            whileHover={{
              scale: 1.07,
              rotate: 1,
              boxShadow: "0 0 25px rgba(92, 126, 255, 0.5)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <h3>{proj.name}</h3>
            <p>{proj.desc}</p>
            <span className="read-more">View →</span>
          </motion.a>
        ))}
      </div>

      <motion.p
        className="projects-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        “Every project begins as an idea — and grows into innovation 🌱”
      </motion.p>
    </div>
  );
}
