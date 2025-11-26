import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "HyperBharat – Local Commerce Super App",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    description:
      "AI-powered hyperlocal commerce platform enabling real-time inventory, delivery, and booking for kirana stores & services.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "MovieVerse – Real-time Movie Streaming App",
    image: "https://images.unsplash.com/photo-1517602302552-471fe67acf66",
    description:
      "Realtime Firebase movie streaming platform with modern UI, search, filtering, pagination, watchlist & authentication.",
    tech: ["React", "Firebase", "TMDB API"],
    github: "#",
    live: "#",
  },
  {
    title: "Doctor Booking System",
    image: "https://images.unsplash.com/photo-1550831107-1553da8c8464",
    description:
      "Doctor appointment scheduling app with calendar UI, real-time availability, CRUD, and smooth UX animations.",
    tech: ["MERN", "JWT", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Book Management MERN System",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    description:
      "Complete management system enabling book borrow, return, add, update, and delete workflows with clean UI.",
    tech: ["React", "Node", "Express", "MongoDB"],
    github: "#",
    live: "#",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const card = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 text-white px-6 min-h-screen overflow-hidden">
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
        className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      >
        My Projects
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto"
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={card}
            whileHover={{ scale: 1.04, rotateX: 4, rotateY: 4 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400 hover:shadow-cyan-500/40 shadow-xl transition-all cursor-pointer"
          >
            <div className="h-52 overflow-hidden">
              <motion.img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold">{p.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{p.description}</p>

              <div className="flex flex-wrap gap-2">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs bg-cyan-500/20 border border-cyan-500/40"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center pt-3">
                <a href={p.github} target="_blank" className="flex items-center gap-2 hover:text-cyan-400 transition">
                  <FaGithub /> Code
                </a>
                <a href={p.live} target="_blank" className="flex items-center gap-2 hover:text-cyan-400 transition">
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
