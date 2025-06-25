import React, { useRef, useEffect, useState } from 'react';
import { GraduationCap, Heart, TrendingUp, Users, Quote, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: <GraduationCap className="w-7 h-7" />,
      title: "Academic Foundation",
      description: "B.Com graduate currently pursuing MCA at Ganpat University",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Heart className="w-7 h-7" />,
      title: "Design Passion",
      description: "Deeply curious about human behavior and creative storytelling",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Business Insight",
      description: "Strategic thinking with commerce background and business acumen",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "User-Centric",
      description: "Committed to creating meaningful and intuitive user experiences",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const journey = [
    { year: "2020", event: "Started B.Com", description: "Began my journey in commerce" },
    { year: "2022", event: "Discovered UX", description: "Found my passion for design" },
    { year: "2023", event: "Started MCA", description: "Expanded technical knowledge" },
    { year: "2024", event: "Portfolio Launch", description: "Built this React.js portfolio" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f1f5f9%22 fill-opacity=%220.4%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-emerald-100 rounded-full text-purple-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Get to know me
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-emerald-500">Me</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            My journey from commerce to design reflects a unique perspective on creating 
            user experiences that truly matter and drive business success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start mb-20">
          {/* Story Section */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-8 h-8 text-purple-200" />
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50">
                <p className="text-lg leading-relaxed text-slate-700 mb-6">
                  While my academic roots are in <span className="font-semibold text-purple-600">commerce</span> and I'm pursuing <span className="font-semibold text-emerald-600">MCA</span>, 
                  my passion lies in design. I may not be a coder by choice, but I built this portfolio using 
                  React.js and Node.js to demonstrate my <span className="font-semibold">dedication</span>, <span className="font-semibold">self-learning ability</span>, 
                  and <span className="font-semibold">creative problem-solving</span>.
                </p>
                
                <p className="text-lg leading-relaxed text-slate-700 mb-6">
                  My transition from business studies to UI/UX design wasn't accidental—it was driven by a 
                  deep fascination with <span className="font-semibold text-blue-600">human behavior</span>, <span className="font-semibold text-green-600">business strategy</span>, 
                  and the art of <span className="font-semibold text-pink-600">creative storytelling</span> through design.
                </p>
                
                <p className="text-lg leading-relaxed text-slate-700">
                  I believe great design happens at the intersection of business understanding and user empathy. 
                  My commerce background gives me unique insights into creating designs that not only look beautiful 
                  but also drive real business results.
                </p>
              </div>
            </div>

            {/* Journey Timeline */}
            <div className="bg-gradient-to-r from-purple-50 to-emerald-50 p-8 rounded-3xl border border-purple-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">My Journey</h3>
              <div className="space-y-4">
                {journey.map((item, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold mr-4 group-hover:scale-110 transition-transform">
                      {item.year}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.event}</h4>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className={`bg-gradient-to-r ${item.color} text-white p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform inline-block`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote Card */}
            <div className="mt-8 bg-gradient-to-r from-purple-600 to-emerald-500 p-8 rounded-3xl text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <Quote className="w-12 h-12 mb-4 opacity-50" />
              <p className="text-lg font-medium leading-relaxed relative z-10">
                "Design is not just about making things look pretty—it's about solving problems, 
                telling stories, and creating connections that matter."
              </p>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;