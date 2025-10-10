import { motion } from "framer-motion";

const Hero = () => {
    return(
        <section className="flex flex-col text-center items-center pt-20">
            <motion.h1 
           initial={{opacity:0, y:20}}
           animate = {{opacity:1, y:0}}
           transition={{duration:0.6}}
            className="text-5xl font-bold mt-8">Hi, I am <span className="text-indigo-600">Harshitha</span>
            </motion.h1>

     
            <motion.p 
            initial = {{opacity:0}}
            animate = {{opacity:1}}
            transition = {{delay: 0.4, duration:0.6}}
            className="text-gray-600 mt-4 text-lg">React Developer | UI Enthusiast
            </motion.p>
            <div className="flex gap-4 mt-4">
        <a href="mailto:harshitaepuri45@gmail.com" className="text-2xl font-bold text-indigo-600 hover:underline">Email</a>
        <a href="https://www.linkedin.com/in/harshithaepuri/" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-indigo-600 hover:underline">LinkedIn</a>
        <a href="https://github.com/Harshithaepuri" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-indigo-600 hover:underline">GitHub</a>
      </div>
      <p className="mt-2 text-gray-600 dark:text-gray-400">+91 9390829479</p>

      <motion.a href="#projects"

      initial = {{opacity:0, scale:0.9}}
      animate = {{opacity:1, scale:1}}
      transition ={{delay:0.7, duration:0.4}}
      className="mt-6 px-6 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 p-4">View My Work</motion.a>

        </section>
    )
}

export default Hero;