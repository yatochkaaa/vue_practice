export interface Post {
  id: number;
  title: string;
  body: string;
}

export type SortValue = "title" | "body";

export interface SortOption {
  name: string;
  value: string;
}
