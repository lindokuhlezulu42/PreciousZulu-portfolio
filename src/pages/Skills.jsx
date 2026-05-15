import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Globe, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['Java', 'JavaScript', 'TypeScript', 'Kotlin', 'PL/SQL', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: Globe,
    skills: ['React', 'CSS', 'Sass', 'HTML'],
  },
  {
    title: 'Backend & DB',
    icon: Database,
    skills: ['Node.js', 'SQL', 'PL/SQL', 'MongoDB'],
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    skills: ['React Native', 'Kotlin'],
  },
];

const allSkills = [
  'Java', 'JavaScript', 'TypeScript', 'Kotlin', 'CSS', 'Sass',
  'React', 'React Native', 'Node.js', 'PL/SQL', 'SQL',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
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
            My Toolkit
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Technologies and tools I use to build modern, responsive, and efficient software solutions.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={itemVariants}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <cat.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* All Skills Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h3 className="font-heading text-xl font-bold text-foreground mb-6 text-center">All Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {allSkills.map((skill, i) => (
              <motion.div
                key={skill}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-3 rounded-xl bg-card border border-border text-foreground text-sm font-medium hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}