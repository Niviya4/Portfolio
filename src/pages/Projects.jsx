import { motion } from "framer-motion";

const projects = [
  {
    name: "Gourmet",
    desc: "Food review app.",
    url: "https://niviyat.substack.com/p/the-ultimate-guide-to-beating-procrastination?r=55vvu8",
  },
  {
    name: "The Missile Man",
    desc: "RAG app answering questions about A.P.J Abdul Kalam.",
    url: "https://niviyat.substack.com/p/the-ultimate-guide-to-beating-procrastination?r=55vvu8",
  },
  {
    name: "TripPlanner",
    desc: "Travel itinerary generator using AI.",
    url: "https://github.com/Niviya4/sih_travelplanner",
  },
  {
    name: "RandomVerse",
    desc: "Your daily dose of random verse.",
    url: "https://github.com/Niviya4/sih_travelplanner",
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
            <span className="read-more">Read →</span>
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
