export type Rating = {
  ratingCount: number;
  ratingScore: string;
  ratingLevel: string,
}
export type Films = {
  year: string;
  director: string;
  genre: string;
  name: string;
  starring: string[];
  description: string;
  id: string;
  video: string;
  poster: string;
  ratings: Rating;
}
