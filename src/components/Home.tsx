import React, { useEffect, useState } from 'react';
import { ArrowDown, Sparkles, Play, Download } from 'lucide-react';

const Home: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Mouse Follower Effect */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-emerald-500/20 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 animate-fade-in-up">
          {/* Status Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-medium mb-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
            <Sparkles className="w-4 h-4 mr-2 text-emerald-400" />
            Available for new projects
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            Hi, I'm{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-purple-400 to-pink-400 animate-gradient-x">
                Prince
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-purple-400 to-pink-400 rounded-lg blur opacity-20 animate-pulse"></div>
            </span>
          </h1>
          
          {/* Subtitle with Typewriter Effect */}
          <div className="text-2xl md:text-3xl text-white/90 mb-6 font-light">
            <span className="block mb-2">Bridging business with</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-400 font-semibold">
              intuitive design
            </span>
          </div>
          
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed">
            Creating meaningful digital experiences that connect people and purpose through 
            <span className="text-emerald-400 font-medium"> strategic design thinking</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <button
              onClick={scrollToAbout}
              className="group relative bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-10 py-5 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25 flex items-center"
            >
              <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Explore My Work
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity -z-10"></div>
            </button>
            
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-semibold transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center"
            >
              <Download className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Download Resume
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">4+</div>
              <div className="text-white/60 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2+</div>
              <div className="text-white/60 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white/60 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="group flex flex-col items-center text-white/60 hover:text-white transition-all duration-300"
          >
            <span className="text-sm mb-2 group-hover:text-emerald-400">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-emerald-400 transition-colors">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce group-hover:bg-emerald-400"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;