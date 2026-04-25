"use client"

import { useState } from "react"
import { Mail, MapPin, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="px-4 py-16 max-w-6xl mx-auto">
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-2">Get In Touch</h2>
        <p className="text-muted-foreground">Have a project in mind? Let&apos;s talk.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bento-card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-mono text-foreground">mohamed@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-mono text-foreground">Riyadh, Saudi Arabia</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Code snippet decoration */}
          <div className="bento-card p-4 font-mono text-sm">
            <div className="text-muted-foreground">
              <span className="text-primary">const</span>{" "}
              <span className="text-foreground">contact</span>{" "}
              <span className="text-primary">=</span>{" "}
              <span className="text-primary">async</span>{" "}
              <span className="text-muted-foreground">()</span>{" "}
              <span className="text-primary">=&gt;</span>{" "}
              <span className="text-yellow-400">{"{"}</span>
            </div>
            <div className="pl-4">
              <span className="text-primary">await</span>{" "}
              <span className="text-blue-400">sendMessage</span>
              <span className="text-muted-foreground">(</span>
              <span className="text-green-400">{'"Hello!"'}</span>
              <span className="text-muted-foreground">);</span>
            </div>
            <div className="pl-4">
              <span className="text-primary">return</span>{" "}
              <span className="text-green-400">{'"Response within 24h"'}</span>
              <span className="text-muted-foreground">;</span>
            </div>
            <div className="text-yellow-400">
              {"}"}<span className="text-muted-foreground">;</span>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bento-card p-6">
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-8">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Message Sent!</h3>
              <p className="text-muted-foreground">I&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors font-mono"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors font-mono"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none font-mono"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 font-medium"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
