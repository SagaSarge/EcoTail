import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';

interface RecyclingProgram {
  id: string;
  title: string;
  description: string;
  organization: string;
  website: string;
  contactEmail: string;
  phone: string;
  level: 'local' | 'state' | 'federal';
  category: 'residential' | 'commercial' | 'industrial';
  materials: string[];
  active: boolean;
}

const programs: RecyclingProgram[] = [
  // Local Programs
  {
    id: 'l1',
    title: 'Community Recycling Initiative',
    description: 'Weekly curbside collection of recyclables for residential areas',
    organization: 'City Waste Management',
    website: 'www.citywaste.gov',
    contactEmail: 'recycling@citywaste.gov',
    phone: '(555) 123-4567',
    level: 'local',
    category: 'residential',
    materials: ['plastic', 'paper', 'glass', 'metal'],
    active: true
  },
  {
    id: 'l2',
    title: 'Business Recycling Program',
    description: 'Specialized recycling services for local businesses',
    organization: 'Chamber of Commerce',
    website: 'www.chamberrecycle.org',
    contactEmail: 'business@chamberrecycle.org',
    phone: '(555) 234-5678',
    level: 'local',
    category: 'commercial',
    materials: ['paper', 'electronics', 'industrial waste'],
    active: true
  },
  // State Programs
  {
    id: 's1',
    title: 'State E-Waste Initiative',
    description: 'Free electronic waste recycling for state residents',
    organization: 'State Environmental Agency',
    website: 'www.state-ewaste.gov',
    contactEmail: 'ewaste@state.gov',
    phone: '(555) 345-6789',
    level: 'state',
    category: 'residential',
    materials: ['electronics', 'batteries', 'appliances'],
    active: true
  },
  {
    id: 's2',
    title: 'Industrial Recycling Grant',
    description: 'Funding for large-scale industrial recycling projects',
    organization: 'State Industry Department',
    website: 'www.state-industry.gov',
    contactEmail: 'grants@state-industry.gov',
    phone: '(555) 456-7890',
    level: 'state',
    category: 'industrial',
    materials: ['industrial waste', 'chemicals', 'metals'],
    active: true
  },
  // Federal Programs
  {
    id: 'f1',
    title: 'National Recycling Initiative',
    description: 'Federal guidelines and support for recycling programs',
    organization: 'EPA',
    website: 'www.epa.gov/recycle',
    contactEmail: 'recycling@epa.gov',
    phone: '(555) 567-8901',
    level: 'federal',
    category: 'residential',
    materials: ['all materials'],
    active: true
  },
  {
    id: 'f2',
    title: 'Federal Green Business Program',
    description: 'Certification and support for environmentally conscious businesses',
    organization: 'Department of Commerce',
    website: 'www.commerce.gov/green',
    contactEmail: 'green@commerce.gov',
    phone: '(555) 678-9012',
    level: 'federal',
    category: 'commercial',
    materials: ['all materials'],
    active: true
  }
];

export const RecyclingProgramsPage: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<'local' | 'state' | 'federal'>('local');

  const filteredPrograms = programs.filter(program => program.level === selectedLevel);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
            Recycling Programs
          </h1>
          <p className="mt-4 text-gray-400 text-lg">
            Explore available recycling programs at different government levels
          </p>
        </motion.div>

        {/* Level Selection */}
        <div className="flex justify-center gap-4 mb-12">
          {(['local', 'state', 'federal'] as const).map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedLevel === level
                  ? 'bg-white/10 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="p-6 bg-zinc-900/50 backdrop-blur-lg border border-white/10 hover:bg-white/5 transition-all duration-300">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{program.title}</h3>
                      <p className="text-gray-400 mt-1">{program.organization}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      program.active ? 'bg-emerald-400/10 text-emerald-400' : 'bg-red-400/10 text-red-400'
                    }`}>
                      {program.active ? 'Active' : 'Inactive'}
                    </span>
                  </div>

                  <p className="text-gray-300">{program.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {program.materials.map((material) => (
                      <span
                        key={material}
                        className="px-2 py-1 rounded-md text-xs font-medium bg-white/5 text-gray-300"
                      >
                        {material}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-4 mt-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-400">Website</p>
                        <a
                          href={`https://${program.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-400 hover:text-blue-300"
                        >
                          {program.website}
                        </a>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Contact</p>
                        <p className="text-sm text-gray-300">{program.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}; 