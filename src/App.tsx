import { Menu, Github, Linkedin, Mail, Instagram, Facebook } from "lucide-react";
import profileImage from "./images/image1.jpg";
import resume from "./pdf/Udanpasindu.pdf";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Header */}
      <header className="fixed w-full bg-black/30 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Udan Pasindu</h1>
          <Menu className="text-white md:hidden" />
          <div className="hidden md:flex gap-6 text-gray-300">
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="animate-fade-in-up">
          {/* Photo */}
          <div className="flex justify-center mb-6">
            <img
              src={profileImage}
              alt="Udan Pasindu"
              className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">Udan Pasindu</h1>
          <p className="text-xl text-gray-300 mb-8 animate-slide-up">Software Engineering Student at SLIIT</p>
          {/* Resume Download Button */}
          <a
  href="/pdf/Udanpasindu.pdf"
  download="Udan_Pasindu_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-md animate-fade-in-up"
>
  Download Resume
</a>



        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12 animate-slide-up">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg animate-fade-in-up">
              <h3 className="text-2xl font-bold text-white mb-4">Frontend</h3>
              <ul className="text-gray-300 space-y-2">
                <li>React</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg animate-fade-in-up">
              <h3 className="text-2xl font-bold text-white mb-4">Backend</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Express</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg animate-fade-in-up">
              <h3 className="text-2xl font-bold text-white mb-4">Tools</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Android Studio</li>
                <li>Linux</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center animate-slide-up">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* All Projects */}
            <ProjectCard
              title="Spice Management System"
              description="Streamlines spice production and user purchasing with administrative tools."
              tech="MERN Stack (React, Node.js, MongoDB, Express)"
              link="https://github.com/Udanpasindu/Spice-Management-System.git"
            />
            <ProjectCard
              title="Movie Ticket Booking System"
              description="Web application for booking and managing movie tickets online."
              tech="HTML, CSS, PHP"
              link="https://github.com/Udanpasindu/Movie-Ticket-Booking-System.git"
            />
            <ProjectCard
              title="E-Channeling Web Application"
              description="Allows customers to book doctor appointments and manage reservations."
              tech="Java, CSS, PHP"
              link="https://github.com/Udanpasindu/E-Channeling--Site.git"
            />
            <ProjectCard
              title="Task Management App (ToDo)"
              description="Boosts productivity by organizing tasks with filtering and classification."
              tech="Kotlin, Android Studio"
              link="https://github.com/Udanpasindu/To-Do-App.git"
            />
            <ProjectCard
              title="Dice Game"
              description="A fun dice game with rounds, scoring, and AI competition."
              tech="Kotlin, Android Studio"
              link="https://github.com/Udanpasindu/Dice-game.git"
            />
            <ProjectCard
              title="Mobile Seller App"
              description="A marketplace for mobile phones with a vast catalog and secure payments."
              tech="Kotlin, Android Studio"
              link="https://github.com/Udanpasindu/Mobile-Seller-App.git"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Udan Pasindu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  link: string;
}

function ProjectCard({ title, description, tech, link }: ProjectCardProps) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-6 hover:transform hover:scale-105 transition duration-300">
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <p className="text-blue-400 mb-4">{tech}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        View Project
      </a>
    </div>
  );
}

export default App;
