import React, { useRef, useEffect, useState } from 'react';
import { Figma, Palette, Search, BarChart3, Users, Code, Lightbulb, Target, Star, Award } from 'lucide-react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars with staggered delay
          setTimeout(() => {
            setAnimatedSkills([0, 1, 2, 3]);
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Design Tools",
      icon: <Figma className="w-7 h-7" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      skills: [
        { name: "Figma", level: 95, description: "Advanced prototyping & design systems" },
        { name: "Adobe XD", level: 90, description: "Interactive prototypes & wireframes" },
        { name: "Sketch", level: 85, description: "UI design & symbol libraries" },
        { name: "Adobe Creative Suite", level: 88, description: "Photoshop, Illustrator, After Effects" }
      ]
    },
    {
      title: "UX Research",
      icon: <Search className="w-7 h-7" />,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "from-emerald-50 to-emerald-100",
      skills: [
        { name: "User Interviews", level: 92, description: "In-depth user insights & personas" },
        { name: "Usability Testing", level: 90, description: "A/B testing & user validation" },
        { name: "Journey Mapping", level: 88, description: "End-to-end experience mapping" },
        { name: "Persona Development", level: 85, description: "Data-driven user archetypes" }
      ]
    },
    {
      title: "Visual Design",
      icon: <Palette className="w-7 h-7" />,
      color: "from-pink-500 to-pink-600",
      bgColor: "from-pink-50 to-pink-100",
      skills: [
        { name: "UI Design", level: 94, description: "Modern interface design patterns" },
        { name: "Typography", level: 90, description: "Hierarchy & readability optimization" },
        { name: "Color Theory", level: 87, description: "Brand-aligned color systems" },
        { name: "Icon Design", level: 83, description: "Custom iconography & illustrations" }
      ]
    },
    {
      title: "Analytics & Testing",
      icon: <BarChart3 className="w-7 h-7" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      skills: [
        { name: "A/B Testing", level: 85, description: "Conversion rate optimization" },
        { name: "Heatmap Analysis", level: 80, description: "User behavior insights" },
        { name: "Conversion Optimization", level: 82, description: "Funnel analysis & improvement" },
        { name: "Data Interpretation", level: 78, description: "Metrics-driven design decisions" }
      ]
    }
  ];

  const softSkills = [
    { name: "User Empathy", icon: <Users className="w-6 h-6" />, color: "text-blue-600", bg: "bg-blue-100" },
    { name: "Creative Problem Solving", icon: <Lightbulb className="w-6 h-6" />, color: "text-yellow-600", bg: "bg-yellow-100" },
    { name: "Strategic Thinking", icon: <Target className="w-6 h-6" />, color: "text-green-600", bg: "bg-green-100" },
    { name: "Cross-functional Collaboration", icon: <Users className="w-6 h-6" />, color: "text-purple-600", bg: "bg-purple-100" }
  ];

  const achievements = [
    { icon: <Award className="w-5 h-5" />, text: "Google UX Design Certificate", color: "text-emerald-600" },
    { icon: <Star className="w-5 h-5" />, text: "4+ Complete UX/UI Case Studies", color: "text-blue-600" },
    { icon: <Code className="w-5 h-5" />, text: "Built Portfolio with React.js", color: "text-purple-600" },
    { icon: <Target className="w-5 h-5" />, text: "Design Systems Expert", color: "text-pink-600" }
  ];

  const bonus = {
    title: "Technical Skills",
    description: "Built this portfolio using React.js and Node.js to demonstrate my learning ability and technical curiosity.",
    skills: ["HTML/CSS", "React.js", "Node.js", "Git", "Responsive Design", "Performance Optimization"]
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-white via-slate-50 to-purple-50 relative overflow-hidden" ref={sectionRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23e2e8f0%22 fill-opacity=%220.3%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-emerald-100 rounded-full text-purple-700 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            My Expertise
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-emerald-500">Expertise</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for creating exceptional user experiences, from research and strategy to final implementation and optimization.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-8">
                <div className={`bg-gradient-to-r ${category.color} text-white p-4 rounded-2xl mr-4 shadow-lg`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{category.title}</h3>
                  <p className="text-slate-600 text-sm">Professional proficiency</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <span className="text-slate-800 font-semibold">{skill.name}</span>
                        <p className="text-slate-500 text-xs">{skill.description}</p>
                      </div>
                      <span className="text-slate-600 font-bold text-lg">{skill.level}%</span>
                    </div>
                    <div className="bg-slate-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${category.color} h-full rounded-full transition-all duration-1500 ease-out shadow-sm`}
                        style={{ 
                          width: animatedSkills.includes(index) ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className={`mb-20 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Core Competencies
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div 
                key={index} 
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-white/50"
              >
                <div className={`${skill.bg} ${skill.color} p-4 rounded-2xl mb-4 inline-block group-hover:scale-110 transition-transform`}>
                  {skill.icon}
                </div>
                <h4 className="font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                  {skill.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className={`mb-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Key Achievements
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white/50 hover:shadow-lg transition-all duration-300">
                <div className={`${achievement.color} mr-3`}>
                  {achievement.icon}
                </div>
                <span className="text-slate-700 font-medium text-sm">{achievement.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bonus Section */}
        <div className={`bg-gradient-to-r from-purple-600 to-emerald-500 rounded-3xl p-10 text-white relative overflow-hidden transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>
          
          <div className="text-center relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm text-white rounded-3xl mb-6">
              <Code className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-bold mb-4">{bonus.title}</h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              {bonus.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {bonus.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium border border-white/30 hover:bg-white/30 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;