import calc from "../assets/calcd.png"
import papaj from "../assets/papaj.png"
import starbucks from "../assets/starbucks.png"
import bank from "../assets/bank.png"
import samsung from "../assets/samsung.png"
import landing from "../assets/landing.png"
import polo from "../assets/polo.png"
import botanica from "../assets/botanica.png"

const Projects = () => {
  const projects = [
    {
      title: "Calculator Dark/Light Mode",
      desc: "A calculator app with dark and light mode support.",
      link: "https://calculator-dark-light-mode-iqd5n12oa-gulnurs-projects-d64a01c7.vercel.app/",
      img: calc,
      tech: ["JavaScript", "CSS","HTML"],
      accent: "from-[#DAC5A7] to-yellow-300"
    },
    {
      title: "Papa Johns Clone",
      desc: "A fully functional clone of Papa Johns pizza ordering website.",
      link: "https://github.com/GulnurSuleymanova/Papa-Jhons",
      img: papaj,
      tech: ["JavaScript", "HTML", "CSS"],
      accent: "from-[#DAC5A7] to-red-300"
    },
    {
      title: "Starbucks Clone",
      desc: "An interactive clone of the official Starbucks website.",
      link: "https://github.com/GulnurSuleymanova/Starbucks",
      img: starbucks,
      tech: ["HTML", "CSS", "JavaScript"],
      accent: "from-[#DAC5A7] to-green-400"
    },
    {
      title: "Bank Home Page Clone",
      desc: "A professional clone of a bank homepage.",
      link: "https://github.com/GulnurSuleymanova/Bank-home-page-clone",
      img: bank,
      tech: ["HTML", "CSS", "JavaScript"],
      accent: "from-[#DAC5A7] to-cyan-300"
    },
    {
      title: "Samsung US Clone",
      desc: "A pixel-perfect clone of the official Samsung US website.",
      link: "https://github.com/GulnurSuleymanova/SamsungUs-clone",
      img: samsung,
      tech: ["React", "CSS"],
      accent: "from-[#DAC5A7] to-purple-300"
    },
    {
      title: "Landing Page",
      desc: "A modern and responsive landing page design.",
      link: "https://github.com/GulnurSuleymanova/landing-page",
      img: landing,
      tech: ["HTML", "CSS"],
      accent: "from-[#DAC5A7] to-green-300"
    },
    {
      title: "Polo 360",
      desc: "A project showcasing 360° product view.",
      link: "https://github.com/GulnurSuleymanova/polo-360",
      img: polo,
      tech: [ "CSS", "HTML"],
      accent: "from-[#DAC5A7] to-blue-300"
    },
    {
      title: "Botanica E-commerce",
      desc: "An interactive e-commerce project built with React and Tailwind CSS.",
      link: "#",
      img: botanica,
      tech: ["React", "Tailwind CSS"],
      accent: "from-[#DAC5A7] to-pink-300"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#DAC5A7] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#DAC5A7] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-[#DAC5A7] rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#DAC5A7] rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-5xl lg:text-6xl font-bold text-[#DAC5A7] mb-6 animate-fade-in">
          My Projects
        </h2>
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#DAC5A7]"></div>
          <p className="text-gray-400 text-lg font-serif">My Creative Works</p>
          <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#DAC5A7]"></div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 hover:border-[#DAC5A7]/30 shadow-2xl hover:shadow-[#DAC5A7]/20 transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#DAC5A7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

            <div className="relative overflow-hidden rounded-t-3xl">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-86 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-black/70 backdrop-blur-sm text-xs font-medium text-[#DAC5A7] rounded-full border border-[#DAC5A7]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#DAC5A7] text-black font-semibold rounded-2xl shadow-lg hover:shadow-[#DAC5A7]/40 transition-all duration-300 flex items-center gap-2 hover:scale-105"
                  >
                    View Demo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 relative z-20">
              <h3 className="text-2xl font-bold text-[#DAC5A7] mb-3 group-hover:text-white transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm group-hover:text-gray-300 transition-colors duration-300">
                {project.desc}
              </p>
            </div>

            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#DAC5A7]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#DAC5A7]/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </div>
        ))}
      </div>

      <div className="text-center mt-20 relative z-10">
        <div className="mb-8">
          <p className="text-gray-400 mb-6 text-lg font-serif">Want to see more projects?</p>
        </div>
        <a
          href="#contact"
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#DAC5A7] text-black font-semibold rounded-2xl shadow-2xl hover:shadow-[#DAC5A7]/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#DAC5A7] to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
          <span className="relative z-10">Contact Me</span>
          <svg className="relative z-10 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <div className="absolute inset-0 rounded-2xl border-2 border-[#DAC5A7]/40 group-hover:border-[#DAC5A7] transition-colors duration-500"></div>
        </a>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Projects;
