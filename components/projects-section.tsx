"use client"

import { Github, ExternalLink, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    image: "/projects/ecommerce.jpg",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management with real-time updates, drag-and-drop, and team workspaces.",
    image: "/projects/taskapp.jpg",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts, data visualization, and export features.",
    image: "/projects/dashboard.jpg",
    tech: ["Next.js", "D3.js", "Python", "FastAPI"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "REST API Service",
    description: "Scalable REST API with authentication, rate limiting, and comprehensive documentation.",
    image: "/projects/api.jpg",
    tech: ["Node.js", "Express", "Redis", "Docker"],
    github: "https://github.com",
    live: null,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
}

const headerVariants = {
  hidden: { 
    opacity: 0, 
    x: -30,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
}

export function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-16 max-w-6xl mx-auto">
      <motion.div 
        className="mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={headerVariants}
      >
        <h2 className="text-2xl font-bold text-foreground mb-2">Featured Projects</h2>
        <p className="text-muted-foreground">Some things I&apos;ve built recently</p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="group ide-tab rounded-lg overflow-hidden"
            variants={cardVariants}
            whileHover={{ 
              y: -8,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
          >
            {/* IDE Tab Header */}
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary/30 border-b border-border/50">
              <motion.div 
                className="flex items-center gap-2 px-3 py-1 bg-card rounded-t text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-mono text-foreground">{project.title.toLowerCase().replace(/\s+/g, '-')}.tsx</span>
                <X className="w-3 h-3 text-muted-foreground ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </div>
            
            {/* Project Content */}
            <div className="p-5">
              {/* Project Image */}
              <motion.div 
                className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-secondary"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay with links */}
                <motion.div 
                  className="absolute inset-0 bg-background/80 flex items-center justify-center gap-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    initial={{ scale: 0, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                  >
                    <Link
                      href={project.github}
                      target="_blank"
                      className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors block"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                  </motion.div>
                  {project.live && (
                    <motion.div
                      initial={{ scale: 0, y: 20 }}
                      whileHover={{ scale: 1.1 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <Link
                        href={project.live}
                        target="_blank"
                        className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors block"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
              
              {/* Project Info */}
              <motion.h3 
                className="text-lg font-semibold text-foreground mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.4 }}
                viewport={{ once: true }}
              >
                {project.title}
              </motion.h3>
              <motion.p 
                className="text-sm text-muted-foreground mb-4 line-clamp-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
              >
                {project.description}
              </motion.p>
              
              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="px-2 py-1 text-xs font-mono rounded bg-secondary/50 text-muted-foreground border border-border/50"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 + techIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(16, 185, 129, 0.2)",
                      borderColor: "rgba(16, 185, 129, 0.5)",
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
