"use client";

import Section from "../ui/Section";
import GlassCard from "../ui/GlassCard";
import {
  FaReact, FaNodeJs, FaGitAlt, FaGithub
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3,
  SiMui, SiTailwindcss, SiBootstrap, SiRedux,
  SiSocketdotio, SiMongodb, SiExpress, SiJest, SiJira
} from 'react-icons/si';
import { MdCode, MdSpeed, MdLightbulb, MdDesignServices } from 'react-icons/md';

const skills = [
  { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
  { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
  { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
  { name: 'Material UI', icon: <SiMui />, color: '#007FFF' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
  { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3' },
  { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
  { name: 'Socket.io', icon: <SiSocketdotio />, color: '#010101' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'Express.js', icon: <SiExpress />, color: '#000000' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
  { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
  { name: 'Jest', icon: <SiJest />, color: '#C21325' },
  { name: 'Jira', icon: <SiJira />, color: '#0052CC' },
];

const stats = [
  { label: 'Years Experience', value: '3+', icon: <MdCode /> },
  { label: 'Projects Delivered', value: '15+', icon: <MdLightbulb /> },
  { label: 'Bug Reduction', value: '40%', icon: <MdSpeed /> },
  { label: 'Current Companies', value: '3', icon: <MdDesignServices /> },
];

const services = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, dynamic web interfaces with React.js, Next.js, and TypeScript. Focus on performance optimization through code splitting and lazy loading techniques.',
    icon: '💻',
  },
  {
    title: 'Real-Time Communication',
    description: 'Implementing live chat functionality with file sharing capabilities using WebSockets and Socket.io. Creating WhatsApp-like experiences with seamless real-time updates.',
    icon: '💬',
  },
  {
    title: 'State Management',
    description: 'Architecting scalable state solutions with Redux and Context API. Building admin panels with role-based access control systems for enhanced security.',
    icon: '⚙️',
  },
  {
    title: 'UI/UX Design',
    description: 'Creating beautiful, accessible interfaces with Material UI, Tailwind CSS, Bootstrap, and Shadcn. Ensuring consistent design patterns across multiple projects.',
    icon: '🎨',
  },
  {
    title: 'API Integration',
    description: 'Integrating RESTful APIs with TanStack Query for enhanced application functionality. Building complex data-intensive applications with advanced filtering capabilities.',
    icon: '🔌',
  },
  {
    title: 'Testing & Quality',
    description: 'Maintaining high code quality through comprehensive testing with Jest and debugging. Achieved 40% reduction in reported bugs through systematic testing practices.',
    icon: '✅',
  },
];

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-20">

        {/* Bio & Intro */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="glass-panel p-8 rounded-2xl text-lg text-gray-300 leading-relaxed text-left">
            <p>
              Frontend Developer with 3 years of hands-on experience building dynamic, responsive web applications. Specialized in React.js, Next.js, and TypeScript with expertise in real-time communication systems using WebSockets and Socket.io.
            </p>
            <br />
            <p>
              Currently pursuing Master of Computer Applications (MCA) at Jain University while delivering production-ready interfaces with performance optimization, clean architecture, and 40% reduction in reported bugs through comprehensive testing.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <GlassCard key={idx} className="text-center py-8" hoverEffect={true}>
              <div className="text-4xl text-primary mb-2 flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </GlassCard>
          ))}
        </div>

        {/* Skills */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="group relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white/5 border border-white/10 px-6 py-3 rounded-full flex items-center gap-3 hover:bg-white/10 transition-colors cursor-default">
                  <span className="text-2xl" style={{ color: skill.color }}>{skill.icon}</span>
                  <span className="text-gray-200 font-medium">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services / What I Do */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center">What I Do</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, idx) => (
              <GlassCard key={idx} className="h-full">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-white">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
