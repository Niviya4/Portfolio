import { motion } from "framer-motion";
import { FaHeart, FaPenFancy, FaCode, FaBookOpen } from "react-icons/fa";


export default function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <motion.div
        className="about-hero"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Hi, I’m <span>Niviya</span></h1>
        <p>
          A Computer Science and Engineering Student, who love to write code, desing and innovate.
        </p>
      </motion.div>

      {/* Bio Section */}
      <motion.div
        className="about-bio"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p>
          I’m a Computer Science Engineer with a deep passion for <b>web design</b>, 
          <b> AI innovation</b>, <b>writing poems </b>and <b> blogs</b>.  
        </p>
        <p>
          All that drives me is the curiosity of learning new things and the burning passion for writing and this eventually made me to start my instagram page
          <i> “Ink & Insights.”</i>
        </p>
      </motion.div>

      {/* Interest Cards */}
      <div className="about-interests">
        <motion.div
          className="interest-card"
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <FaCode className="icon" />
          <h3>Developer</h3>
          <p>Building ideas into reality using code and creativity.</p>
        </motion.div>

        <motion.div
          className="interest-card"
          whileHover={{ scale: 1.08 }}
        >
          <FaPenFancy className="icon" />
          <h3>Poet</h3>
          <p>Finding beauty in emotions, and turning them into verses.</p>
        </motion.div>

        <motion.div
          className="interest-card"
          whileHover={{ scale: 1.08 }}
        >
          <FaBookOpen className="icon" />
          <h3>Dreamer</h3>
          <p>Always imagining worlds where innovation and kindness meet.</p>
        </motion.div>

        <motion.div
          className="interest-card"
          whileHover={{ scale: 1.08 }}
        >
          <FaHeart className="icon" />
          <h3>Believer</h3>
          <p>Grounded in faith, guided by grace, and inspired by purpose.</p>
        </motion.div>
      </div>

      {/* Quote Section */}
      <motion.div
        className="about-quote"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p>
          “Between code and poetry, I found my voice — one that creates, heals, and hopes.” 🌙
        </p>
      </motion.div>
    </div>
  );
}
