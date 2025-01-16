import React from 'react';
import { PageHero } from '../common/PageHero';
import { Button } from '../common/Button';

export const LabsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Self Labs"
        subtitle="Pioneering research and development in sustainable technologies"
      >
        <div className="flex justify-center space-x-4">
          <Button variant="primary" className="px-8 py-3">
            Research Projects
          </Button>
          <Button variant="outline" className="px-8 py-3">
            Join Our Team
          </Button>
        </div>
      </PageHero>
    </div>
  );
}; 