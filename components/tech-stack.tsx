"use client"

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Node.js", icon: "⬢" },
  { name: "Python", icon: "🐍" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Git", icon: "⌥" },
  { name: "Tailwind", icon: "🎨" },
  { name: "GraphQL", icon: "◈" },
]

export function TechStack() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Tech Stack</h2>
        <p className="text-muted-foreground">Technologies I work with daily</p>
      </div>
      
      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Marquee track */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee gap-4">
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-3 rounded-lg bg-secondary/50 border border-border/50 whitespace-nowrap hover:border-primary/50 transition-colors"
              >
                <span className="text-xl font-mono">{tech.icon}</span>
                <span className="text-sm font-medium text-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
          <div className="flex animate-marquee gap-4 ml-4" aria-hidden="true">
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-3 rounded-lg bg-secondary/50 border border-border/50 whitespace-nowrap hover:border-primary/50 transition-colors"
              >
                <span className="text-xl font-mono">{tech.icon}</span>
                <span className="text-sm font-medium text-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
