'use client';

import React from 'react';
import { Section } from '@/components';
import { useInView } from '@/hooks/useInView';
import {
  FaReact, FaNodeJs, FaGitAlt, FaGithub
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3,
  SiMui, SiTailwindcss, SiBootstrap, SiRedux,
  SiSocketdotio, SiMongodb, SiExpress, SiJest, SiJira
} from 'react-icons/si';
import { MdCode, MdSpeed, MdLightbulb, MdDesignServices } from 'react-icons/md';

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface AboutProps {
  bio?: string;
  skills?: Skill[];
}

// Animated Stat Card Component
function StatCard({ stat, index }: { stat: { label: string; value: string; icon: React.ReactNode }; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden bg-gradient-to-br from-foreground/5 to-foreground/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:scale-105 hover:shadow-lg"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`,
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/0 to-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10 text-center space-y-3">
        <div className="text-4xl sm:text-5xl mx-auto w-fit p-3 rounded-xl bg-foreground/10 text-foreground group-hover:scale-110 transition-transform duration-300">
          {stat.icon}
        </div>
        <div className="text-3xl sm:text-4xl font-bold text-foreground" style={{ color: 'var(--foreground)' }}>
          {stat.value}
        </div>
        <div className="text-sm sm:text-base text-foreground/60 font-medium">
          {stat.label}
        </div>
      </div>
    </div>
  );
}

// Animated Skill Card Component
function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease-out ${index * 0.05}s, transform 0.5s ease-out ${index * 0.05}s`,
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
        style={{ backgroundColor: skill.color }}
      ></div>

      <div className="relative z-10 flex flex-col items-center gap-3">
        <div
          className="text-4xl sm:text-5xl transition-all duration-300 group-hover:scale-125 group-hover:rotate-12"
          style={{ color: skill.color }}
        >
          {skill.icon}
        </div>
        <span className="text-xs sm:text-sm font-semibold text-center text-foreground/80 group-hover:text-foreground transition-colors">
          {skill.name}
        </span>
      </div>
    </div>
  );
}

// Animated Service Card Component
function ServiceCard({ item, index }: { item: { title: string; description: string; icon: string; gradient: string }; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden backdrop-blur-sm rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-lg`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`,
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10 space-y-4">
        <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
          {item.icon}
        </div>
        <h4 className="text-xl font-bold text-foreground group-hover:text-foreground transition-colors">
          {item.title}
        </h4>
        <p className="text-foreground/70 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function About({
  bio = "Frontend Developer with 3 years of hands-on experience building dynamic, responsive web applications. Specialized in React.js, Next.js, and TypeScript with expertise in real-time communication systems using WebSockets and Socket.io. Currently pursuing Master of Computer Applications (MCA) at Jain University while delivering production-ready interfaces with performance optimization, clean architecture, and 40% reduction in reported bugs through comprehensive testing.",
  skills = [
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
  ],
}: AboutProps) {
  const stats = [
    { label: 'Years Experience', value: '3+', icon: <MdCode /> },
    { label: 'Projects Delivered', value: '15+', icon: <MdLightbulb /> },
    { label: 'Bug Reduction', value: '40%', icon: <MdSpeed /> },
    { label: 'Current Companies', value: '3', icon: <MdDesignServices /> },
  ];

  return (
    <Section id="about" spacing="lg" containerSize="lg">
      <div className="space-y-20">
        {/* Header with animated gradient */}
        <div className="text-center space-y-6">
          <div className="inline-block">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground" style={{ color: 'var(--foreground)' }}>
              About Me
            </h2>
            <div className="h-1.5 bg-gradient-to-r from-transparent via-foreground to-transparent rounded-full mt-4"></div>
          </div>
          <p className="text-xl sm:text-2xl text-foreground/60 max-w-3xl mx-auto leading-relaxed">
            {bio}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* Skills Bento Grid */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-3">
              Tech Stack & Expertise
            </h3>
            <p className="text-foreground/60">Technologies I work with daily</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* What I Do Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-3">
              What I Do
            </h3>
            <p className="text-foreground/60">My areas of expertise</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Frontend Development',
                description: 'Building responsive, dynamic web interfaces with React.js, Next.js, and TypeScript. Focus on performance optimization through code splitting and lazy loading techniques.',
                icon: '💻',
                gradient: 'from-blue-500/10 to-cyan-500/10',
              },
              {
                title: 'Real-Time Communication',
                description: 'Implementing live chat functionality with file sharing capabilities using WebSockets and Socket.io. Creating WhatsApp-like experiences with seamless real-time updates.',
                icon: '💬',
                gradient: 'from-green-500/10 to-emerald-500/10',
              },
              {
                title: 'State Management',
                description: 'Architecting scalable state solutions with Redux and Context API. Building admin panels with role-based access control systems for enhanced security.',
                icon: '⚙️',
                gradient: 'from-purple-500/10 to-pink-500/10',
              },
              {
                title: 'UI/UX Design',
                description: 'Creating beautiful, accessible interfaces with Material UI, Tailwind CSS, Bootstrap, and Shadcn. Ensuring consistent design patterns across multiple projects.',
                icon: '🎨',
                gradient: 'from-orange-500/10 to-red-500/10',
              },
              {
                title: 'API Integration',
                description: 'Integrating RESTful APIs with TanStack Query for enhanced application functionality. Building complex data-intensive applications with advanced filtering capabilities.',
                icon: '🔌',
                gradient: 'from-indigo-500/10 to-violet-500/10',
              },
              {
                title: 'Testing & Quality',
                description: 'Maintaining high code quality through comprehensive testing with Jest and debugging. Achieved 40% reduction in reported bugs through systematic testing practices.',
                icon: '✅',
                gradient: 'from-yellow-500/10 to-amber-500/10',
              },
            ].map((item, index) => (
              <ServiceCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}