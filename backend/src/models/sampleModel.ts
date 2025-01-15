interface TrashCan {
  id: number;
  name: string;
  status: 'Available' | 'Full' | 'Maintenance';
  lastEmptied?: Date;
}

export const sampleData: TrashCan[] = [
  { 
    id: 1, 
    name: 'EcoTail Smart Trash Can #1',
    status: 'Available',
    lastEmptied: new Date()
  }
];

export const getSampleData = (): TrashCan[] => sampleData; 