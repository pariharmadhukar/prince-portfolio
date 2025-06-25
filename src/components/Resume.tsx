import React, { useRef, useEffect, useState } from 'react';
import { Download, FileText, Calendar, MapPin, GraduationCap, Briefcase, Award, ExternalLink } from 'lucide-react';

const Resume: React.FC = () => {
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

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Ganpat University",
      period: "2023 - Present",
      status: "Pursuing",
      gpa: "6.65/10",
      highlights: ["Advanced Software Engineering", "Database Management", "UI/UX Design Principles"]
    },
    {
      degree: "Bachelor of Commerce (B.Com)",
      institution: "University of Gujarat",
      period: "2020 - 2023",
      status: "Completed",
      gpa: "6.68/10",
      highlights: ["Business Strategy", "Financial Analysis", "Marketing Fundamentals"]
    }
  ];

  const experience = [
    {
      role: "UI/UX Design Freelancer",
      company: "Self-Employed",
      period: "2023 - Present",
      location: "Remote",
      type: "Freelance",
      description: "Creating user-centered designs for various clients, focusing on mobile apps and web platforms with emphasis on conversion optimization.",
      achievements: [
        "Designed 4+ complete UX/UI case studies with measurable impact",
        "Increased client conversion rates by average of 45%",
        "Built long-term relationships with 3 recurring clients"
      ]
    },
    {
      role: "Design Intern",
      company: "Local Digital Agency",
      period: "2023 (3 months)",
      location: "Ahmedabad, India",
      type: "Internship",
      description: "Assisted senior designers in creating wireframes, prototypes, and user interface designs for client projects.",
      achievements: [
        "Contributed to 5+ client projects across different industries",
        "Learned advanced Figma techniques and design systems",
        "Received excellent feedback for attention to detail"
      ]
    }
  ];

  const certifications = [
    {
      name: "Google UX Design Certificate",
      issuer: "Google",
      date: "2023",
      credentialId: "ABC123XYZ"
    },
    {
      name: "Figma Advanced Prototyping",
      issuer: "Figma Academy",
      date: "2023",
      credentialId: "FIG456DEF"
    }
  ];

  const skills = {
    design: ["Figma", "Adobe XD", "Sketch", "Adobe Creative Suite", "Principle"],
    research: ["User Interviews", "Usability Testing", "Journey Mapping", "Persona Development"],
    technical: ["HTML/CSS", "React.js", "Node.js", "Git", "Responsive Design"],
    soft: ["Problem Solving", "Team Collaboration", "Client Communication", "Project Management"]
  };

  return (
    <section id="resume" className="py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden" ref={sectionRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23e2e8f0%22 fill-opacity=%220.3%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-purple-100 rounded-full text-emerald-700 text-sm font-medium mb-6">
            <FileText className="w-4 h-4 mr-2" />
            Professional Background
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-purple-500">Resume</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my educational background, professional experience, and key achievements in UI/UX design.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-emerald-500/25 inline-flex items-center">
              <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Download PDF Resume
            </button>
            <button className="group bg-white/80 backdrop-blur-sm hover:bg-white text-slate-700 hover:text-emerald-600 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 border border-slate-200 hover:border-emerald-300 inline-flex items-center">
              <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              View Online
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-10 mb-8 border border-white/50 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="flex items-center mb-12 pb-8 border-b border-slate-200">
            <div className="bg-gradient-to-r from-emerald-100 to-purple-100 p-6 rounded-3xl mr-6">
              <FileText className="w-12 h-12 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">Patel Prince</h3>
              <p className="text-xl text-slate-600 mb-2">UI/UX Designer & Creative Problem Solver</p>
              <div className="flex items-center text-slate-500 text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                Ahmedabad, Gujarat, India
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-12">
            <div className="flex items-center mb-8">
              <GraduationCap className="w-7 h-7 text-emerald-600 mr-3" />
              <h4 className="text-2xl font-bold text-slate-900">Education</h4>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gradient-to-r from-slate-50 to-emerald-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h5 className="text-xl font-bold text-slate-900">{edu.degree}</h5>
                      <p className="text-emerald-600 font-semibold">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === 'Pursuing' 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {edu.status}
                      </span>
                      <div className="text-slate-500 text-sm mt-1">GPA: {edu.gpa}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-slate-500 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    {edu.period}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, idx) => (
                      <span key={idx} className="bg-white/70 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <div className="flex items-center mb-8">
              <Briefcase className="w-7 h-7 text-purple-600 mr-3" />
              <h4 className="text-2xl font-bold text-slate-900">Professional Experience</h4>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="bg-gradient-to-r from-slate-50 to-purple-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h5 className="text-xl font-bold text-slate-900">{exp.role}</h5>
                      <p className="text-purple-600 font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right text-sm text-slate-500">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium mt-1 inline-block">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-700 mb-4">{exp.description}</p>
                  <div className="space-y-2">
                    <h6 className="font-semibold text-slate-900 text-sm">Key Achievements:</h6>
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-slate-600 text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-slate-900 mb-8">Core Skills</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={category} className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h5 className="font-bold text-slate-900 mb-4 capitalize">{category.replace('_', ' ')} Skills</h5>
                  <div className="space-y-2">
                    {skillList.map((skill, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-full mr-2"></div>
                        <span className="text-slate-600 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center mb-6">
              <Award className="w-7 h-7 text-yellow-600 mr-3" />
              <h4 className="text-2xl font-bold text-slate-900">Certifications</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-100">
                  <h5 className="font-bold text-slate-900 mb-2">{cert.name}</h5>
                  <p className="text-yellow-700 font-semibold text-sm mb-1">{cert.issuer}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 text-sm">{cert.date}</span>
                    <span className="text-slate-400 text-xs">ID: {cert.credentialId}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-emerald-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and create meaningful design solutions. Let's discuss how I can help bring your vision to life.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 border border-white/30 hover:border-white/50"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
