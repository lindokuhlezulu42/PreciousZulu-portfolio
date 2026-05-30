import React from 'react';
import { motion } from 'framer-motion';
import FeaturedProject from '../components/portfolio/FeaturedProject';
import ProjectCard from '../components/portfolio/ProjectCard';

const projects = [
  {
    id: 1,
    title: 'e_libraryLog',
    subtitle: 'Digital Library Management',
    description: 'A comprehensive full-stack system for managing books, users, and lending operations with an intuitive interface.',
    tags: ['React', 'Node.js', 'Java', 'SASS'],
    github: 'https://github.com/iceptutemalahleni/library-Frontend',
    year: '2025',
    status: 'completed',
  },
  {
    id: 2,
    title: 'SiteVisit',
    subtitle: 'Smart Field Operations',
    description: 'Field operations platform for managing site visits, reporting, and team coordination in real-time.',
    tags: ['In Development', 'Field Ops', 'Smart Tools'],
    github: 'https://github.com/vhutheluresources-rgb/sitevisit-Smart-field-operations',
    year: '2026',
    status: 'in-progress',
  },
  {
    id: 3,
    title: 'TNetra Trading',
    subtitle: 'Complete Trading Website',
    description: 'A fully completed and deployed trading website showcasing my work, design, and feature implementation.',
    tags: ['React', 'Tailwind CSS', 'Vercel'],
    link: 'https://tnetra-trading.vercel.app',
    year: '2026',
    status: 'completed',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

export default function Projects() {
  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Showcasing my work in software development, from concept to deployment.
          </p>
        </motion.div>

        {/* Featured */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-10"
        >
          <FeaturedProject />
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}