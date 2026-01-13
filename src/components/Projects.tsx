"use client";

import React, { useEffect, useMemo, useState } from 'react';
import { Section, Button } from '@/components';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useInView } from '@/hooks/useInView';
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiMongodb, SiSocketdotio, SiRedux,
  SiMui, SiJavascript, SiExpress
} from 'react-icons/si';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image?: string;
  tags: string[];
  category: string;
  link?: string;
  github?: string;
  gradient: string;
  featured?: boolean;
}

interface ProjectsProps {
  projects?: Project[];
}

const techIcons: Record<string, React.ReactNode> = {
  'React': <SiReact />,
  'Next.js': <SiNextdotjs />,
  'TypeScript': <SiTypescript />,
  'Tailwind': <SiTailwindcss />,
  'Node.js': <SiNodedotjs />,
  'MongoDB': <SiMongodb />,
  'Socket.io': <SiSocketdotio />,
  'Redux': <SiRedux />,
  'Material UI': <SiMui />,
  'JavaScript': <SiJavascript />,
  'Express.js': <SiExpress />,
  'WebSockets': <SiSocketdotio />,
};

// Individual Project Card Component with Intersection Observer
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.03]"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`,
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      }}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>

      <div className="relative z-10 p-8 h-full flex flex-col">
        <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-foreground/10 text-xs font-semibold mb-4">
          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
          {project.category}
        </div>

        <h4 className="text-xl font-bold mb-3">{project.title}</h4>
        <p className="text-sm text-foreground/60 mb-4">{project.description}</p>
        <p className="text-foreground/70 leading-relaxed mb-6 flex-grow text-sm">
          {project.longDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 4).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-foreground/5 text-xs font-medium"
            >
              {techIcons[tag] && <span className="text-sm">{techIcons[tag]}</span>}
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <Button
            onClick={() => window.location.href = '/coming-soon'}
            size="sm"
            className="flex-1 rounded-xl gap-2"
            title="View Demo"
          >
            <FaExternalLinkAlt className="text-xs" />
            Demo
          </Button>
          <Button
            onClick={() => window.location.href = '/coming-soon'}
            size="sm"
            className="flex-1 rounded-xl gap-2 border border-foreground/20 hover:scale-105"
          >
            <FaGithub />
            Code
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Projects({
  projects = [
    // Professional Experience Projects
    {
      title: 'Admin Dashboard Interface',
      description: 'Dynamic & Responsive Admin Panel with Performance Optimization',
      longDescription:
        'Developed at Dignizant Technologies, this enterprise admin dashboard features dynamic interfaces with code splitting and lazy loading for optimal performance. Implemented metadata optimization and SEO-friendly coding practices for improved web application discoverability. Architected scalable component libraries with Shadcn UI, ensuring consistent design patterns across multiple projects.',
      tags: ['React', 'Next.js', 'TypeScript', 'Shadcn'],
      category: 'Professional Work',
      gradient: 'from-blue-500 to-cyan-500',
      featured: true,
    },
    {
      title: 'Live Chat Application',
      description: 'Real-Time Communication Platform with File Sharing',
      longDescription:
        'Built at Bitfront Infotech, this WhatsApp-like chat system implements real-time functionality using WebSockets and Socket.io. Features comprehensive attachment capabilities for documents, photos, audio, and video sharing. Designed responsive interfaces with advanced emoji, sticker, and GIF functionality, ensuring seamless user experience across all device types.',
      tags: ['React', 'Socket.io', 'WebSockets', 'TypeScript'],
      category: 'Professional Work',
      gradient: 'from-green-500 to-emerald-500',
      featured: true,
    },
    {
      title: 'CUBE-AI (ChatPDF Application)',
      description: 'AI-Powered Document Interaction Tool',
      longDescription:
        'Developed at Bitfront Infotech, this innovative tool allows users to chat with PDF documents using AI. Built responsive interfaces with smooth animations and successfully integrated backend AI services for document processing and analysis. Implemented dynamic search and question-answering features for enhanced document interaction.',
      tags: ['React', 'TypeScript', 'Material UI'],
      category: 'Professional Work',
      gradient: 'from-purple-500 to-pink-500',
      featured: true,
    },
    {
      title: 'Admin Panel with RBAC',
      description: 'Role-Based Access Control System',
      longDescription:
        'Built at Bitfront Infotech, this admin panel features advanced role-based access control systems using Redux for state management. Developed complex UI components with TypeScript and integrated RESTful APIs for enhanced application functionality. Improved security and user management through granular permission controls.',
      tags: ['React', 'Redux', 'TypeScript', 'Node.js'],
      category: 'Professional Work',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Responsive Web Application',
      description: 'Accessibility-First Web Interface',
      longDescription:
        'Created at Braincuber Technology, this project focused on building responsive web interfaces with React.js, implementing accessibility standards and optimized user experiences. Developed dynamic content rendering solutions with advanced filtering capabilities for data-intensive applications. Achieved 40% reduction in reported bugs through comprehensive testing and debugging.',
      tags: ['React', 'JavaScript', 'Bootstrap', 'Jest'],
      category: 'Professional Work',
      gradient: 'from-indigo-500 to-violet-500',
    },
    {
      title: 'Data-Intensive Application',
      description: 'Advanced Filtering & Dynamic Rendering',
      longDescription:
        'Built at Braincuber Technology, this application showcases advanced filtering capabilities and dynamic content rendering for handling large datasets. Implemented efficient data management strategies with optimized rendering performance. Features include real-time search, multiple filter options, and pagination for seamless user experience.',
      tags: ['React', 'JavaScript', 'Tailwind', 'Redux'],
      category: 'Professional Work',
      gradient: 'from-yellow-500 to-amber-500',
    },
    // Additional Portfolio Projects
    {
      title: 'E-Commerce Platform',
      description: 'Full-Stack Shopping Experience',
      longDescription:
        'A complete e-commerce solution with product catalog, shopping cart, and secure checkout process. Features include user authentication, order management, payment integration, and admin dashboard for inventory management. Built with modern stack for optimal performance and scalability.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      category: 'Personal Projects',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Task Management System',
      description: 'Collaborative Project Management Tool',
      longDescription:
        'A Trello-inspired task management application with drag-and-drop functionality, real-time collaboration, and team workspace features. Includes kanban boards, task assignments, due dates, and progress tracking. Perfect for teams to organize and track project workflows efficiently.',
      tags: ['React', 'TypeScript', 'Redux', 'Material UI'],
      category: 'Personal Projects',
      gradient: 'from-teal-500 to-cyan-500',
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-Time Weather Information App',
      longDescription:
        'An interactive weather dashboard that provides real-time weather data, forecasts, and weather alerts. Features include location-based weather, multiple city tracking, detailed weather metrics, and beautiful data visualizations. Integrated with weather APIs for accurate and up-to-date information.',
      tags: ['React', 'JavaScript', 'Tailwind', 'Next.js'],
      category: 'Personal Projects',
      gradient: 'from-blue-400 to-blue-600',
    },
  ],
}: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [initialVisibleCount, setInitialVisibleCount] = useState<number>(6);

  // Determine initial counts based on viewport: 6 on md+ (>=768px), 3 on small screens
  useEffect(() => {
    const compute = () => {
      if (typeof window === 'undefined') return 6;
      const isMdUp = window.matchMedia('(min-width: 768px)').matches;
      return isMdUp ? 6 : 3;
    };
    const update = () => {
      setInitialVisibleCount(() => {
        const next = compute();
        // Reset visible count when screen size changes
        return next;
      });
    };
    // set on mount
    setInitialVisibleCount(compute());
    setVisibleCount(compute());
    // update on resize
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const visibleProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [visibleCount, filteredProjects]);

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(initialVisibleCount);
  }, [selectedCategory, initialVisibleCount]);

  return (
    <Section id="projects" spacing="lg" containerSize="lg">
      <div className="space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-block">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground" style={{ color: 'var(--foreground)' }}>
              Featured Work
            </h2>
            <div className="h-1.5 bg-gradient-to-r from-transparent via-foreground to-transparent rounded-full mt-4"></div>
          </div>
          <p className="text-xl sm:text-2xl text-foreground/60 max-w-3xl mx-auto leading-relaxed">
            A curated selection of projects showcasing innovation, design excellence, and technical expertise
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              size="sm"
              variant={selectedCategory === category ? 'primary' : 'ghost'}
              className={`rounded-full ${selectedCategory === category ? 'shadow-lg scale-105' : 'text-foreground/70 hover:text-foreground hover:scale-105'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => {
            return <ProjectCard key={index} project={project} index={index} />;
          })}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl text-foreground/50">
              No projects found in this category
            </p>
          </div>
        )}

        {/* More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => setVisibleCount(prev => Math.min(prev + 6, filteredProjects.length))}
              className="rounded-xl"
            >
              Show More
            </Button>
          </div>
        )}

        {/* Show Less Button */}
        {visibleCount > initialVisibleCount && (
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => setVisibleCount(initialVisibleCount)}
              className="rounded-xl"
            >
              Show Less
            </Button>
          </div>
        )}
      </div>
    </Section>
  );
}