import {useState} from "react";
import {motion} from "framer-motion";

const Navbar = () => {
    const [open , setOpen] = useState(false);

   return(
    <motion.nav 
    initial = {{ y:-80, opacity:0}}
    animate = {{ y:0, opacity:1}}
    transition = {{duration: 0.6}}
    className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 px-6 py-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-indigo-600">Harshitha Epuri</h1>
    <button className="md:hidden" onClick={() => setOpen(!open)}>☰</button>
    <ul className={`md:flex gap-6 ${open ? "block" : "hidden"}`}>
      <li><a href="#about" className="hover:text-indigo-600">About</a></li>
      <li><a href="#projects" className="hover:text-indigo-600">Projects</a></li>
      <li><a href="#skills" className="hover:text-indigo-600">Skills</a></li>
      <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
    </ul>
  </motion.nav>
   )
}

export default Navbar;