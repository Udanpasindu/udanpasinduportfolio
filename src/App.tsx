import { motion } from "framer-motion";
import { Menu, Github, Linkedin, Mail, X, Sun, Moon } from "lucide-react";
import profileImage from "./images/image1.jpg";
import aboutMePhoto from "./images/aboutmephoto.jpeg";
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
import rahulaLogo from "./images/rahula.png";
import sliitLogo from "./images/sliit.png";

// Initialize EmailJS
emailjs.init('prdfjDCGNQCSjo4LK');

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  // WhatsApp configuration
  const whatsappNumber = "+94717325275";
  const whatsappMessage = "Hi%20Udan%2C%20I%20checked%20your%20portfolio%20site%20and%20I%20want%20to%20talk%20with%20you%0A";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

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
        alert("Message Sent Successfully!");
      }, (error) => {
        alert("Failed to send message.");
      });
    e.currentTarget.reset();
  };

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900' : 'bg-gradient-to-br from-gray-100 via-blue-100 to-gray-100'} relative overflow-hidden`}>
      
      {/* WhatsApp Floating Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-8 h-8"
          />
        </a>
      </motion.div>

      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <Slider {...sliderSettings}>
          <div><div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage1})`, filter: "blur(8px)" }}></div></div>
          <div><div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage2})`, filter: "blur(8px)" }}></div></div>
          <div><div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage3})`, filter: "blur(8px)" }}></div></div>
        </Slider>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className={`fixed w-full ${isDarkTheme ? 'bg-black/30' : 'bg-white/30'} backdrop-blur-sm z-50`}>
          <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className={`text-2xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>Udan Pasindu</h1>
            <div className="flex items-center gap-4">
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${isDarkTheme ? 'bg-gray-700' : 'bg-gray-200'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isDarkTheme ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-700" />}
              </motion.button>
              <div className="md:hidden">
                {isMobileMenuOpen ? (
                  <X className={`${isDarkTheme ? 'text-white' : 'text-gray-900'}`} onClick={() => setIsMobileMenuOpen(false)} />
                ) : (
                  <Menu className={`${isDarkTheme ? 'text-white' : 'text-gray-900'}`} onClick={() => setIsMobileMenuOpen(true)} />
                )}
              </div>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#home" className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} hover:text-blue-400`}>Home</a>
              <a href="#about" className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} hover:text-blue-400`}>About</a>
              <a href="#skills" className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} hover:text-blue-400`}>Skills</a>
              <a href="#projects" className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} hover:text-blue-400`}>Projects</a>
              <a href="#education" className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} hover:text-blue-400`}>Education</a>
              <a href="#contact" className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} hover:text-blue-400`}>Contact</a>
            </div>
          </nav>
          {isMobileMenuOpen && (
            <div className={`md:hidden ${isDarkTheme ? 'bg-black/70' : 'bg-white/70'} p-4`}>
              <a href="#home" className={`block ${isDarkTheme ? 'text-white' : 'text-gray-900'} py-2`}>Home</a>
              <a href="#about" className={`block ${isDarkTheme ? 'text-white' : 'text-gray-900'} py-2`}>About</a>
              <a href="#skills" className={`block ${isDarkTheme ? 'text-white' : 'text-gray-900'} py-2`}>Skills</a>
              <a href="#projects" className={`block ${isDarkTheme ? 'text-white' : 'text-gray-900'} py-2`}>Projects</a>
              <a href="#education" className={`block ${isDarkTheme ? 'text-white' : 'text-gray-900'} py-2`}>Education</a>
              <a href="#contact" className={`block ${isDarkTheme ? 'text-white' : 'text-gray-900'} py-2`}>Contact</a>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center text-center px-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <motion.div className="flex justify-center mb-6" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
              <img src={profileImage} alt="Profile" className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg" />
            </motion.div>
            <motion.h1 className={`text-5xl md:text-7xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-900'} mb-6`} initial={{ x: -50 }} animate={{ x: 0 }}>
              Udan Pasindu Jayasekara
            </motion.h1>
            <p className={`text-xl ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mb-8`}>Software Engineering Student</p>
            <motion.a
              href={resume}
              download
              className={`${isDarkTheme ? 'bg-blue-600' : 'bg-blue-500'} text-white px-6 py-3 rounded-lg shadow-md`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </section>

        {/* About Me Section */}
        <section id="about" className={`py-20 px-4 ${isDarkTheme ? 'bg-gray-800/70' : 'bg-gray-200/70'}`}>
          <div className="container mx-auto">
            <motion.h2 className={`text-3xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-900'} mb-12 text-center`}>
              About Me
            </motion.h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div 
                className="w-full md:w-1/3"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={aboutMePhoto}
                  alt="About Me"
                  className="w-full h-auto rounded-lg shadow-xl border-4 border-blue-500/30"
                />
              </motion.div>
              <motion.div
                className="w-full md:w-2/3"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className={`text-lg ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} text-justify`}>
                  Innovative and driven third-year IT undergraduate at SLIIT with a passion for building intelligent software solutions.
                  Proficient in React, TypeScript, JavaScript, Java, and C++, with hands-on experience in full-stack development, mobile applications, and
                  software testing. A problem-solver at heart, I thrive in dynamic environments, quickly adapting to new technologies
                  to create impactful solutions. Seeking an internship to contribute my technical expertise, analytical mindset, and
                  creativity to real-world projects while continuously expanding my skill set.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`py-20 px-4 ${isDarkTheme ? 'bg-gray-800/70' : 'bg-gray-200/70'}`}>
          <div className="container mx-auto text-center">
            <motion.h2 className={`text-3xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-900'} mb-12`}>
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
            <motion.h2 className={`text-3xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-900'} mb-12 text-center`}>
              Projects
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Website for Photographer"
                description="Developed a React TypeScript portfolio website for a photographer, showcasing recent works, albums, and integrating EmailJS for client communication."
                tech="React TypeScript"
                link="https://github.com/Udanpasindu/web-site-for-photographer.git"
                deployedLink="https://web-site-for-photographer.vercel.app/"
                isDarkTheme={isDarkTheme}
              />
              <ProjectCard
                title="Website for Restaurant"
                description="Developed a responsive restaurant website using React and TypeScript with modern UI. Integrated WhatsApp Business ordering system and optimized performance."
                tech="React TypeScript"
                link="https://github.com/Udanpasindu/Web-site-for-Restaurant.git"
                isDarkTheme={isDarkTheme}
              />
              <ProjectCard
                title="Portfolio Website"
                description="Developed a professional portfolio website using React and TypeScript, showcasing projects with EmailJS contact functionality."
                tech="React TypeScript"
                link="https://github.com/Udanpasindu/udanpasinduportfolio.git"
                deployedLink="https://www.udanpasindu.me/"
                isDarkTheme={isDarkTheme}
              />
              <ProjectCard
                title="Spice Management System"
                description="Streamlines spice production and user purchasing with administrative tools using MERN stack."
                tech="MERN Stack"
                link="https://github.com/Udanpasindu/Spice-Management-System.git"
                isDarkTheme={isDarkTheme}
              />
              <ProjectCard
                title="Movie Ticket Booking System"
                description="Web application for booking and managing movie tickets online using PHP and MySQL."
                tech="HTML, CSS, PHP"
                link="https://github.com/Udanpasindu/Movie-Ticket-Booking-System.git"
                isDarkTheme={isDarkTheme}
              />
              <ProjectCard
                title="E-Channeling Web Application"
                description="Doctor appointment booking system with reservation management features."
                tech="Java, CSS, PHP"
                link="https://github.com/Udanpasindu/E-Channeling--Site.git"
                isDarkTheme={isDarkTheme}
              />
              <ProjectCard
                title="Task Management Mobile App"
                description="ToDo app with task categorization, prioritization, reminders, and offline storage."
                tech="Kotlin, Android Studio"
                link="https://github.com/Udanpasindu/To-Do-App.git"
                isDarkTheme={isDarkTheme}
              />
              <ProjectCard
                title="Dice Game Mobile App"
                description="Interactive dice game with 5-round battles against computer opponent."
                tech="Kotlin, Android Studio"
                link="https://github.com/Udanpasindu/Dice-game.git"
                isDarkTheme={isDarkTheme}
              />
              <ProjectCard
                title="Mobile Marketplace App"
                description="E-commerce app for mobile devices with secure payments and admin panel."
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
            <motion.h2 className={`text-3xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-900'} mb-12`}>
              Education
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <EducationCard
                logo={rahulaLogo}
                title="Rahula College Matara"
                period="2007 - 2020"
                description="Secondary Education"
                isDarkTheme={isDarkTheme}
              />
              <EducationCard
                logo={sliitLogo}
                title="SLIIT"
                period="2022 - Present"
                description="BSc (Hons) in Information Technology"
                isDarkTheme={isDarkTheme}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`py-20 px-4 ${isDarkTheme ? 'bg-gray-800/70' : 'bg-gray-200/70'}`}>
          <div className="container mx-auto text-center">
            <motion.h2 className={`text-3xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-900'} mb-12`}>
              Contact
            </motion.h2>
            <div className="flex justify-center gap-8 mb-12">
              <SocialIcon href="https://github.com/Udanpasindu" icon={<Github />} isDarkTheme={isDarkTheme} />
              <SocialIcon href="https://linkedin.com/in/udanpasindu" icon={<Linkedin />} isDarkTheme={isDarkTheme} />
              <SocialIcon href="mailto:udanpasindu934@gmail.com" icon={<Mail />} isDarkTheme={isDarkTheme} />
            </div>
            <motion.div className={`max-w-lg mx-auto ${isDarkTheme ? 'bg-gray-700' : 'bg-gray-100'} p-8 rounded-lg shadow-lg`}>
              <form onSubmit={sendEmail}>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  className={`w-full p-3 mb-4 rounded-md ${isDarkTheme ? 'bg-gray-600' : 'bg-gray-200'}`}
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  className={`w-full p-3 mb-4 rounded-md ${isDarkTheme ? 'bg-gray-600' : 'bg-gray-200'}`}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className={`w-full p-3 mb-4 rounded-md ${isDarkTheme ? 'bg-gray-600' : 'bg-gray-200'}`}
                />
                <button type="submit" className={`${isDarkTheme ? 'bg-blue-600' : 'bg-blue-500'} text-white px-6 py-3 rounded-lg`}>
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`${isDarkTheme ? 'bg-black/30' : 'bg-white/30'} py-8`}>
          <div className="container mx-auto px-4 text-center">
            <p className={isDarkTheme ? 'text-gray-400' : 'text-gray-700'}>© 2025 Udan Pasindu. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Components
