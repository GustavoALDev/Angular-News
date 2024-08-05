export interface News {
  component?: string[];
  category?: string[];
  title?: string;
  subtitle?: string;
  content?: string;
  data?: string;
  published: string;
  finish: string;
  id?: string;
  idCateogry?: string;
  author?: string;
  emphasis?: '';
  authorEmphasis: string;
  img?: { midia: string, subtitle: string, type: 'ytVideo' | 'video' | 'photo' }[];
  url: string;
  description: string;
  active: boolean;
  date: string;
  update_at: string;
  view: number | null;
}


