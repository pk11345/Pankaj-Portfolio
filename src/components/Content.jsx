import React from 'react'

const Content = () => {
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

  return (
    <>
      <section id="projects" className="mt-20 px-6">
        <h2 className="text-3xl font-bold text-center text-white">Projects</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
           <a
              key={index} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
              
            >
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <span className="mt-3 inline-block text-blue-400">View Project →</span>
          </a>
          ))}
        </div>
        
      </section>

    </>
  )
}

export default Content