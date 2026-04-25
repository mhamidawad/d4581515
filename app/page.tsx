import { HeroSection } from "@/components/hero-section"
import { BentoGrid } from "@/components/bento-grid"
import { ProjectsSection } from "@/components/projects-section"
import { TechStack } from "@/components/tech-stack"
import { ContactSection } from "@/components/contact-section"
import { FloatingNav } from "@/components/floating-nav"

export default function Home() {
  return (
    <main className="relative min-h-screen pb-24">
      {/* Grain texture overlay */}
      <div className="grain-overlay" aria-hidden="true" />
      
      {/* Main content */}
      <div className="relative z-10">
        <HeroSection />
        <BentoGrid />
        <TechStack />
        <ProjectsSection />
        <ContactSection />
      </div>
      
      {/* Floating navigation */}
      <FloatingNav />
    </main>
  )
}
