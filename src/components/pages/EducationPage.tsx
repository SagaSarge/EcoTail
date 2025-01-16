import React from 'react';
import { PageHero } from '../common/PageHero';
import { Button } from '../common/Button';

export const EducationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Education Hub"
        subtitle="Empowering communities with sustainability knowledge"
      >
        <div className="flex justify-center space-x-4">
          <Button variant="primary" className="px-8 py-3">
            Start Learning
          </Button>
          <Button variant="outline" className="px-8 py-3">
            Browse Resources
          </Button>
        </div>
      </PageHero>
    </div>
  );
}; 