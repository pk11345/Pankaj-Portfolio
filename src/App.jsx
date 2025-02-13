import React, { useRef, useState } from 'react'
import HeroSection from './components/HeroSection'
import Content from './components/Content'
import Nav from './components/Nav'
import emailjs from "@emailjs/browser";


const App = () => {
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
   <>
   <div className='bg-gray-900 min-h-screen'>
    <Nav/>
   <HeroSection/>
   <Content/>
    {/* Contact Section */}
    <section id="contact" className="mt-20 px-6">
      <h2 className="text-3xl font-bold text-center text-white">Contact Me</h2>
      <div 
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
        </div>
      </section>
   <footer className="mt-20 text-center p-4 text-gray-400">
        © {new Date().getFullYear()} PANKAJ KUMAR. All rights reserved.
      </footer>
   </div>
   </>
  )
}

export default App