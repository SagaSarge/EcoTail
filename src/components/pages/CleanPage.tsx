import React from 'react';
import { PageHero } from '../common/PageHero';
import { Button } from '../common/Button';

export const CleanPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Clean Technology"
        subtitle="Smart solutions for a cleaner, more sustainable future"
      >
        <div className="flex justify-center space-x-4">
          <Button variant="primary" className="px-8 py-3">
            Our Solutions
          </Button>
          <Button variant="outline" className="px-8 py-3">
            Learn More
          </Button>
        </div>
      </PageHero>
    </div>
  );
}; 