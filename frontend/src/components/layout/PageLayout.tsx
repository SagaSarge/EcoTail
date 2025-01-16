import React, { useState } from 'react';
import { Header } from './Header';

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-eco-secondary">
      <Header />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
} 