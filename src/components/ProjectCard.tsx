import { motion } from "framer-motion";

const ProjectCard = ({ title, description, tech, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // fade & slide up when entering
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.05, // slightly enlarges on hover
        boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)", // stronger shadow on hover
      }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 cursor-pointer"
    >
      <motion.h3
        className="text-xl font-semibold mb-2"
        whileHover={{ color: "#4f46e5" }} // changes title color on hover
      >
        {title}
      </motion.h3>

      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, i) => (
          <motion.span
            key={i}
            whileHover={{ scale: 1.1 }} // makes each tech pill bounce slightly on hover
            className="px-3 py-1 bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-white rounded-full text-xs"
          >
            {t}
          </motion.span>
        ))}
      </div>

      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        className="text-indigo-600 hover:underline font-medium"
      >
        View Project →
      </motion.a>
    </motion.div>
  );
};

export default ProjectCard;
