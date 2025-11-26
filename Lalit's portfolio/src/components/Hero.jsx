import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import hero from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex justify-center items-center px-6 text-center overflow-hidden"
    >
      {/* Floating lights background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 blur-[130px] opacity-30 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 blur-[130px] opacity-30 rounded-full"></div>
      </div>

      {/* Floating shapes */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ repeat: Infinity, duration: 3, repeatType: "reverse" }}
        className="absolute top-10 right-20 w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ repeat: Infinity, duration: 4, repeatType: "reverse" }}
        className="absolute bottom-14 left-20 w-14 h-14 bg-gradient-to-br from-purple-600 to-cyan-400 rounded-full blur-sm"
      />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl flex flex-col items-center"
      >
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7 }}
          src={hero}
          className="w-44 h-44 rounded-full object-cover border-4 border-primary shadow-[0_0_35px_rgba(0,238,255,0.8)]"
        />

        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">
          Hi, I'm <span className="text-primary">Lalit Thakur</span>
        </h1>

        {/* Typing Animation Text */}
        <TypeAnimation
          sequence={[
            "MERN Stack Developer", 1500,
            "Frontend React Developer", 1500,
            "Backend Node.js Engineer", 1500,
            "Full-Stack Problem Solver", 1500,
          ]}
          wrapper="span"
          speed={50}
          className="text-2xl md:text-3xl mt-2 text-gray-300 font-medium"
          repeat={Infinity}
        />

        <p className="mt-5 text-gray-400 max-w-xl">
          I build scalable web applications and modern digital experiences that help businesses grow.
        </p>

        {/* Buttons */}
        <div className="flex gap-6 mt-8">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#projects"
            className="px-8 py-3 bg-primary text-black font-semibold rounded-xl shadow-lg"
          >
            View Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/Resume-Lalit.pdf"
            download
            className="flex items-center gap-2 px-8 py-3 border border-primary text-primary rounded-xl"
          >
            <FaDownload /> Resume
          </motion.a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-8 mt-10 text-2xl">
          <a href="https://github.com" className="hover:text-primary transition"><FaGithub /></a>
          <a href="https://linkedin.com" className="hover:text-primary transition"><FaLinkedin /></a>
        </div>
      </motion.div>
    </section>
  );
}
