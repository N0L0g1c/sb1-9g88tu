import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Palette, ShoppingCart } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import PurchaseModal from './PurchaseModal';
import ContactModal from './contact/ContactModal';

export default function Navbar() {
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 py-4 transition-colors duration-300">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Palette className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xl font-semibold dark:text-white">Artistry</span>
          </Link>
          <div className="flex items-center gap-8">
            <Link to="/" className="hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
              Home
            </Link>
            <a href="#features" className="hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
              Features
            </a>
            <Link to="/team" className="hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
              Team
            </Link>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
            >
              Contact
            </button>
            <ThemeToggle />
            <button
              onClick={() => setIsPurchaseModalOpen(true)}
              className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors"
            >
              <ShoppingCart className="h-4 w-4" />
              Buy Now
            </button>
          </div>
        </div>
      </nav>

      <PurchaseModal
        isOpen={isPurchaseModalOpen}
        onClose={() => setIsPurchaseModalOpen(false)}
      />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}