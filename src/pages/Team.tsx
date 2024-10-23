import React from 'react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import TeamMember from '../components/TeamMember';

const teamMembers = [
  {
    name: 'Alexandra Chen',
    role: 'Founder & Lead Designer',
    bio: 'Pioneer in digital art with over 15 years of experience in creating innovative design tools.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    social: {
      twitter: 'https://twitter.com',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    name: 'Marcus Williams',
    role: 'Technical Director',
    bio: 'Former Google engineer passionate about creating intuitive and powerful creative tools.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    name: 'Sofia Rodriguez',
    role: 'Head of Product',
    bio: 'Product visionary with a background in both traditional and digital arts.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    name: 'David Kim',
    role: 'Lead Developer',
    bio: 'Full-stack developer specialized in high-performance graphics and real-time collaboration.',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=400',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  }
];

export default function Team() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <AnimateOnScroll>
          <h1 className="text-4xl font-bold text-center mb-4 dark:text-white">Meet Our Team</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            We're a diverse group of passionate individuals dedicated to revolutionizing digital art creation.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <AnimateOnScroll key={member.name} delay={index * 100}>
              <TeamMember {...member} />
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={400}>
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Join Our Team</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about creating the future of digital art.
            </p>
            <a
              href="#careers"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors"
            >
              View Open Positions
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}