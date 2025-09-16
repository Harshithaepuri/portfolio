import { motion } from "framer-motion";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

      <motion.div 
        className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.15, rotate: 3 }}
            transition = {{type: "spring", stiffness:300}}
            className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow text-center cursor-pointer transition"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <p className="font-semibold text-indigo-600 dark:text-indigo-400">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
