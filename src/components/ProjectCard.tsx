import { motion } from "framer-motion";

const ProjectCard = ({ title, description, tech, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{
        rotateY: 5,
        scale: 1.05,
        background: "linear-gradient(135deg, #eef2ff, #e0e7ff)",
        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
      }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 cursor-pointer transform perspective-1000"
    >
      <motion.h3
        className="text-xl font-semibold mb-3"
        whileHover={{ color: "#6366f1", scale: 1.02 }}
      >
        {title}
      </motion.h3>

      <motion.p
        className="text-gray-600 dark:text-gray-300 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {description}
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-2 mb-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {tech.map((t, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.15, backgroundColor: "#c7d2fe", color: "#4338ca" }}
            className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs"
          >
            {t}
          </motion.span>
        ))}
      </motion.div>

      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative text-indigo-600 font-medium inline-block"
        whileHover={{ scale: 1.05 }}
      >
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
        View Project →
      </motion.a>
    </motion.div>
  );
};

export default ProjectCard;
