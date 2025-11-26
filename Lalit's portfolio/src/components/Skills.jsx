import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiRedux, SiDocker } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact />, level: 95 },
  { name: "Node.js", icon: <FaNodeJs />, level: 90 },
  { name: "MongoDB", icon: <SiMongodb />, level: 92 },
  { name: "Express.js", icon: <SiExpress />, level: 88 },
  { name: "JavaScript", icon: <FaJs />, level: 94 },
  { name: "HTML5", icon: <FaHtml5 />, level: 98 },
  { name: "CSS3", icon: <FaCss3Alt />, level: 96 },
  { name: "TailwindCSS", icon: <SiTailwindcss />, level: 93 },
  { name: "Redux", icon: <SiRedux />, level: 87 },
  { name: "Git & GitHub", icon: <FaGithub />, level: 91 },
  { name: "SQL / NoSQL", icon: <FaDatabase />, level: 85 },
  { name: "Docker", icon: <SiDocker />, level: 70 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 160,
      damping: 15,
      duration: 0.35
    }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 text-white overflow-hidden min-h-screen">
      {/* Floating neon shapes background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 blur-[130px] opacity-30 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 blur-[130px] opacity-30 rounded-full"></div>
      </div>

      {/* Animated floating shapes */}
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

      <motion.h2
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center mb-14 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      >
        Skills & Expertise
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-xl
                       hover:border-cyan-400 hover:shadow-cyan-500/50 cursor-pointer
                       transition-all duration-200 hover:-translate-y-2"
          >
            <div className="flex justify-center items-center mb-4 text-5xl text-cyan-400 
                group-hover:rotate-6 transition-all duration-200">
              {skill.icon}
            </div>

            <h3 className="text-center text-xl font-semibold">{skill.name}</h3>

            <p className="mt-4 text-center text-cyan-300 text-lg font-bold">
              {skill.level}%
            </p>
            <div className="mt-3 w-full bg-gray-800 rounded-full h-2 overflow-hidden">
              <motion.div
                className="bg-cyan-400 h-2"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
