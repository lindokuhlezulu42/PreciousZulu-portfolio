import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin } from 'lucide-react';

const PROFILE_IMG = "/Lindo.jpg";
const BG_IMG = "https://media.base44.com/images/public/user_691b54e14653d92192f8e259/c9e7277dc_image.jpg";

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={BG_IMG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-primary text-sm font-medium">Open to Work</span>
              </motion.div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                Hey, I'm{' '}
                <span className="text-primary">Precious</span>
                <br />
                <span className="text-primary">Heavens</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Junior Web Developer & Software Developer specializing in responsive websites and software applications. Passionate about solving problems, learning new technologies, and transforming ideas into practical digital solutions through clean and efficient code.
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Available Anywhere in South Africa</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                Let's Work Together
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-semibold text-sm hover:bg-secondary transition-all duration-300"
              >
                View Projects
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 pt-4">
              {[
                { value: '3+', label: 'Projects' },
                { value: '11', label: 'Technologies' },
                { value: '2026', label: 'Graduating' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10">
                <img
                  src={PROFILE_IMG}
                  alt="Precious Zulu"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}