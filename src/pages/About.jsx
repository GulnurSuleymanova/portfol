import { 
  User, Award, Coffee, Clock, Target, Rocket, Users, Book,
  Code, Layout, Zap, Layers, Feather, GitBranch
} from "lucide-react";

const About = () => {
  const skills = [
    { name: "HTML5", level: 90, icon: Code },
    { name: "CSS3", level: 85, icon: Layout },
    { name: "JavaScript", level: 80, icon: Zap },
    { name: "React", level: 75, icon: Layers },
    { name: "Tailwind CSS", level: 85, icon: Feather },
    { name: "Git & GitHub", level: 70, icon: GitBranch },
  ];

  const experiences = [
    {
      year: "2024",
      title: "Frontend Developer",
      company: "Academy",
      description: "Gained practical experience working on multiple projects"
    },
    {
      year: "2023",
      title: "Web Development",
      company: "Self-Learning",
      description: "Started learning modern web technologies"
    }
  ];

  const values = [
    { icon: Target, text: "Goal-Oriented" },
    { icon: Rocket, text: "Innovation" },
    { icon: Users, text: "Collaboration" },
    { icon: Book, text: "Continuous Learning" }
  ];

  const funFacts = [
    { icon: Coffee, number: "∞", label: "Cups of Coffee" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#DAC5A7] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#DAC5A7] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#DAC5A7] rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
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

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-[#DAC5A7] mb-6 animate-fade-in">About Me</h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#DAC5A7]"></div>
            <p className="text-gray-400 text-lg font-serif">About Me</p>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#DAC5A7]"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-[#DAC5A7]/30 transition-all duration-500">
              <h3 className="text-2xl font-bold text-[#DAC5A7] mb-6 flex items-center gap-3">
                <User size={28} className="text-[#DAC5A7]"/>
                My Story
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed font-serif">
                <p>
                  Hi! I'm Gulnur, a Frontend Developer. I started my journey into web development with great enthusiasm and learn new technologies every day.
                </p>
                <p>
                  Coding for me is not just a job, it's a means of creativity. In every project, I focus on user experience to create functional and aesthetic solutions.
                </p>
                <p>
                  I enjoy working with React, JavaScript, and modern CSS technologies. I am always ready for new challenges and strive for excellence.
                </p>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-[#DAC5A7]/30 transition-all duration-500">
              <h3 className="text-xl font-bold text-[#DAC5A7] mb-4 flex items-center gap-3">
                <Award size={24} className="text-[#DAC5A7]" />
                My Values
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, i) => (
                  <div key={i} className="text-center p-3 rounded-xl bg-gray-700/30 hover:bg-[#DAC5A7]/10 transition-colors duration-300">
                    <value.icon className="mx-auto mb-2 text-[#DAC5A7]" size={28} />
                    <div className="text-gray-300 text-sm">{value.text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {funFacts.map((fact, i) => (
                <div key={i} className="text-center bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-[#DAC5A7]/30 hover:transform hover:scale-105 transition-all duration-500 group">
                  <fact.icon className="text-[#DAC5A7] text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto" size={40} />
                  <div className="text-3xl font-bold text-[#DAC5A7] mb-2">{fact.number}</div>
                  <div className="text-gray-400">{fact.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-[#DAC5A7]/30 transition-all duration-500">
              <h3 className="text-2xl font-bold text-[#DAC5A7] mb-6 flex items-center gap-3">
                <Code size={28} className="text-[#DAC5A7]" />
                Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, i) => (
                  <div key={i} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon size={20} className="text-[#DAC5A7]" />
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-[#DAC5A7] text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#DAC5A7] to-yellow-300 h-2 rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-[#DAC5A7]/30"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-[#DAC5A7]/30 transition-all duration-500">
              <h3 className="text-2xl font-bold text-[#DAC5A7] mb-6 flex items-center gap-3">
                <Clock size={28} className="text-[#DAC5A7]" />
                Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, i) => (
                  <div key={i} className="relative pl-8 group">
                    <div className="absolute left-0 top-2 w-3 h-3 bg-[#DAC5A7] rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    {i !== experiences.length - 1 && (
                      <div className="absolute left-1.5 top-5 w-0.5 h-16 bg-gradient-to-b from-[#DAC5A7] to-transparent"></div>
                    )}
                    <div className="bg-gray-700/30 rounded-xl p-4 hover:bg-[#DAC5A7]/5 transition-colors duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-1 bg-[#DAC5A7] text-black text-xs font-bold rounded-full">{exp.year}</span>
                        <h4 className="text-[#DAC5A7] font-semibold">{exp.title}</h4>
                      </div>
                      <p className="text-gray-400 text-sm mb-1">{exp.company}</p>
                      <p className="text-gray-300 text-sm">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
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

export default About;
