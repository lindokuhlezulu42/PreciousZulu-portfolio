import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, Code } from 'lucide-react';

const featuredProject = {
  title: 'JobForge',
  subtitle: 'AI-Powered Career Platform',
  tagline: 'Bridging talent and opportunity with AI',
  description: 'A full-stack platform that uses AI to optimize CVs, practice interviews, and match candidates with recruiters using Google\'s Gemini API.',
  highlights: ['AI CV Optimization', 'Interview Simulator', 'Smart Matching', 'Recruiter Dashboard'],
  stats: [
    { value: '9.6%', label: 'Graduate Unemployment' },
    { value: '44%+', label: 'Youth Unemployment' },
    { value: '75%', label: 'CVs Rejected by ATS' },
  ],
  tech: ['React', 'Node.js', 'Google Gemini API', 'PostgreSQL'],
  link: 'https://ai.studio/apps/d7c34af4-5599-4bdc-a1c1-ec8c5c9fd929',
  year: '2026',
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function FeaturedProject() {
  return (
    <motion.article
      variants={cardVariants}
      className="bg-gradient-to-br from-card via-card to-primary/5 border border-primary/20 rounded-2xl overflow-hidden"
    >
      {/* Badge */}
      <div className="flex items-center gap-2 px-6 py-3 bg-primary/10 border-b border-primary/10">
        <Star className="w-4 h-4 text-primary fill-primary" />
        <span className="text-sm font-semibold text-primary">Featured Project</span>
      </div>

      <div className="p-6 lg:p-8 space-y-6">
        {/* Header */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">{featuredProject.year}</span>
          </div>
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">{featuredProject.title}</h2>
          <p className="text-primary font-medium mt-1">{featuredProject.subtitle}</p>
          <p className="text-sm text-muted-foreground mt-1 italic">{featuredProject.tagline}</p>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">{featuredProject.description}</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {featuredProject.stats.map((stat) => (
            <div key={stat.label} className="bg-secondary/50 rounded-xl p-4 text-center">
              <p className="font-heading text-xl lg:text-2xl font-bold text-primary">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
          <div className="grid grid-cols-2 gap-2">
            {featuredProject.highlights.map((h) => (
              <div key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {h}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {featuredProject.tech.map((t) => (
            <span key={t} className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-medium border border-primary/20">
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={featuredProject.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
        >
          <Code className="w-4 h-4" />
          View Prototype
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.article>
  );
}