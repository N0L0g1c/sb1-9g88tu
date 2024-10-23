import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Palette, Sparkles, Zap, Paintbrush, ChevronRight } from 'lucide-react';
import Navbar from './components/Navbar';
import TestimonialCard from './components/TestimonialCard';
import AnimateOnScroll from './components/AnimateOnScroll';
import Team from './pages/Team';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight dark:text-white">
                Transform Your Creative Vision with
                <span className="text-indigo-600 dark:text-indigo-400"> Digital Art Suite Pro</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Unleash your creativity with our professional-grade digital art tools. Perfect for artists, designers, and creative professionals.
              </p>
              <div className="flex gap-4 pt-2">
                <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2">
                  Start Creating <ChevronRight className="h-5 w-5" />
                </button>
                <button className="border-2 border-gray-300 dark:border-gray-700 px-8 py-3 rounded-full font-medium hover:border-indigo-600 hover:text-indigo-600 dark:text-white dark:hover:border-indigo-400 dark:hover:text-indigo-400 transition-colors">
                  Watch Demo
                </button>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&q=80&w=2000"
                  alt="Digital Art Creation"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <Paintbrush className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    <span className="font-medium dark:text-white">4K+ Brushes</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-6xl px-4">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
              Powerful Features for Professional Artists
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Palette className="h-6 w-6" />,
                title: "Advanced Brush Engine",
                description: "Customizable brushes with pressure sensitivity and texture mapping"
              },
              {
                icon: <Sparkles className="h-6 w-6" />,
                title: "AI-Powered Effects",
                description: "Smart filters and effects that adapt to your art style"
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: "Real-time Collaboration",
                description: "Work together with team members in real-time"
              }
            ].map((feature, index) => (
              <AnimateOnScroll key={index} delay={index * 100}>
                <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors h-full">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl px-4">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
              Loved by Artists Worldwide
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Digital Artist",
                content: "This suite has completely transformed my workflow. The brush engine is incredible!",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
              },
              {
                name: "Marcus Rodriguez",
                role: "Concept Artist",
                content: "The AI-powered effects save me hours of work. Absolutely worth every penny.",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
              },
              {
                name: "Emma Thompson",
                role: "Illustrator",
                content: "Real-time collaboration features make working with clients a breeze.",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
              }
            ].map((testimonial, index) => (
              <AnimateOnScroll key={index} delay={index * 100}>
                <TestimonialCard {...testimonial} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 dark:bg-indigo-900 text-white overflow-hidden">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6">Ready to Create Your Masterpiece?</h2>
            <p className="text-xl mb-8 text-indigo-100">
              Join thousands of artists who have already elevated their creative process.
            </p>
            <button className="bg-white text-indigo-600 dark:bg-gray-900 dark:text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors">
              Get Started Today
            </button>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;