import React from 'react';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '../ui/Button';

// Navigation items with nested structure
const navigationItems = [
  {
    text: 'Products',
    path: '/products',
    children: [
      { text: 'EcoBin Lite', path: '/products/v1' },
      { text: 'EcoBin Pro', path: '/products/v2' },
      { text: 'EcoBin Plus', path: '/products/v3' },
      { text: 'Clean Features', path: '/products/features' }
    ]
  },
  { text: 'Education', path: '/blog' },
  { text: 'AI Innovations', path: '/features' },
  { text: 'BySelfLabs', path: '/company' }
];

export function Header() {
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl mx-auto z-50"
    >
      <nav className="backdrop-blur-md bg-white/70 border border-eco-primary/20 rounded-2xl shadow-lg shadow-eco-primary/10 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-eco-primary to-eco-secondary bg-clip-text text-transparent">
              EcoTail
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {navigationItems.map((item) => (
                <div
                  key={item.path}
                  className="relative group"
                  onMouseEnter={() => item.children && setActiveDropdown(item.path)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-eco-neutral hover:text-eco-secondary transition-colors ${
                        isActive ? 'text-eco-secondary' : ''
                      }`
                    }
                  >
                    {item.text}
                  </NavLink>
                  
                  {/* Dropdown for Products */}
                  {item.children && activeDropdown === item.path && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 py-2 bg-white rounded-lg shadow-lg min-w-[200px]"
                    >
                      {item.children.map((child) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-eco-neutral hover:text-eco-secondary hover:bg-eco-primary/5 transition-colors ${
                              isActive ? 'text-eco-secondary bg-eco-primary/10' : ''
                            }`
                          }
                        >
                          {child.text}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="primary"
              className="bg-gradient-to-r from-eco-primary to-eco-secondary text-white hover:opacity-90 transition-all duration-300"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
} 