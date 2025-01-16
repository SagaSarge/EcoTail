import React from 'react';
import { PageHero } from '../common/PageHero';
import { Button } from '../common/Button';

export const AiInnovationsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="AI Innovations"
        subtitle="Revolutionizing sustainability with cutting-edge artificial intelligence"
      >
        <div className="flex justify-center space-x-4">
          <Button variant="primary" className="px-8 py-3">
            Explore AI Solutions
          </Button>
          <Button variant="outline" className="px-8 py-3">
            View Demo
          </Button>
        </div>
      </PageHero>
    </div>
  );
}; 