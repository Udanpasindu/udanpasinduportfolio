import { Menu, Github, Linkedin, Mail, Instagram, Facebook } from "lucide-react";
import profileImage from "./images/image1.jpg";
import resume from "./assets/Udanpasindujayasekara.pdf"; // Import resume

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
        <div>
          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <img
              src={profileImage}
              alt="Udan Pasindu"
              className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Udan Pasindu Jayasekara</h1>
          <p className="text-xl text-gray-300 mb-8">
            Software Engineering Student at SLIIT
          </p>

          {/* Download Resume Button */}
          <a
            href={resume} // Link to the PDF
            download="Udanpasindujayasekara.pdf"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-md"
          >
            Download Resume
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
