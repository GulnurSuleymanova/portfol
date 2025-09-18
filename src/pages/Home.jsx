import gulnur from '../assets/gulnur.png'
import pdf from '../assets/My Resume.pdf'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#DAC5A7] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#DAC5A7] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#DAC5A7] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#DAC5A7] rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className='flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl mx-auto px-6 relative z-10'>
        <div className="text-center lg:text-left flex-1">
          <div className="mb-8 transform hover:scale-105 transition-all duration-500">
            <h1 className="text-5xl lg:text-7xl font-bold text-[#DAC5A7] mb-4 animate-fade-in">
              Hi I'm Gulnur
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#DAC5A7]"></div>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-0 tracking-wide font-mono">
                Frontend Developer
              </h3>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#DAC5A7]"></div>
            </div>
          </div>
          <div className="">
            <p className="text-lg md:text-xl text-[#DAC5A7] leading-relaxed mb-6 font-serif">
              I am a front-end developer dedicated to transforming problems and opportunities into user-focused, functional, and aesthetic digital experiences. By combining beautiful design with user-centered thinking, I create products that are both visually appealing and intuitive to use
            </p>
          </div>
          <div className="mt-12">
          <a
  href={pdf} 
  download
  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#DAC5A7] text-black font-semibold rounded-2xl shadow-2xl hover:shadow-[#DAC5A7]/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
>
  <span className="relative z-10">Download CV</span>
  <svg className="relative z-10 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
  <div className="absolute inset-0 rounded-2xl border-2 border-[#DAC5A7]/40 group-hover:border-[#DAC5A7] transition-colors duration-500"></div>
</a>

          </div>
        </div>

        <div className="relative flex-1 max-w-lg">
          <img
            src={gulnur}
            alt="Gulnur - Frontend Developer"
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full flex justify-center" style={{ border: `2px solid #DAC5A7` }}>
          <div className="w-1 h-3 rounded-full mt-2 animate-pulse" style={{ backgroundColor: '#DAC5A7' }}></div>
        </div>
      </div>
      <section id="about"></section>
      <section id="projects"></section>
      <section id="contact"></section>

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

export default Home;
