"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter,
  MessageCircle,
  Clock,
  CheckCircle,
} from "lucide-react";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const form = useRef<HTMLFormElement>(null); // ✅ Fix added

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_dhdnk0a",
        "template_uobhar5",
        form.current,
        "K5ZPjMTi7omfaQO7D"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setIsSubmitted(true);
          setTimeout(() => setIsSubmitted(false), 5000);
        },
        () => {
          alert("❌ Message failed to send.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "prince.patel@email.com",
      href: "mailto:prince.patel@email.com",
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
      color: "text-emerald-600",
      bg: "bg-emerald-100",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Ahmedabad, Gujarat, India",
      href: "#",
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/patel-prince",
      color: "hover:text-blue-600",
      bg: "hover:bg-blue-50",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/patel-prince",
      color: "hover:text-gray-900",
      bg: "hover:bg-gray-50",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: "Twitter",
      href: "https://twitter.com/patel_prince",
      color: "hover:text-blue-400",
      bg: "hover:bg-blue-50",
    },
  ];

  const quickActions = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      text: "Quick Chat",
      subtext: "15-30 min call",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Project Discussion",
      subtext: "1 hour consultation",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Portfolio Review",
      subtext: "Feedback session",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-emerald-400 text-sm font-medium mb-6 border border-white/20">
            <Send className="w-4 h-4 mr-2" />
            Let's Connect
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Let's Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-400">
              Together
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat about design? I'd love
            to hear from you. Let's create something amazing together and bring
            your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info Section */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 h-fit">
              <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center group hover:bg-white/5 p-4 rounded-2xl transition-all duration-300"
                  >
                    <div
                      className={`${info.bg} ${info.color} p-3 rounded-2xl mr-4 group-hover:scale-110 transition-transform`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-white/60 font-medium">
                        {info.label}
                      </p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Available For
                </h4>
                <div className="space-y-3">
                  {quickActions.map((action, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-white/5 p-4 rounded-2xl"
                    >
                      <div className="text-emerald-400 mr-3">{action.icon}</div>
                      <div>
                        <p className="text-white font-medium text-sm">{action.text}</p>
                        <p className="text-white/60 text-xs">{action.subtext}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-8">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-white/60 ${social.color} ${social.bg} p-3 rounded-2xl transition-all duration-300 hover:scale-110`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-emerald-500 text-white placeholder-white/50"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-emerald-500 text-white placeholder-white/50"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-white mb-3">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-emerald-500 text-white placeholder-white/50"
                  placeholder="What's this about?"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-white mb-3">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-emerald-500 resize-none text-white placeholder-white/50"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 px-8 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center ${
                  isSubmitted
                    ? "bg-emerald-500 text-white"
                    : isSubmitting
                    ? "bg-white/20 text-white/70 cursor-not-allowed"
                    : "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white"
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message Sent Successfully!
                  </>
                ) : isSubmitting ? (
                  <>
                    <div className="w-5 h-5 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>

              {isSubmitted && (
                <p className="text-emerald-400 text-sm text-center mt-4">
                  Thank you for reaching out! I'll get back to you within 24
                  hours.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
