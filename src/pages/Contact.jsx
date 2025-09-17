import { Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon:     <Mail />,
      title: "Email",
      value: "suleymanovagulnur13@gmail.com",
      href: "mailto:suleymanovagulnur13@gmail.com",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon:    <Linkedin />,
      title: "LinkedIn",
      value: "Gulnur Suleymanova",
      href: "https://linkedin.com/in/gulnur-suleymanova",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon:    <Github />,
      title: "GitHub",
      value: "GulnurSuleymanova",
      href: "https://github.com/GulnurSuleymanova",
      color: "from-gray-400 to-gray-600"
    },
  ];


  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#DAC5A7] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#DAC5A7] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#DAC5A7] rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
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
          <h2 className="text-5xl lg:text-6xl font-bold text-[#DAC5A7] mb-6 animate-fade-in">
            Contact
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#DAC5A7]"></div>
            <p className="text-gray-400 text-lg font-serif">Get In Touch</p>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#DAC5A7]"></div>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-serif">
            Want to collaborate on a project or ask a question? 
            Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              className="group block p-4 bg-gray-700/30 rounded-xl hover:bg-[#DAC5A7]/10 transition-all duration-300 hover:scale-105 w-84"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${contact.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {contact.icon}
                </div>
                <div>
                  <h4 className="text-[#DAC5A7] font-semibold group-hover:text-white transition-colors">
                    {contact.title}
                  </h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {contact.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
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

export default Contact;
