"use client"

import { Code2, Briefcase, MapPin, Coffee, Zap, Users } from "lucide-react"

const stats = [
  { label: "Years Experience", value: "5+", icon: Briefcase },
  { label: "Projects Completed", value: "50+", icon: Code2 },
  { label: "Happy Clients", value: "30+", icon: Users },
  { label: "Cups of Coffee", value: "∞", icon: Coffee },
]

export function BentoGrid() {
  return (
    <section className="px-4 py-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Large card - About */}
        <div className="bento-card md:col-span-2 lg:col-span-2 p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">About Me</h3>
              <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Passionate about creating elegant solutions to complex problems. I specialize in 
            building scalable web applications using React, Next.js, Node.js, and cloud technologies. 
            Always learning, always building.
          </p>
        </div>

        {/* Location card */}
        <div className="bento-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Location</span>
          </div>
          <p className="text-2xl font-bold text-foreground">Riyadh</p>
          <p className="text-sm text-muted-foreground">Saudi Arabia</p>
          <p className="text-xs text-primary mt-2 font-mono">Originally from Sudan</p>
        </div>

        {/* Status card */}
        <div className="bento-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm text-muted-foreground">Status</span>
          </div>
          <p className="text-lg font-semibold text-foreground">Open to Work</p>
          <p className="text-sm text-muted-foreground mt-1">Freelance & Full-time</p>
        </div>

        {/* Stats cards */}
        {stats.map((stat, index) => (
          <div key={index} className="bento-card p-6 flex flex-col justify-between">
            <div className="p-2 rounded-lg bg-primary/10 w-fit">
              <stat.icon className="w-5 h-5 text-primary" />
            </div>
            <div className="mt-4">
              <p className="text-3xl font-bold text-foreground font-mono">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
