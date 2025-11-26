import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_xxxxxx", // Replace with your EmailJS Service ID
        "template_xxxxxx", // Replace with your EmailJS Template ID
        form,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
      );

      toast.success("Message Sent Successfully! 🚀");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Oops! Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 flex justify-center items-center min-h-screen overflow-hidden">
      <Toaster position="top-right" reverseOrder={false} />

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

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl bg-white/5 backdrop-blur-2xl p-10 rounded-3xl border border-white/20 shadow-2xl"
      >
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-3">
          Contact Me
        </h2>
        <p className="text-center text-gray-300 mb-10">
          Feel free to reach out for collaborations or just a friendly chat!
        </p>

        <form onSubmit={sendMessage} className="flex flex-col gap-6">
          {/* Name Input */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={onChange}
              required
              className="w-full bg-transparent border border-gray-600 rounded-xl px-4 py-3 text-white outline-none focus:border-teal-400 peer transition-all"
            />
            <label className="absolute left-4 top-3 text-gray-400 transition-all peer-focus:text-teal-400 peer-focus:-translate-y-6 peer-focus:text-sm peer-valid:-translate-y-6 peer-valid:text-sm">
              Full Name
            </label>
          </div>

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
              className="w-full bg-transparent border border-gray-600 rounded-xl px-4 py-3 text-white outline-none focus:border-teal-400 peer transition-all"
            />
            <label className="absolute left-4 top-3 text-gray-400 transition-all peer-focus:text-teal-400 peer-focus:-translate-y-6 peer-focus:text-sm peer-valid:-translate-y-6 peer-valid:text-sm">
              Email Address
            </label>
          </div>

          {/* Message Input */}
          <div className="relative">
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              required
              rows="5"
              className="w-full bg-transparent border border-gray-600 rounded-xl px-4 py-3 text-white outline-none focus:border-teal-400 peer transition-all"
            ></textarea>
            <label className="absolute left-4 top-3 text-gray-400 transition-all peer-focus:text-teal-400 peer-focus:-translate-y-6 peer-focus:text-sm peer-valid:-translate-y-6 peer-valid:text-sm">
              Message
            </label>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl text-black font-semibold bg-gradient-to-r from-teal-400 to-cyan-400 shadow-lg hover:shadow-teal-500 transition-all ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "Send Message 🚀"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
