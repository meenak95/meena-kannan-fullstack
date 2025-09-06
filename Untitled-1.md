follow the files and create the application. 

Folder - Paages

File - Portfolio

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  ChevronRight,
  Code,
  Cloud,
  Database,
  Cpu,
  Globe,
  Award,
  ArrowRight,
  Download,
  Sparkles,
  Building2,
  Calendar,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Briefcase,
  User,
  Target,
  Heart,
  Lightbulb,
  Users,
  Server,
  Wrench,
  TestTube,
  TrendingUp,
  Linkedin,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skillsData, projectsData } from "../components/skills/SkillsData";

const Counter = ({ to }) => {
  const ref = useRef();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const node = ref.current; // Capture ref value
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = parseInt(to.replace("+", ""));
          if (start === end) return;
         
          let duration = 2000;
          let startTime = null;

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
          observer.disconnect(); // Disconnect after animation starts
        }
      },
      { threshold: 0.5 }
    );
    if (node) {
      observer.observe(node);
    }
    return () => {
      if (node) {
        observer.unobserve(node);
      }
      observer.disconnect();
    };
  }, [to]);

  return <span ref={ref}>{count}{to.includes('+') ? '+' : ''}</span>;
};

const TiltCard = ({ children, className }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 10;
    const y = (e.clientY - top - height / 2) / 10;
    ref.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) scale3d(1.03, 1.03, 1.03)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  );
};

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSkillCategory, setActiveSkillCategory] = useState("all");
  const [activeProjectCategory, setActiveProjectCategory] = useState("all");
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const elementsToObserve = [heroRef.current, skillsRef.current, projectsRef.current].filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsToObserve.forEach(el => observer.observe(el));

    return () => {
      elementsToObserve.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const techStack = [
    { name: "Java", icon: <Code className="w-6 h-6" />, color: "bg-orange-500", particles: "orange" },
    { name: "Spring Boot", icon: <Cpu className="w-6 h-6" />, color: "bg-green-500", particles: "green" },
    { name: "Angular", icon: <Globe className="w-6 h-6" />, color: "bg-red-500", particles: "red" },
    { name: "AWS", icon: <Cloud className="w-6 h-6" />, color: "bg-yellow-500", particles: "yellow" },
    { name: "PostgreSQL", icon: <Database className="w-6 h-6" />, color: "bg-blue-500", particles: "blue" },
    { name: "Kubernetes", icon: <Server className="w-6 h-6" />, color: "bg-purple-500", particles: "purple" },
  ];

  const stats = [
    { number: "9+", label: "Years Experience", icon: <Award className="w-8 h-8" />, color: "text-blue-400" },
    { number: "15+", label: "Technologies", icon: <Code className="w-8 h-8" />, color: "text-green-400" },
    { number: "50+", label: "Projects", icon: <Globe className="w-8 h-8" />, color: "text-purple-400" },
    { number: "3", label: "Certifications", icon: <Award className="w-8 h-8" />, color: "text-cyan-400" },
  ];

  const categoryIcons = {
    programming: { icon: Code, color: "text-blue-400" },
    frontend: { icon: Globe, color: "text-green-400" },
    backend: { icon: Server, color: "text-purple-400" },
    cloud: { icon: Cloud, color: "text-cyan-400" },
    database: { icon: Database, color: "text-orange-400" },
    devops: { icon: Wrench, color: "text-red-400" },
    testing: { icon: TestTube, color: "text-pink-400" },
  };

  const filteredSkills = activeSkillCategory === "all"
    ? skillsData
    : skillsData.filter(skill => skill.category === activeSkillCategory);

  const filteredProjects = activeProjectCategory === "all"
    ? projectsData
    : projectsData.filter(project => project.category === activeProjectCategory);

  const categoryColors = {
    government: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    fintech: "bg-green-500/20 text-green-400 border-green-500/30",
    ai: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    "real-estate": "bg-orange-500/20 text-orange-400 border-orange-500/30"
  };

  return (
    <div className="min-h-screen bg-slate-950 overflow-hidden">
      {/* Dynamic Background with Particle System */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Animated Gradients */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-float-1" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float-2" />
       
        {/* Interactive Mouse Follower */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-blue-400/5 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />

        {/* Cloud Infrastructure Animation */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-cloud-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            >
              <Cloud className="w-8 h-8 text-slate-700" />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Contact Button */}
      <Link
        to={createPageUrl("Contact")}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 group animate-bounce-subtle"
      >
        <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
      </Link>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-7xl mx-auto text-center z-10">
          <div className="mb-12 opacity-0 translate-y-8 animate-fade-in-up">
            <Badge variant="secondary" className="mb-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border-blue-500/30 px-6 py-2 text-lg animate-glow">
              <Sparkles className="w-5 h-5 mr-2 animate-spin-slow" />
              Lead Software Engineer
            </Badge>
           
            <h1 className="text-7xl md:text-9xl font-black mb-8 leading-none">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x bg-300%">
                Meena
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x bg-300% animation-delay-1000">
                Kannan
              </span>
            </h1>
           
            <p className="text-2xl md:text-3xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Architecting the future with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold animate-pulse"> scalable solutions</span>,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold animate-pulse animation-delay-500"> cloud innovation</span>, and
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold animate-pulse animation-delay-1000"> technical excellence</span>.
            </p>
          </div>

          {/* Animated Tech Stack Orbit */}
          <div className="relative mb-16 h-96 w-96 mx-auto opacity-0 translate-y-8 animate-fade-in-up delay-300">
            <div className="absolute inset-0 animate-spin-very-slow">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className="absolute flex items-center justify-center"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) rotate(${index * 60}deg) translateY(-140px) rotate(-${index * 60}deg)`,
                  }}
                >
                  <div className={`group relative p-4 rounded-2xl ${tech.color}/20 border ${tech.color}/30 backdrop-blur-sm hover:scale-125 transition-all duration-500 cursor-pointer animate-float-gentle`}
                       style={{ animationDelay: `${index * 0.5}s` }}>
                    <div className={`p-2 rounded-xl ${tech.color}/30 group-hover:animate-spin`}>
                      {tech.icon}
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-800/90 px-3 py-1 rounded-full text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {tech.name}
                    </div>
                   
                    {/* Particle Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div
                          key={i}
                          className={`absolute w-1 h-1 ${tech.color} rounded-full animate-particle-explosion`}
                          style={{
                            left: '50%',
                            top: '50%',
                            animationDelay: `${i * 0.1}s`,
                            transform: `rotate(${i * 60}deg)`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
           
            {/* Central Hub - Updated with CPU icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow">
                <Cpu className="w-12 h-12 text-white animate-icon-glow" />
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 translate-y-8 animate-fade-in-up delay-500">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 rounded-2xl text-xl group shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
              <Briefcase className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              Explore My Work
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-slate-600 text-slate-300 hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-700 hover:text-white px-10 py-4 rounded-2xl text-xl group shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68b53a59450b409515631d30/bd0a6ee13_Meena_Kannan_Java_Agile_Cloud_DevSecOps.pdf', '_blank')}
            >
              <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-transparent rounded-full animate-scroll-indicator"></div>
            </div>
            <ChevronRight className="w-6 h-6 text-slate-400 rotate-90 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section (Professional Growth) - REDESIGNED */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900/50 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-blue-500/20 text-blue-400 border-blue-500/30 animate-glow">
              <TrendingUp className="w-4 h-4 mr-2" />
              Career Milestones
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 animate-gradient-x bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent bg-300%">
              At a Glance
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 text-center transition-all duration-500 hover:bg-slate-800/50 opacity-0 translate-y-8 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl animate-shimmer`}></div>
                <div className={`${stat.color} mb-6 flex justify-center group-hover:scale-125 transition-transform duration-300 ease-in-out`}>
                  {stat.icon}
                </div>
                <div className="text-5xl font-black text-white mb-3 group-hover:scale-110 transition-transform duration-300 ease-in-out">
                  <Counter to={stat.number} />
                </div>
                <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-purple-500/20 text-purple-400 border-purple-500/30 animate-glow">
              <Code className="w-4 h-4 mr-2" />
              Technical Expertise
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 animate-gradient-x bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-300%">
              Skills & Technologies
            </h2>
          </div>

          <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveSkillCategory}>
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl rounded-2xl p-2">
              <TabsTrigger value="all" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-xl transition-all duration-300">
                All
              </TabsTrigger>
              {Object.keys(categoryIcons).map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-xl transition-all duration-300 capitalize"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeSkillCategory} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredSkills.map((skill, index) => (
                  <Card
                    key={skill.id}
                    className="bg-slate-800/30 border-slate-700/50 backdrop-blur-xl hover:bg-slate-800/50 transition-all duration-500 opacity-0 translate-y-8 animate-fade-in-up group overflow-hidden relative"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {skill.name}
                        </h3>
                        <Badge variant="outline" className="text-slate-300 border-slate-600 bg-slate-700/50">
                          {skill.years_experience}y
                        </Badge>
                      </div>
                     
                      <div className="mb-6">
                        <div className="flex justify-between text-sm text-slate-400 mb-3">
                          <span>Proficiency</span>
                          <span className="font-bold text-white">{skill.proficiency}%</span>
                        </div>
                        <div className="relative">
                          <Progress
                            value={skill.proficiency}
                            className="h-3 bg-slate-700/50 rounded-full overflow-hidden"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-shimmer"></div>
                        </div>
                      </div>
                     
                      {skill.description && (
                        <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                          {skill.description}
                        </p>
                      )}
                    </CardContent>
                   
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 px-6 bg-gradient-to-b from-slate-900/50 to-slate-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-green-500/20 text-green-400 border-green-500/30 animate-glow">
              <Briefcase className="w-4 h-4 mr-2" />
              Professional Projects
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 animate-gradient-x bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent bg-300%">
              Featured Work
            </h2>
          </div>

          <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveProjectCategory}>
            <TabsList className="grid w-full grid-cols-5 bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl rounded-2xl p-2">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-blue-600 data-[state=active]:text-white rounded-xl transition-all duration-300"
              >
                All Projects
              </TabsTrigger>
              <TabsTrigger
                value="government"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-xl transition-all duration-300"
              >
                Government
              </TabsTrigger>
              <TabsTrigger
                value="fintech"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-cyan-600 data-[state=active]:text-white rounded-xl transition-all duration-300"
              >
                FinTech
              </TabsTrigger>
              <TabsTrigger
                value="ai"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-600 data-[state=active]:text-white rounded-xl transition-all duration-300"
              >
                AI/ML
              </TabsTrigger>
              <TabsTrigger
                value="real-estate"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-600 data-[state=active]:text-white rounded-xl transition-all duration-300"
              >
                Real Estate
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeProjectCategory} className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredProjects.map((project, index) => (
                  <Card
                    key={project.id}
                    className="bg-slate-800/30 border-slate-700/50 backdrop-blur-xl hover:bg-slate-800/50 transition-all duration-500 opacity-0 translate-y-8 animate-fade-in-up group overflow-hidden relative"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="relative z-10">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors duration-300">
                            {project.title}
                          </CardTitle>
                          <div className="flex items-center space-x-4 text-slate-400">
                            <div className="flex items-center space-x-2">
                              <Building2 className="w-4 h-4" />
                              <span className="text-sm font-medium">{project.company}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm">{project.duration}</span>
                            </div>
                          </div>
                        </div>
                        {project.category && (
                          <Badge variant="outline" className={`${categoryColors[project.category]} animate-pulse-gentle`}>
                            {project.category}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                   
                    <CardContent className="relative z-10">
                      <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                        {project.description}
                      </p>
                     
                      {project.highlights && (
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                            <Target className="w-4 h-4 mr-2 text-green-400" />
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {project.highlights.slice(0, 3).map((highlight, idx) => (
                              <li key={idx} className="flex items-start space-x-3 text-sm text-slate-300 group-hover:text-white transition-colors duration-300">
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {project.technologies && (
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-blue-400" />
                            Technologies:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 6).map((tech, techIndex) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="bg-slate-700/50 text-slate-300 border-slate-600 hover:bg-slate-600/50 hover:text-white transition-all duration-300 animate-fade-in"
                                style={{ animationDelay: `${techIndex * 0.1}s` }}
                              >
                                {tech}
                              </Badge>
                            ))}
                            {project.technologies.length > 6 && (
                              <Badge variant="outline" className="text-slate-400 border-slate-600">
                                +{project.technologies.length - 6} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      )}
                    </CardContent>
                   
                    {/* Project Category Color Strip */}
                    <div className={`absolute top-0 left-0 w-full h-1 ${
                      project.category === 'government' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                      project.category === 'fintech' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                      project.category === 'ai' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                      'bg-gradient-to-r from-orange-500 to-orange-600'
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                   
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-700/10 via-transparent to-slate-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* About & Certifications Section - REDESIGNED */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/30 animate-glow">
              <User className="w-4 h-4 mr-2" />
              About Me
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 animate-gradient-x bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-300%">
              Passion Meets Excellence
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Main About Content */}
            <Card className="lg:col-span-3 bg-slate-800/30 border-slate-700/50 backdrop-blur-xl p-8 space-y-6">
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center">
                <Sparkles className="w-8 h-8 text-blue-400 mr-3 animate-spin-slow" />
                My Professional Journey
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                With 9+ years in software development, I've architected solutions serving millions across government, fintech, and AI. As a Lead Engineer at NCS Singapore, I drive mission-critical projects, blending technical expertise with a passion for mentoring.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                {[
                  { icon: Code, title: "Technical Excellence", color: "text-blue-400" },
                  { icon: Users, title: "Team Leadership", color: "text-green-400" },
                  { icon: Lightbulb, title: "Innovation", color: "text-purple-400" },
                  { icon: Target, title: "Results Driven", color: "text-cyan-400" }
                ].map((value) => (
                  <div key={value.title} className="group flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-slate-700/50 group-hover:bg-slate-700 transition-all duration-300 ${value.color}`}>
                      <value.icon className="w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">{value.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Certifications & Quick Facts */}
            <div className="lg:col-span-2 space-y-8">
              {[
                { title: "Professional Scrum Product Owner™ I", desc: "Product Strategy & Management", color: "yellow" },
                { title: "Professional Scrum Master™ I", desc: "Agile Leadership", color: "blue" },
                { title: "ICT Assessment Certification", desc: "NUS-ISS Singapore", color: "green" }
              ].map((cert, index) => (
                <TiltCard key={index} className="opacity-0 translate-y-8 animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className={`group relative bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:bg-slate-800/50`}>
                    <div className={`absolute -top-1 -left-1 w-1/2 h-1/2 bg-gradient-to-br from-${cert.color}-500/50 to-transparent rounded-tl-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-${cert.color}-500/20 text-${cert.color}-400 group-hover:scale-110 transition-transform duration-300`}>
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <p className={`text-white font-semibold text-lg group-hover:text-${cert.color}-400 transition-colors duration-300`}>{cert.title}</p>
                        <p className="text-slate-400 text-sm">{cert.desc}</p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beyond the Code - REDESIGNED */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <TiltCard>
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-xl rounded-3xl p-12 text-center overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="absolute inset-0 bg-gradient-radial from-transparent to-slate-900/50"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-gentle">
                  <Heart className="w-12 h-12 text-red-400" />
                </div>
                <h2 className="text-4xl font-black text-white mb-6">Beyond the Code</h2>
                <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mx-auto">
                  When I'm not architecting systems, I'm exploring Singapore's tech scene, contributing to open-source, or diving into the latest in cloud computing and AI. I believe in balancing a passion for technology with continuous personal growth.
                </p>
              </div>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-green-500/20 text-green-400 border-green-500/30 animate-glow">
            <MessageCircle className="w-4 h-4 mr-2" />
            Let's Connect
          </Badge>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 animate-gradient-x bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent bg-300%">
            Ready to Collaborate?
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, innovative projects,
            and ways we can create amazing solutions together.
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[
              { icon: Mail, label: "Email", value: "meenakannan92@gmail.com", href: "mailto:meenakannan92@gmail.com" },
              { icon: Phone, label: "Phone", value: "+65 87373057", href: "tel:+6587373057" },
              { icon: MessageCircle, label: "WhatsApp", value: "+91 97893 02084", href: "https://wa.me/919789302084" },
              { icon: MapPin, label: "Location", value: "Singapore", href: null }
            ].map((contact, index) => (
              <Card
                key={index}
                className="bg-slate-800/30 border-slate-700/50 backdrop-blur-xl hover:bg-slate-800/50 transition-all duration-500 group opacity-0 translate-y-8 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-blue-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    <contact.icon className="w-8 h-8" />
                  </div>
                  <p className="text-slate-400 text-sm mb-2">{contact.label}</p>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={contact.label === "WhatsApp" ? "_blank" : undefined}
                      rel={contact.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                      className="text-white font-medium hover:text-blue-400 transition-colors duration-300"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium">{contact.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Link to={createPageUrl("Contact")}>
            <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-12 py-4 rounded-2xl text-xl group shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300">
              <Send className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              Get In Touch
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900/50 border-t border-slate-800/50 backdrop-blur-xl relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MK</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">Meena Kannan</h3>
                  <p className="text-slate-400 text-sm">Lead Software Engineer</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Building scalable solutions with passion and precision.
                Let's create something amazing together.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { name: "About", url: "#about" },
                  { name: "Skills", url: "#skills" },
                  { name: "Projects", url: "#projects" },
                  { name: "Contact", url: createPageUrl("Contact") }
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="block text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/meenakannan-mk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-blue-500/20 transition-all duration-300 group"
                >
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="mailto:meenakannan92@gmail.com"
                  className="w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-slate-400 hover:text-green-400 hover:bg-green-500/20 transition-all duration-300 group"
                >
                  <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="tel:+6587373057"
                  className="w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-slate-400 hover:text-purple-400 hover:bg-purple-500/20 transition-all duration-300 group"
                >
                  <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800/50 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 Meena Kannan. Crafted with passion and precision.
            </p>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </footer>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(3rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }

        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-very-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
        }

        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes scroll-indicator {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(16px); opacity: 0; }
        }

        @keyframes cloud-float {
          0% { transform: translateX(-100px); }
          100% { transform: translateX(calc(100vw + 100px)); }
        }

        @keyframes particle-explosion {
          0% {
            transform: rotate(var(--rotation)) translateY(0);
            opacity: 1;
          }
          100% {
            transform: rotate(var(--rotation)) translateY(-30px);
            opacity: 0;
          }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px currentColor; }
          50% { box-shadow: 0 0 20px currentColor; }
        }

        @keyframes icon-glow {
          0%, 100% {
            filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.7));
          }
          50% {
            filter: drop-shadow(0 0 5px rgba(255, 255, 255, 1)) drop-shadow(0 0 8px rgba(0, 255, 255, 0.6));
          }
        }
       
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 2rem 2rem;
        }

        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 8s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        .animate-spin-very-slow { animation: spin-very-slow 20s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-bounce-gentle { animation: bounce-gentle 3s ease-in-out infinite; }
        .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }
        .animate-scroll-indicator { animation: scroll-indicator 2s ease-in-out infinite; }
        .animate-cloud-float { animation: cloud-float linear infinite; }
        .animate-particle-explosion { animation: particle-explosion 1s ease-out forwards; }
        .animate-shimmer { animation: shimmer 2s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle ease-in-out infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-icon-glow { animation: icon-glow 2.5s ease-in-out infinite; }
        .animate-pulse-gentle { animation: pulse-slow 3s ease-in-out infinite; }

        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-1000 { animation-delay: 1s; }

        .bg-300% { background-size: 300% 300%; }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }

        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}


File - skills

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  Globe,
  Server,
  Cloud,
  Database,
  Wrench,
  TestTube,
  Sparkles,
  TrendingUp,
  Mail, // Added Mail icon
  MessageCircle // Added MessageCircle icon for WhatsApp
} from "lucide-react";
import { skillsData } from "../components/skills/SkillsData";

const categoryIcons = {
  programming: { icon: Code, color: "text-blue-400" },
  frontend: { icon: Globe, color: "text-green-400" },
  backend: { icon: Server, color: "text-purple-400" },
  cloud: { icon: Cloud, color: "text-cyan-400" },
  database: { icon: Database, color: "text-orange-400" },
  devops: { icon: Wrench, color: "text-red-400" },
  testing: { icon: TestTube, color: "text-pink-400" },
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all"
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  const groupedSkills = filteredSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const SkillCard = ({ skill, index }) => (
    <Card
      className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 opacity-0 translate-y-8 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
          <Badge variant="outline" className="text-slate-300 border-slate-600">
            {skill.years_experience}y
          </Badge>
        </div>
        <div className="mb-4">
          <div className="flex justify-between text-sm text-slate-400 mb-2">
            <span>Proficiency</span>
            <span>{skill.proficiency}%</span>
          </div>
          <Progress
            value={skill.proficiency}
            className="h-2 bg-slate-700"
          />
        </div>
        {skill.description && (
          <p className="text-sm text-slate-400">{skill.description}</p>
        )}
      </CardContent>
    </Card>
  );

  const CategoryHeader = ({ category, skills }) => {
    const IconComponent = categoryIcons[category]?.icon || Code;
    const iconColor = categoryIcons[category]?.color || "text-blue-400";
   
    return (
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className={`p-3 rounded-xl bg-slate-800/50 ${iconColor}`}>
            <IconComponent className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white capitalize">
              {category.replace('_', ' ')} Technologies
            </h2>
            <p className="text-slate-400">{skills.length} skills</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-blue-500/20 text-blue-400 border-blue-500/30">
            <Sparkles className="w-4 h-4 mr-2" />
            Technical Expertise
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Skills & Technologies
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, proficiency levels,
            and years of experience across different technology stacks.
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveCategory}>
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 bg-slate-800/50 border border-slate-700">
            <TabsTrigger value="all" className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400">
              All
            </TabsTrigger>
            {Object.keys(categoryIcons).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400 capitalize"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="space-y-12">
              {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                <div key={category}>
                  <CategoryHeader category={category} skills={categorySkills} />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categorySkills.map((skill, index) => (
                      <SkillCard key={skill.id} skill={skill} index={index} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {Object.keys(categoryIcons).map((category) => (
            <TabsContent key={category} value={category} className="mt-8">
              <CategoryHeader category={category} skills={groupedSkills[category] || []} />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(groupedSkills[category] || []).map((skill, index) => (
                  <SkillCard key={skill.id} skill={skill} index={index} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Skills Summary - Updated Design */}
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white flex items-center">
              <TrendingUp className="w-8 h-8 text-blue-400 mr-3" />
              Professional Growth
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-slate-700/30 rounded-lg border border-slate-600">
                <div className="text-3xl font-bold text-blue-400 mb-2">9+</div>
                <div className="text-slate-400">Years of Experience</div>
              </div>
              <div className="text-center p-6 bg-slate-700/30 rounded-lg border border-slate-600">
                <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                <div className="text-slate-400">Core Technologies</div>
              </div>
              <div className="text-center p-6 bg-slate-700/30 rounded-lg border border-slate-600">
                <div className="text-3xl font-bold text-cyan-400 mb-2">3</div>
                <div className="text-slate-400">Professional Certifications</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="mt-20 py-12 px-6 bg-slate-900/50 border-t border-slate-800/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MK</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">Meena Kannan</h3>
                  <p className="text-slate-400 text-sm">Lead Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm">About</a>
                <a href="#skills" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm">Skills</a>
                <a href="#projects" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm">Projects</a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Connect</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/meenakannan-mk/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="mailto:meenakannan92@gmail.com" className="text-slate-400 hover:text-green-400">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="https://wa.me/919789302084" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-400">
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800/50 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">© 2024 Meena Kannan. Crafted with passion and precision.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

File - Experience


import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Building2,
  Calendar,
  MapPin,
  CheckCircle,
  Briefcase,
  Award,
  Mail,
  MessageCircle
} from "lucide-react";
import { projectsData } from "../components/skills/SkillsData";

const categoryColors = {
  government: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  fintech: "bg-green-500/20 text-green-400 border-green-500/30",
  ai: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "real-estate": "bg-orange-500/20 text-orange-400 border-orange-500/30"
};

export default function Experience() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  const timeline = [
    {
      period: "Dec 2021 - Present",
      role: "Lead Software Engineer",
      company: "NCS, Singapore",
      location: "Singapore",
      current: true
    },
    {
      period: "May 2021 - Nov 2021",
      role: "Senior Software Engineer",
      company: "BlackStraw.AI",
      location: "India",
    },
    {
      period: "Aug 2019 - Dec 2020",
      role: "Software Engineer",
      company: "HDB (via AllTech Systems)",
      location: "Singapore",
    },
    {
      period: "Jul 2018 - Jul 2019",
      role: "Software Engineer",
      company: "Wolters Kluwer",
      location: "India",
    },
    {
      period: "May 2016 - Jul 2018",
      role: "Associate Software Engineer",
      company: "SysArc Infomatix",
      location: "India",
    }
  ];

  const ProjectCard = ({ project, index }) => (
    <Card
      className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 opacity-0 translate-y-8 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl text-white">{project.title}</CardTitle>
            <div className="flex items-center space-x-4 text-slate-400">
              <div className="flex items-center space-x-1">
                <Building2 className="w-4 h-4" />
                <span className="text-sm">{project.company}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{project.duration}</span>
              </div>
            </div>
          </div>
          {project.category && (
            <Badge variant="outline" className={categoryColors[project.category]}>
              {project.category}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>
       
        {project.highlights && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-white mb-3">Key Achievements:</h4>
            <ul className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.technologies && (
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-slate-700/50 text-slate-300 border-slate-600"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-blue-500/20 text-blue-400 border-blue-500/30">
            <Briefcase className="w-4 h-4 mr-2" />
            Professional Journey
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Experience & Projects
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A comprehensive look at my professional journey, key projects, and
            the impact I've made across different industries and technologies.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Career Timeline</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className={`w-4 h-4 rounded-full border-2 ${item.current ? 'bg-blue-500 border-blue-500' : 'bg-slate-800 border-slate-600'} z-10`}></div>
                  <Card className="flex-1 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                          <p className="text-blue-400 font-medium">{item.company}</p>
                          <div className="flex items-center space-x-4 mt-2 text-slate-400">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm">{item.period}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{item.location}</span>
                            </div>
                          </div>
                        </div>
                        {item.current && (
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mt-2 md:mt-0">
                            Current Position
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h2>
         
          <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveCategory}>
            <TabsList className="grid w-full grid-cols-5 bg-slate-800/50 border border-slate-700">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400"
              >
                All Projects
              </TabsTrigger>
              <TabsTrigger
                value="government"
                className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400"
              >
                Government
              </TabsTrigger>
              <TabsTrigger
                value="fintech"
                className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400"
              >
                FinTech
              </TabsTrigger>
              <TabsTrigger
                value="ai"
                className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400"
              >
                AI/ML
              </TabsTrigger>
              <TabsTrigger
                value="real-estate"
                className="data-[state=active]:bg-orange-500/20 data-[state=active]:text-orange-400"
              >
                Real Estate
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeCategory} className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Certifications - Updated Design */}
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white flex items-center">
              <Award className="w-8 h-8 text-yellow-400 mr-3" />
              Professional Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-slate-700/30 border-slate-600">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Professional Scrum Product Owner™ I</h3>
                  <p className="text-sm text-slate-400">Product Management & Strategy</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-700/30 border-slate-600">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Professional Scrum Master™ I</h3>
                  <p className="text-sm text-slate-400">Agile Leadership & Team Management</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-700/30 border-slate-600">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">ICT Assessment Certification</h3>
                  <p className="text-sm text-slate-400">NUS-ISS Singapore</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="mt-20 py-12 px-6 bg-slate-900/50 border-t border-slate-800/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MK</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">Meena Kannan</h3>
                  <p className="text-slate-400 text-sm">Lead Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Quick Links</h4>
              <div className="space-y-2">
                {/* These links are placeholders and should ideally link to sections within the same page or other pages. */}
                {/* For a single page app, you might use hash links like #about, #skills, #projects */}
                <a href="#about" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm">About</a>
                <a href="#skills" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm">Skills</a>
                <a href="#projects" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm">Projects</a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Connect</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/meenakannan-mk/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="mailto:meenakannan92@gmail.com" className="text-slate-400 hover:text-green-400">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="https://wa.me/919789302084" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-400">
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800/50 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">© 2024 Meena Kannan. Crafted with passion and precision.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

File - Contact

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  CheckCircle,
  Sparkles
} from "lucide-react";
import { SendEmail } from "@/integrations/Core";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
   
    try {
      await SendEmail({
        to: "meenakannan92@gmail.com",
        subject: `Portfolio Contact: ${formData.subject}`,
        body: `
          Name: ${formData.name}
          Email: ${formData.email}
          Subject: ${formData.subject}
         
          Message:
          ${formData.message}
        `
      });
     
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
    }
   
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "meenakannan92@gmail.com",
      link: "mailto:meenakannan92@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+65 87373057",
      link: "tel:+6587373057",
      color: "text-green-400"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "WhatsApp",
      value: "+91 97893 02084",
      link: "https://wa.me/919789302084",
      color: "text-green-400"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Singapore",
      link: null,
      color: "text-purple-400"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-blue-500/20 text-blue-400 border-blue-500/30">
            <MessageCircle className="w-4 h-4 mr-2" />
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects,
            or just having a chat about technology and software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-slate-700/50 ${item.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">{item.label}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          target={item.label === "WhatsApp" ? "_blank" : undefined}
                          rel={item.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                          className="text-white hover:text-blue-400 transition-colors font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Availability - Updated Design */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-white flex items-center">
                  <Clock className="w-6 h-6 text-blue-400 mr-3" />
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  Currently open to new opportunities and interesting projects.
                  I typically respond to messages within 24 hours.
                </p>
                <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Available for Work
                </Badge>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-white">Connect on Social</CardTitle>
              </Car
...

