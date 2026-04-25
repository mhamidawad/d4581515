"use client"

import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for hire
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
              Mohamed Hamid
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground font-mono mb-6">
              Full-Stack Developer
            </p>
            
            <p className="text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
              Building scalable web applications with modern technologies. 
              Based in Riyadh, originally from Sudan.
            </p>
            
            {/* Social Links Bar */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <Link 
                href="https://github.com" 
                target="_blank"
                className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link 
                href="https://linkedin.com" 
                target="_blank"
                className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link 
                href="https://twitter.com" 
                target="_blank"
                className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link 
                href="mailto:mohamed@example.com"
                className="p-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          {/* Right side - Terminal Window */}
          <div className="flex-1 w-full max-w-lg">
            <div className="terminal-window transform hover:scale-[1.02] transition-transform duration-300">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="flex-1 text-center text-xs text-muted-foreground font-mono">
                  ~/portfolio/hello.tsx
                </span>
              </div>
              
              {/* Terminal content */}
              <div className="p-4 sm:p-6 font-mono text-sm leading-relaxed">
                <div className="text-muted-foreground">
                  <span className="text-primary">const</span>{" "}
                  <span className="text-foreground">developer</span>{" "}
                  <span className="text-primary">=</span>{" "}
                  <span className="text-yellow-400">{"{"}</span>
                </div>
                <div className="pl-4 text-muted-foreground">
                  <span className="text-foreground">name</span>
                  <span className="text-primary">:</span>{" "}
                  <span className="text-green-400">{'"Mohamed Hamid"'}</span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div className="pl-4 text-muted-foreground">
                  <span className="text-foreground">role</span>
                  <span className="text-primary">:</span>{" "}
                  <span className="text-green-400">{'"Full-Stack Dev"'}</span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div className="pl-4 text-muted-foreground">
                  <span className="text-foreground">location</span>
                  <span className="text-primary">:</span>{" "}
                  <span className="text-green-400">{'"Riyadh, SA"'}</span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div className="pl-4 text-muted-foreground">
                  <span className="text-foreground">available</span>
                  <span className="text-primary">:</span>{" "}
                  <span className="text-blue-400">true</span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div className="text-yellow-400">
                  {"}"}<span className="text-muted-foreground">;</span>
                </div>
                <div className="mt-4 text-muted-foreground">
                  <span className="text-primary">console</span>
                  <span className="text-muted-foreground">.</span>
                  <span className="text-blue-400">log</span>
                  <span className="text-muted-foreground">(</span>
                  <span className="text-green-400">{'"Hello, World! 👋"'}</span>
                  <span className="text-muted-foreground">);</span>
                  <span className="cursor-blink text-primary ml-1">|</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