function SkillCard({ title, skills, isDarkTheme }: { title: string; skills: string[]; isDarkTheme: boolean }) {
  return (
    <motion.div className={`${isDarkTheme ? 'bg-gray-800' : 'bg-gray-200'} p-6 rounded-lg shadow-lg`}>
      <h3 className={`text-2xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-900'} mb-4`}>{title}</h3>
      <ul className={`space-y-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
        {skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
    </motion.div>
  );
}

function ProjectCard({ title, description, tech, link, deployedLink, isDarkTheme }: { title: string; description: string; tech: string; link: string; deployedLink?: string; isDarkTheme: boolean }) {
  return (
    <motion.div className={`${isDarkTheme ? 'bg-gray-800/50' : 'bg-gray-200/50'} p-6 rounded-lg`}>
      <h3 className={`text-xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-900'} mb-3`}>{title}</h3>
      <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mb-4`}>{description}</p>
      <p className={`${isDarkTheme ? 'text-blue-400' : 'text-blue-600'} mb-4`}>{tech}</p>
      <div className="flex gap-4">
        <a href={link} className={`${isDarkTheme ? 'bg-blue-600' : 'bg-blue-500'} text-white px-4 py-2 rounded`}>
          View Code
        </a>
        {deployedLink && (
          <a href={deployedLink} className={`${isDarkTheme ? 'bg-green-600' : 'bg-green-500'} text-white px-4 py-2 rounded`}>
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

function EducationCard({ logo, title, period, description, isDarkTheme }: { logo: string; title: string; period: string; description: string; isDarkTheme: boolean }) {
  return (
    <motion.div className={`${isDarkTheme ? 'bg-gray-800/50' : 'bg-gray-200/50'} p-6 rounded-lg`}>
      <img src={logo} alt="Logo" className="w-24 h-24 mx-auto mb-4" />
      <h3 className={`text-2xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-900'} mb-2`}>{title}</h3>
      <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mb-2`}>{period}</p>
      <p className={`${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
    </motion.div>
  );
}

function SocialIcon({ href, icon, isDarkTheme }: { href: string; icon: JSX.Element; isDarkTheme: boolean }) {
  return (
    <motion.a
      href={href}
      className={`p-4 rounded-full ${isDarkTheme ? 'bg-blue-600' : 'bg-blue-500'} hover:bg-blue-700`}
      whileHover={{ scale: 1.1 }}
    >
      {icon}
    </motion.a>
  );
}

export default App;