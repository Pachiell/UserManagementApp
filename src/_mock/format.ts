const date = new Date();

export type TypeFormat = {
  formatId: string;
  formatName: string;
  createdAt: string;
  updatedAt: string;
};

export const formatList = [...Array(100)].map((_, i) => ({
  formatId: (i + 1).toString(),
  formatName: `フォーマット${i + 1}`,
  createdAt: date.toLocaleDateString(),
  updatedAt: date.toLocaleDateString(),
}));
