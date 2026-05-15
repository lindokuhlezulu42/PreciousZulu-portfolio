import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Heart, GraduationCap, Briefcase, MapPin, ArrowRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const infoItems = [
  { icon: GraduationCap, label: 'Education', value: 'Diploma in Computer Science' },
  { icon: Briefcase, label: 'Experience', value: 'Junior Full Stack Developer' },
  { icon: MapPin, label: 'Location', value: 'Available Anywhere in South Africa' },
];

export default function About() {
  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Get To Know Me
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="space-y-12"
        >
          {/* Bio Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Who Am I?</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am a dedicated and ambitious Junior Software Developer with a solid foundation in Java, web development, and database technologies. Currently pursuing an Advanced Diploma in Computer Science, I have developed practical skills through academic projects and continuous self-learning. I am committed to growing as a developer and building a strong career in the tech industry.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">What Drives Me?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I am driven by a passion for solving real-world problems through code and continuously improving my skills. I enjoy turning ideas into practical solutions and collaborating on innovative projects.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My goal is to contribute to impactful software that makes everyday life easier and more efficient, guided by the belief that technology can transform the world.
              </p>
            </motion.div>
          </div>

          {/* Info + CTA Row */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Quick Info */}
            <motion.div variants={fadeInUp} className="md:col-span-2 bg-card border border-border rounded-2xl p-8">
              <h3 className="font-heading text-lg font-bold text-foreground mb-6">Quick Info</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                {infoItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-medium text-foreground mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-green-400">Open to Work</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">Let's Work Together</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Interested in collaborating? Let's create something amazing!
                </p>
              </div>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all w-fit"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}