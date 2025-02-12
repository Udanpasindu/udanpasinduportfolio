import { motion } from "framer-motion";
import { Menu, Github, Linkedin, Mail, X, Sun, Moon } from "lucide-react";
import profileImage from "./images/image1.jpg";
import bgImage1 from "./images/bgimage.jpg";
import bgImage2 from "./images/bgimage.jpg";
import bgImage3 from "./images/bgimage.jpg";
import resume from "./Assets/Udanpasindujayasekara.pdf";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import emailjs from 'emailjs-com';

// Import logos
import rahulaLogo from "./images/rahula.png"; // Rahula College logo
import sliitLogo from "./images/sliit.png"; // SLIIT logo

// Initialize EmailJS with your Public Key
emailjs.init('prdfjDCGNQCSjo4LK');

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true); // Default to dark theme

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_77ce91g', 'template_m8eclgi', e.currentTarget, 'prdfjDCGNQCSjo4LK')
      .then((result) => {
        console.log(result.text);
        alert("Message Sent Successfully!");
      }, (error) => {
        console.log(error.text);
        alert("Failed to send the message, please try again.");
      });

    e.currentTarget.reset();
  };

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900' : 'bg-gradient-to-br from-gray-100 via-blue-100 to-gray-100'} relative overflow-hidden`}>
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <Slider {...sliderSettings}>
          <div>
            <div
              className="w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${bgImage1})`, filter: "blur(8px)", WebkitFilter: "blur(8px)" }}
            ></div>
          </div>
          <div>
            <div
              className="w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${bgImage2})`, filter: "blur(8px)", WebkitFilter: "blur(8px)" }}
            ></div>
          </div>
          <div>
            <div
              className="w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${bgImage3})`, filter: "blur(8px)", WebkitFilter: "blur(8px)" }}
            ></div>
          </div>
        </Slider>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className={`fixed w-full ${isDarkTheme ? 'bg-black/30' : 'bg-white/30'} backdrop-blur-sm z-50`}>
          <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className={`text-2xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-900'} glitch-effect`}>Udan Pasindu</h1>
            <div className="flex items-center gap-4">
              {/* Theme Toggle Button */}
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${isDarkTheme ? 'bg-gray-700' : 'bg-gray-200'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isDarkTheme ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-700" />}
              </motion.button>
              {/* Mobile Menu Toggle */}
              <div className="md:hidden">
                {isMobileMenuOpen ? (
                  <X
                    className={`${isDarkTheme ? 'text-white' : 'text-gray-900'} cursor-pointer`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                ) : (
                  <Menu
                    className={`${isDarkTheme ? 'text-white' : 'text-gray-900'} cursor-pointer`}
                    onClick={() => setIsMobileMenuOpen(true)}
                  />
                )}
              </div>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6">
              <a href="#home" className={`${isDarkTheme ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition`}>Home</a>
              <a href="#about" className={`${isDarkTheme ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition`}>About Me</a>
              <a href="#skills" className={`${isDarkTheme ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition`}>Skills</a>
              <a href="#projects" className={`${isDarkTheme ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition`}>Projects</a>
              <a href="#education" className={`${isDarkTheme ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition`}>Education</a>
              <a href="#contact" className={`${isDarkTheme ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition`}>Contact</a>
            </div>
          </nav>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className={`md:hidden ${isDarkTheme ? 'bg-black/70' : 'bg-white/70'} backdrop-blur-sm p-4`}>
              <a href="#home" className={`block ${isDarkTheme ? 'text-white' : 'text-gray-900'} py-2 hover:text-blue-400`} onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="#about" className={`block ${isDarkTheme ? 'text-white' : 'text-gray-900'} py-2 hover:text-blue-400`} onClick={() => setIsMobileMenuOpen(false)}>About Me</a>
              <a href="#skills" className={`block ${isDarkTheme ? 'text-white' : 'text-gray-900'} py-2 hover:text-blue-400`} onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
              <a href="#projects" className={`block ${isDarkTheme ? 'text-white' : 'text-gray-900'} py-2 hover:text-blue-400`} onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
              <a href="#education" className={`block ${isDarkTheme ? 'text-white' : 'text-gray-900'} py-2 hover:text-blue-400`} onClick={() => setIsMobileMenuOpen(false)}>Education</a>
              <a href="#contact" className={`block ${isDarkTheme ? 'text-white' : 'text-gray-900'} py-2 hover:text-blue-400`} onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
          <motion.div 
            className="animate-fade-in-up"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Profile Image with Floating Effect */}
            <motion.div 
              className="flex justify-center mb-6"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <img
                src={profileImage}
                alt="Udan Pasindu"
                className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg"
              />
            </motion.div>
            
            {/* Name Animation */}
            <motion.h1
              className={`text-5xl md:text-7xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-900'} mb-6`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Udan Pasindu Jayasekara
            </motion.h1>
            
            {/* Description */}
            <p className={`text-xl ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mb-8`}>
              Software Engineering Student at SLIIT
            </p>
            
            {/* Download Resume Button with Hover Effect */}
            <motion.a
              href={resume}
              download="Udanpasindujayasekara.pdf"
              className={`${isDarkTheme ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'} px-6 py-3 rounded-lg shadow-md transition-transform`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </section>

        {/* About Me Section */}
        <section id="about" className={`py-20 px-4 ${isDarkTheme ? 'bg-gray-800/70' : 'bg-gray-200/70'} flex flex-col items-center text-center`}>
          <motion.h2
            className={`text-3xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-900'} mb-6`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className={`text-lg ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} max-w-2xl`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Innovative and driven third-year IT undergraduate at SLIIT with a passion for building intelligent software solutions.
            Proficient in React, TypeScript, JavaScript, Java, and C++, with hands-on experience in full-stack development, mobile applications, and
            software testing. A problem-solver at heart, I thrive in dynamic environments, quickly adapting to new technologies
            to create impactful solutions. Seeking an internship to contribute my technical expertise, analytical mindset, and
            creativity to real-world projects while continuously expanding my skill set.
          </motion.p>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`py-20 px-4 ${isDarkTheme ? 'bg-gray-800/70' : 'bg-gray-200/70'}`}>
          <div className="container mx-auto text-center">
            <motion.h2
              className={`text-3xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-900'} mb-12`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Skills
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              <SkillCard title="Frontend" skills={["React", "JavaScript", "TypeScript"]} isDarkTheme={isDarkTheme} />
              <SkillCard title="Backend" skills={["Node.js", "MongoDB", "Express", "MySQL"]} isDarkTheme={isDarkTheme} />
              <SkillCard title="Tools" skills={["Git & GitHub", "VS Code", "Android Studio", "Linux"]} isDarkTheme={isDarkTheme} />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`py-20 px-4 ${isDarkTheme ? 'bg-gray-800/70' : 'bg-gray-200/70'}`}>
          <div className="container mx-auto">
            <motion.h2
              className={`text-3xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-900'} mb-12 text-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Projects
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Website for photographer"
                description="Developed a React TypeScript portfolio website for a photographer, showcasing recent works, 
                albums, and integrating EmailJS for client communication."
                tech="React TypeScript"
                link="https://github.com/Udanpasindu/web-site-for-photographer.git"
                deployedLink="https://web-site-for-photographer.vercel.app/"
                isDarkTheme={isDarkTheme}
              />
              <ProjectCard
                title="Website for Restaurant"
                description="Developed a responsive restaurant website using React and TypeScript with a modern, u
                ser-friendly interface. Designed an intuitive layout to showcase the menu, services, and special 
                offers. Integrated an Order Now button linking to 
                WhatsApp Business for easy ordering. Ensured smooth navigation, responsiveness, and performance optimization 
                for better user engagement."
                tech="React TypeScript"
                link="https://github.com/Udanpasindu/Web-site-for-Restaurant.git"
                isDarkTheme={isDarkTheme}
              />
              <ProjectCard
                title="Portfolio website"
                description="Developed a professional portfolio website using React and TypeScript, 
                showcasing recent projects. Integrated contact functionality with EmailJS to facilitate client communication."
                tech="React TypeScript"
                link="https://github.com/Udanpasindu/udanpasinduportfolio.git"
                deployedLink="https://www.udanpasindu.me/"
                isDarkTheme={isDarkTheme}
              />
              <ProjectCard
                title="Spice Management System"
                description="Streamlines spice production and user purchasing with administrative tools."
                tech="MERN Stack (React, Node.js, MongoDB, Express)"
                link="https://github.com/Udanpasindu/Spice-Management-System.git"
                isDarkTheme={isDarkTheme}
              />
              <ProjectCard
                title="Movie Ticket Booking System"
                description="Web application for booking and managing movie tickets online."
                tech="HTML, CSS, PHP"
                link="https://github.com/Udanpasindu/Movie-Ticket-Booking-System.git"
                isDarkTheme={isDarkTheme}
              />
              <ProjectCard
                title="E-Channeling Web Application"
                description="Allows customers to book doctor appointments and manage reservations."
                tech="Java, CSS, PHP"
                link="https://github.com/Udanpasindu/E-Channeling--Site.git"
                isDarkTheme={isDarkTheme}
              />
              <ProjectCard
                title="Task Management Mobile Application- ToDo"
                description="Developed a task management app to help users organize daily activities with features like task categorization, prioritization, and reminders. Users can track task completion and filter tasks by due dates or categories. 
                The app offers an intuitive UI/UX and offline accessibility with local database storage.."
                tech="Kotlin, Android Studio"
                link="https://github.com/Udanpasindu/To-Do-App.git"
                isDarkTheme={isDarkTheme}
              />
              <ProjectCard
                title=" Gaming Mobile Application –Dice Game"
                description="Developed an interactive dice game where users compete against a computer in a five-round battle. Features include customizable winning scores, a real-time score counter, and a turn-based system. Designed with an
                 engaging UI and smooth animations for an immersive experience."
                tech="Kotlin, Android Studio"
                link="https://github.com/Udanpasindu/Dice-game.git"
                isDarkTheme={isDarkTheme}
              />
              <ProjectCard
                title="Marketplace Mobile Application –Mobile Seller"
                description="Developed a mobile commerce app for browsing, comparing, and purchasing mobile phones. Features include secure payments, personalized recommendations, wish lists, and order tracking. 
                An admin panel allows efficient product and inventory management."
                tech="Kotlin, Android Studio"
                link="https://github.com/Udanpasindu/Mobile-Seller-App.git"
                isDarkTheme={isDarkTheme}
              />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className={`py-20 px-4 ${isDarkTheme ? 'bg-gray-800/70' : 'bg-gray-200/70'}`}>
          <div className="container mx-auto text-center">
            <motion.h2
              className={`text-3xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-900'} mb-12`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Education
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Rahula College Matara */}
              <motion.div
                className={`${isDarkTheme ? 'bg-gray-800/50' : 'bg-gray-200/50'} rounded-lg p-6`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={rahulaLogo}
                  alt="Rahula College Matara"
                  className="w-24 h-24 mx-auto mb-4"
                />
                <h3 className={`text-2xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-900'} mb-2`}>Rahula College Matara</h3>
                <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mb-2`}>2007 - 2020</p>
                <p className={`${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>Secondary Education</p>
              </motion.div>

              {/* SLIIT */}
              <motion.div
                className={`${isDarkTheme ? 'bg-gray-800/50' : 'bg-gray-200/50'} rounded-lg p-6`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={sliitLogo}
                  alt="SLIIT"
                  className="w-24 h-24 mx-auto mb-4"
                />
                <h3 className={`text-2xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-900'} mb-2`}>Sri Lanka Institute of Information Technology (SLIIT)</h3>
                <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mb-2`}>2021 - Present</p>
                <p className={`${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>BSc (Hons) in Information Technology</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`py-20 px-4 ${isDarkTheme ? 'bg-gray-800/70' : 'bg-gray-200/70'}`}>
          <div className="container mx-auto text-center">
            <motion.h2
              className={`text-3xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-900'} mb-12`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Contact
            </motion.h2>

            <div className="flex justify-center gap-8 mb-12">
              {/* Social Icons */}
              <a href="https://github.com/Udanpasindu" target="_blank" rel="noopener noreferrer">
                <motion.div
                  className={`${isDarkTheme ? 'text-white bg-blue-600' : 'text-gray-900 bg-blue-500'} p-4 rounded-full hover:bg-blue-700 transition`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-6 h-6" />
                </motion.div>
              </a>
              <a href="https://www.linkedin.com/in/udanpasindu/" target="_blank" rel="noopener noreferrer">
                <motion.div
                  className={`${isDarkTheme ? 'text-white bg-blue-600' : 'text-gray-900 bg-blue-500'} p-4 rounded-full hover:bg-blue-700 transition`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.div>
              </a>
              <a href="mailto:udanpasindu934@gmail.com" target="_blank" rel="noopener noreferrer">
                <motion.div
                  className={`${isDarkTheme ? 'text-white bg-blue-600' : 'text-gray-900 bg-blue-500'} p-4 rounded-full hover:bg-blue-700 transition`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-6 h-6" />
                </motion.div>
              </a>
            </div>

            {/* Contact Form */}
            <motion.div
              className={`max-w-lg mx-auto ${isDarkTheme ? 'bg-gray-700' : 'bg-gray-100'} p-8 rounded-lg shadow-lg`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <form onSubmit={sendEmail}>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  className={`w-full p-3 mb-4 rounded-md ${isDarkTheme ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-900'}`}
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  className={`w-full p-3 mb-4 rounded-md ${isDarkTheme ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-900'}`}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className={`w-full p-3 mb-4 rounded-md ${isDarkTheme ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-900'}`}
                />
                <button
                  type="submit"
                  className={`${isDarkTheme ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'} px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition`}
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`${isDarkTheme ? 'bg-black/30 text-gray-400' : 'bg-white/30 text-gray-700'} py-8`}>
          <div className="container mx-auto px-4 text-center">
            <p>© 2025 Udan Pasindu. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Skill Card Component
function SkillCard({ title, skills, isDarkTheme }: { title: string; skills: string[]; isDarkTheme: boolean }) {
  return (
    <motion.div 
      className={`relative ${isDarkTheme ? 'bg-gray-800 border-gray-700' : 'bg-gray-200 border-gray-300'} p-6 rounded-lg shadow-lg border text-center transition-all`}
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.8)",
      }}
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${isDarkTheme ? 'from-blue-500 to-cyan-500' : 'from-blue-400 to-cyan-400'} opacity-30 blur-lg rounded-lg`}></div>
      <h3 className={`text-2xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-900'} mb-4 relative z-10`}>{title}</h3>
      <ul className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} space-y-2 relative z-10`}>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </motion.div>
  );
}

// Project Card Component
function ProjectCard({ title, description, tech, link, deployedLink, isDarkTheme }: { title: string; description: string; tech: string; link: string; deployedLink?: string; isDarkTheme: boolean }) {
  return (
    <motion.div 
      className={`${isDarkTheme ? 'bg-gray-800/50' : 'bg-gray-200/50'} rounded-lg p-6 hover:transform hover:scale-105 transition duration-300`}
      whileHover={{ scale: 1.05 }}
    >
      <h3 className={`text-xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-900'} mb-3`}>{title}</h3>
      <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mb-4`}>{description}</p>
      <p className={`${isDarkTheme ? 'text-blue-400' : 'text-blue-600'} mb-4`}>{tech}</p>
      <div className="flex gap-4">
        <a href={link} target="_blank" rel="noopener noreferrer" className={`${isDarkTheme ? 'text-white bg-blue-600' : 'text-white bg-blue-500'} px-4 py-2 rounded hover:bg-blue-700 transition`}>
          View Code
        </a>
        {deployedLink && (
          <a href={deployedLink} target="_blank" rel="noopener noreferrer" className={`${isDarkTheme ? 'text-white bg-green-600' : 'text-white bg-green-500'} px-4 py-2 rounded hover:bg-green-700 transition`}>
            Visit Deployed Site
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default App;