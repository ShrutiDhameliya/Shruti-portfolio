"use client";

import Section from "../ui/Section";
import GlassCard from "../ui/GlassCard";
import NeonButton from "../ui/NeonButton";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: 'Admin Dashboard Interface',
    description: 'Dynamic & Responsive Admin Panel with Performance Optimization',
    longDescription: 'Developed at Dignizant Technologies, this enterprise admin dashboard features dynamic interfaces with code splitting and lazy loading for optimal performance. Implemented metadata optimization and SEO-friendly coding practices. Architected scalable component libraries with Shadcn UI.',
    tags: ['React', 'Next.js', 'TypeScript', 'Shadcn'],
    category: 'Professional Work',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Live Chat Application',
    description: 'Real-Time Communication Platform with File Sharing',
    longDescription: 'Built at Bitfront Infotech, this WhatsApp-like chat system implements real-time functionality using WebSockets and Socket.io. Features comprehensive attachment capabilities for documents, photos, audio, and video sharing. Designed responsive interfaces with advanced emoji, sticker, and GIF functionality.',
    tags: ['React', 'Socket.io', 'WebSockets', 'TypeScript'],
    category: 'Professional Work',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'CUBE-AI (ChatPDF Application)',
    description: 'AI-Powered Document Interaction Tool',
    longDescription: 'Developed at Bitfront Infotech, this innovative tool allows users to chat with PDF documents using AI. Built responsive interfaces with smooth animations and successfully integrated backend AI services for document processing and analysis.',
    tags: ['React', 'TypeScript', 'Material UI'],
    category: 'Professional Work',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Admin Panel with RBAC',
    description: 'Role-Based Access Control System',
    longDescription: 'Built at Bitfront Infotech, this admin panel features advanced role-based access control systems using Redux for state management. Developed complex UI components with TypeScript and integrated RESTful APIs.',
    tags: ['React', 'Redux', 'TypeScript', 'Node.js'],
    category: 'Professional Work',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Responsive Web Application',
    description: 'Accessibility-First Web Interface',
    longDescription: 'Created at Braincuber Technology, this project focused on building responsive web interfaces with React.js, implementing accessibility standards and optimized user experiences. Achieved 40% reduction in reported bugs through comprehensive testing.',
    tags: ['React', 'JavaScript', 'Bootstrap', 'Jest'],
    category: 'Professional Work',
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    title: 'Data-Intensive Application',
    description: 'Advanced Filtering & Dynamic Rendering',
    longDescription: 'Built at Braincuber Technology, this application showcases advanced filtering capabilities and dynamic content rendering for handling large datasets. Implemented efficient data management strategies with optimized rendering performance.',
    tags: ['React', 'JavaScript', 'Tailwind', 'Redux'],
    category: 'Professional Work',
    gradient: 'from-yellow-500 to-amber-500',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-Stack Shopping Experience',
    longDescription: 'A complete e-commerce solution with product catalog, shopping cart, and secure checkout process. Features include user authentication, order management, payment integration, and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    category: 'Personal Projects',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Task Management System',
    description: 'Collaborative Project Management Tool',
    longDescription: 'A Trello-inspired task management application with drag-and-drop functionality, real-time collaboration, and team workspace features. Includes kanban boards, task assignments, due dates, and progress tracking.',
    tags: ['React', 'TypeScript', 'Redux', 'Material UI'],
    category: 'Personal Projects',
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-Time Weather Information App',
    longDescription: 'An interactive weather dashboard that provides real-time weather data, forecasts, and weather alerts. Features include location-based weather, multiple city tracking, detailed weather metrics, and beautiful data visualizations.',
    tags: ['React', 'JavaScript', 'Tailwind', 'Next.js'],
    category: 'Personal Projects',
    gradient: 'from-blue-400 to-blue-600',
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <Section id="projects" className="space-y-12">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Featured <span className="text-gradient">Work</span></h2>
        <p className="text-gray-400">A curated selection of projects showcasing innovation, design excellence, and technical expertise.</p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${selectedCategory === category
                ? 'bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(var(--color-primary),0.3)]'
                : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            layout
            key={project.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <GlassCard className="h-full flex flex-col group hover:shadow-[0_0_30px_rgba(var(--color-primary),0.15)] border-t border-t-white/10">
              <div className={`h-2 absolute top-0 left-0 right-0 bg-gradient-to-r ${project.gradient} opacity-50`} />

              <div className="mt-4 mb-2 flex justify-between items-start">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5">
                  {project.category}
                </span>
                <div className="flex gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                  <FaGithub className="cursor-pointer hover:text-primary transition-colors" />
                  <FaExternalLinkAlt className="cursor-pointer hover:text-primary transition-colors" />
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-2 mb-3 text-white group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                {project.longDescription}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium text-primary/80 bg-primary/10 px-2 py-1 rounded">
                    #{tag}
                  </span>
                ))}
              </div>

            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
