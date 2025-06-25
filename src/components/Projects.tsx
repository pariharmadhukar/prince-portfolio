import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, ArrowRight, Users, Zap, Target, Award, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(0);
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

  const projects = [
    {
      id: 1,
      title: "EcoTrade Mobile App",
      category: "Mobile App Design",
      description: "A sustainable marketplace connecting eco-conscious consumers with green businesses through intuitive design and seamless user experience.",
      problem: "Difficulty finding verified sustainable products in one centralized, trustworthy platform",
      solution: "Intuitive mobile marketplace with sustainability ratings, local business discovery, and verified eco-certifications",
      impact: "45% increase in user engagement, 60% improvement in purchase completion rate, 4.8/5 app store rating",
      image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800",
      tools: ["Figma", "Adobe XD", "Principle", "UserTesting", "Maze"],
      duration: "3 months",
      role: "Lead UX/UI Designer",
      highlights: [
        { icon: <Users className="w-5 h-5" />, label: "5,000+ Active Users", color: "text-blue-600" },
        { icon: <Zap className="w-5 h-5" />, label: "4.8/5 App Store Rating", color: "text-emerald-600" },
        { icon: <Target className="w-5 h-5" />, label: "85% Task Success Rate", color: "text-purple-600" }
      ]
    },
    {
      id: 2,
      title: "FinTech Dashboard",
      category: "Web Application",
      description: "Comprehensive financial dashboard for small business owners to track expenses, revenue, and financial health with intelligent insights.",
      problem: "Complex financial data overwhelming small business owners, leading to poor financial decisions",
      solution: "Clean, intuitive dashboard with smart data visualization, predictive analytics, and actionable business insights",
      impact: "40% reduction in time spent on financial reporting, 90% user satisfaction score, 25% increase in business profitability",
      image: "https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg?auto=compress&cs=tinysrgb&w=800",
      tools: ["Figma", "Sketch", "InVision", "Hotjar", "Optimal Workshop"],
      duration: "4 months",
      role: "Senior UX Designer",
      highlights: [
        { icon: <Users className="w-5 h-5" />, label: "2,500+ Businesses", color: "text-blue-600" },
        { icon: <Zap className="w-5 h-5" />, label: "99.9% Uptime", color: "text-emerald-600" },
        { icon: <Award className="w-5 h-5" />, label: "Design Award Winner", color: "text-yellow-600" }
      ]
    },
    {
      id: 3,
      title: "MediCare Patient Portal",
      category: "Healthcare Platform",
      description: "Patient-centered healthcare platform for appointment booking, medical record management, and telemedicine consultations.",
      problem: "Fragmented healthcare experience with poor patient engagement and accessibility issues",
      solution: "Unified platform with intuitive appointment booking, secure medical record access, and WCAG 2.1 AA compliance",
      impact: "50% increase in online appointment bookings, 35% reduction in no-shows, 92% accessibility score",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      tools: ["Figma", "Adobe Creative Suite", "Maze", "Optimal Workshop", "Axure"],
      duration: "5 months",
      role: "UX/UI Designer & Researcher",
      highlights: [
        { icon: <Users className="w-5 h-5" />, label: "15,000+ Patients", color: "text-blue-600" },
        { icon: <Zap className="w-5 h-5" />, label: "4.7/5 User Rating", color: "text-emerald-600" },
        { icon: <Target className="w-5 h-5" />, label: "92% Accessibility Score", color: "text-purple-600" }
      ]
    },
    {
      id: 4,
      title: "EdTech Learning Platform",
      category: "Educational Technology",
      description: "Interactive learning platform designed to make online education more engaging through gamification and social learning features.",
      problem: "Low engagement rates in online learning environments, high dropout rates, and lack of motivation",
      solution: "Gamified learning experience with progress tracking, peer collaboration, and adaptive learning paths",
      impact: "70% increase in course completion rates, 80% improvement in student satisfaction, 3x engagement rate",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
      tools: ["Figma", "Framer", "After Effects", "Useberry", "Miro"],
      duration: "6 months",
      role: "Lead Product Designer",
      highlights: [
        { icon: <Users className="w-5 h-5" />, label: "10,000+ Students", color: "text-blue-600" },
        { icon: <Zap className="w-5 h-5" />, label: "3x Engagement Rate", color: "text-emerald-600" },
        { icon: <Award className="w-5 h-5" />, label: "EdTech Innovation Award", color: "text-yellow-600" }
      ]
    }
  ];

  const nextProject = () => {
    setSelectedProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setSelectedProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-emerald-400 text-sm font-medium mb-6 border border-white/20">
            <Eye className="w-4 h-4 mr-2" />
            Featured Work
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-400">Projects</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Explore how I approach design challenges with user-centered solutions that drive real business impact and create meaningful experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Project Navigation */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-4 sticky top-32">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">All Projects</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={prevProject}
                    className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 backdrop-blur-sm"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextProject}
                    className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 backdrop-blur-sm"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
              
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(index)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-500 group relative overflow-hidden ${
                    selectedProject === index
                      ? 'bg-gradient-to-r from-emerald-500/20 to-purple-500/20 border-l-4 border-emerald-400 backdrop-blur-sm'
                      : 'bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      {selectedProject === index && (
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      )}
                    </div>
                    <p className="text-sm text-white/60 mb-2">{project.category}</p>
                    <p className="text-xs text-white/40">{project.duration} • {project.role}</p>
                  </div>
                  {selectedProject === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-purple-500/10 animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/20">
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden group">
                <img
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-6 right-6">
                  <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110">
                    <ExternalLink size={20} />
                  </button>
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className="bg-emerald-500/20 backdrop-blur-sm text-emerald-400 px-3 py-1 rounded-full text-sm font-medium border border-emerald-400/30">
                    {projects[selectedProject].category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                {/* Project Header */}
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {projects[selectedProject].title}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    {projects[selectedProject].description}
                  </p>
                </div>

                {/* Project Details Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-red-500/10 backdrop-blur-sm p-6 rounded-2xl border border-red-500/20">
                    <h4 className="font-bold text-red-400 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                      Problem
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {projects[selectedProject].problem}
                    </p>
                  </div>
                  <div className="bg-blue-500/10 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20">
                    <h4 className="font-bold text-blue-400 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                      Solution
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {projects[selectedProject].solution}
                    </p>
                  </div>
                  <div className="bg-emerald-500/10 backdrop-blur-sm p-6 rounded-2xl border border-emerald-500/20">
                    <h4 className="font-bold text-emerald-400 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                      Impact
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {projects[selectedProject].impact}
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {projects[selectedProject].highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-full border border-white/10">
                      <div className={highlight.color}>
                        {highlight.icon}
                      </div>
                      <span className="text-white font-medium text-sm">
                        {highlight.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tools & CTA */}
                <div className="border-t border-white/10 pt-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <h4 className="font-bold text-white mb-3">Tools & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[selectedProject].tools.map((tool, index) => (
                          <span
                            key={index}
                            className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center group">
                      View Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;