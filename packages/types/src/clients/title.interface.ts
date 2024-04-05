/**
 * Титул собаки (CAC, CACIB, etc)
 */
export interface Title {
  id: number;

  /** Название */
  name: string;

  /** Количество титулов этого вида */
  count?: number;
}

export const titles: Title[] = [
  {
    id: 0,
    name: 'CAC',
  },
  {
    id: 1,
    name: 'CACIB',
  },
  {
    id: 2,
    name: 'BIS-1'
  }
];
