import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function App() {
  const projects = [
    {
      title: "Animated Login Page UI",
      link: "https://login-form-jr4h.vercel.app/",
      description: "A fully animated login page UI built with modern design principles.",
    },
    {
      title: "Flipkart UI Clone",
      link: "https://flipkart-ui-beryl.vercel.app/",
      description: "A pixel-perfect clone of Flipkart's UI, showcasing frontend skills.",
    },
    {
      title: "ShopCart",
      link: "https://shop-cart-1ox2.vercel.app/",
      description: "An Ecommerce shopping cart with product details,signup,login,logout features and also add to cart option. Used MERN stack for this project",
    },
    {
      title: "SAAS Landing Page",
      link: "https://saas-landing-page-azure-phi.vercel.app/",
      description: "I designed and developed a modern SaaS Landing Page with a clean UI and engaging animations using React.js, Tailwind CSS, and Framer Motion. The landing page highlights key achievements with an interactive counter that dynamically updates when scrolled into view.",
    },
  ];

  // Contact form state
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const formRef = useRef(); // Reference for form submission

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    const serviceID = "service_p7jmdut"; // Replace with your EmailJS Service ID
    const templateID = "template_hlx5z56"; // Replace with your EmailJS Template ID
    const publicKey = "x5CGrXMJNUxH7NoYr"; // Replace with your EmailJS Public Key

    if (!formRef.current) {
      setStatus("Form not found. Please refresh and try again.");
      return;
    }


    emailjs
      .sendForm(serviceID, templateID,formRef.current, publicKey)
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold">PANKAJ KUMAR</h1>
        <ul className="flex gap-6">
          <li><a href="#" className="hover:text-blue-400">Home</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <motion.div 
        className="mt-20 flex flex-col md:flex-row items-center justify-center px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img 
          src="\passport size photo.jpg" // Replace with your image URL
          alt="Your Profile"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg border-4 border-blue-400"
          whileHover={{ scale: 1.1 }}
        />

        {/* Introduction Text */}
        <div className="text-center md:text-left md:ml-10 mt-6 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Hello, I'm <span className="text-blue-400">PANKAJ KUMAR</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Frontend Developer | React | Tailwind CSS | React-Redux
          </p>
        </div>
      </motion.div>

      {/* Projects Section */}
      <section id="projects" className="mt-20 px-6">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a 
              key={index} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <span className="mt-3 inline-block text-blue-400">View Project →</span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-20 px-6">
      <h2 className="text-3xl font-bold text-center">Contact Me</h2>
      <motion.div 
        className="mt-6 max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col">
          <label className="text-gray-300">Full Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
          />

          <label className="text-gray-300 mt-4">Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />

          <label className="text-gray-300 mt-4">Message</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            placeholder="Type your message here"
          ></textarea>

          <button 
            type="submit"
            className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {status && <p className="mt-4 text-center text-green-400">{status}</p>}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center p-4 text-gray-400">
        © {new Date().getFullYear()} PANKAJ KUMAR. All rights reserved.
      </footer>
    </div>
  );
}
