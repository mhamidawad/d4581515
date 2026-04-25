"use client"

import { useState, useEffect } from "react"
import { Home, FolderKanban, Mail, User } from "lucide-react"
import Link from "next/link"

const navItems = [
  { href: "#home", icon: Home, label: "Home" },
  { href: "#projects", icon: FolderKanban, label: "Projects" },
  { href: "#contact", icon: Mail, label: "Contact" },
]

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "contact"]
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="glass-nav rounded-full px-2 py-2 flex items-center gap-1">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.slice(1)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                relative p-3 rounded-full transition-all duration-300
                ${isActive 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }
              `}
              aria-label={item.label}
            >
              <item.icon className="w-5 h-5" />
              {isActive && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-card rounded text-xs font-mono text-foreground whitespace-nowrap border border-border">
                  {item.label}
                </span>
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
