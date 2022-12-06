import { Servers } from 'store/serverSlice';

export const sortData = (servers: Servers, type: 'distance' | 'name', order: 'asc' | 'desc') => {
  const sortedData = [...servers].sort((a, b) =>
    type === 'distance' ? a.distance - b.distance : a.name.localeCompare(b.name)
  );
  return order === 'asc' ? sortedData : sortedData.reverse();
};
