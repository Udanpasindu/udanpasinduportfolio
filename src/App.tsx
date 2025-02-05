import { Menu, Github, Linkedin, Mail, Instagram, Facebook } from "lucide-react";
import profileImage from "./images/image1.jpg";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Header */}
      <header className="fixed w-full bg-black/30 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white glitch-effect">Udan Pasindu</h1>
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
          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <img
              src={profileImage}
              alt="Udan Pasindu"
              className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg animate-float"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">Udan Pasindu Jayasekara</h1>
          <p className="text-xl text-gray-300 mb-8 animate-typing border-r-4 border-white pr-3">
            Software Engineering Student at SLIIT
          </p>

          {/* Resume Button */}
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
            <SkillCard title="Frontend" skills={["React", "JavaScript", "TypeScript"]} />
            <SkillCard title="Backend" skills={["Node.js", "MongoDB", "Express", "MySQL"]} />
            <SkillCard title="Tools" skills={["Git & GitHub", "VS Code", "Android Studio", "Linux"]} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center animate-slide-up">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

// Skill Card Component
function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg animate-glow hover:scale-105 transition">
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <ul className="text-gray-300 space-y-2">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

// Project Card Component
function ProjectCard({ title, description, tech, link }: { title: string; description: string; tech: string; link: string }) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-6 hover:transform hover:scale-105 transition duration-300 animate-tech-glow">
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
