import { motion } from "framer-motion";
import { FaCode, FaUserGraduate, FaLaptopCode } from "react-icons/fa";
import avatar from "../assets/hero.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-0 w-96 h-96 bg-cyan-500 opacity-20 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 opacity-20 blur-[160px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6"
      >
        {/* Left side Glass Card */}
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-2xl border border-white/20 shadow-xl rounded-3xl p-8 max-w-sm text-center"
        >
          <img
            src={avatar}
            className="w-44 h-44 mx-auto rounded-2xl object-cover shadow-[0_0_30px_rgba(0,238,255,0.5)]"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-primary">Lalit Thakur</h2>
          <p className="text-gray-300 mt-2">MERN Stack Developer</p>
          <p className="text-gray-400 mt-4 text-sm">
            A passionate engineer crafting interactive, scalable, and high-performance full-stack applications with focus on clean UI and seamless UX.
          </p>
        </motion.div>

        {/* Right side content */}
        <div className="flex-1">
          <h3 className="text-4xl font-bold mb-6">About <span className="text-primary">Me</span></h3>
          <p className="text-gray-300 leading-relaxed mb-8">
            I’m a dedicated MERN stack developer with experience in building real-world projects involving scalable APIs,
            modern UI interfaces, state management, authentication, and cloud deployment.
            I love solving complex problems and continuously improving my craft.
          </p>

          {/* Timeline Section */}
          <div className="space-y-6">
            {[
              {
                icon: <FaCode />,
                title: "Full-Stack & MERN Development",
                text: "Building production-level React UI & secure scalable backend services using Node, Express & MongoDB.",
              },
              {
                icon: <FaLaptopCode />,
                title: "Real-World Projects",
                text: "Created E-commerce, Chat app with Socket.IO, Admin dashboards & API driven apps.",
              },
              {
                icon: <FaUserGraduate />,
                title: "Continuous Learning",
                text: "Always exploring new technologies & performance optimization strategies.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex gap-4 p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:shadow-[0_0_25px_rgba(0,238,255,0.4)] cursor-default"
              >
                <div className="text-primary text-3xl">{item.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                  <p className="text-gray-300 text-sm mt-1">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Tech Progress Bars */}
      <div className="max-w-4xl mx-auto mt-16 px-6">
        <h3 className="text-3xl font-bold mb-6 text-center text-primary">Tech Expertise</h3>

        <div className="space-y-6">
          {[
            { label: "React & Next.js", value: 90 },
            { label: "Node.js & Express", value: 85 },
            { label: "MongoDB & SQL", value: 80 },
            { label: "Tailwind CSS & UI/UX", value: 95 },
          ].map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between mb-1">
                <span className="text-gray-200">{skill.label}</span>
                <span className="text-primary">{skill.value}%</span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.value}%` }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="h-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_15px_rgba(0,238,255,0.6)]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
