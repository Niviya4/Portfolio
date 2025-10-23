import { motion } from "framer-motion";


export default function Projects() {
  const projects = [
    {
      name: "DocuMerge",
      desc: "Document collaboration platform (Spring Boot & MVC).",
      url: "https://niviyat.substack.com/p/the-ultimate-guide-to-beating-procrastination?r=55vvu8",
    },
    {
      name: "Ilakku",
      desc: "Sports networking app promoting heritage games.",
      url: "https://niviyat.substack.com/p/the-ultimate-guide-to-beating-procrastination?r=55vvu8",
    },
    {
      name: "The Missile Man",
      desc: "RAG app answering questions about A.P.J Abdul Kalam.",
      url: "https://niviyat.substack.com/p/the-ultimate-guide-to-beating-procrastination?r=55vvu8",
    },
  ];

  return (
    <div className="projects-container">
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        💻 My Creative Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
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
          </motion.div>
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
