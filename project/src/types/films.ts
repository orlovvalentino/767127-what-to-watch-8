export type Rating = {
  ratingCount: number;
  ratingScore: string;
  ratingLevel: string,
  comments: Comment[]
}
export type Comment = {
  comment: string,
  author: string,
  datePublish: string,
  rating: string
}
export type Film = {
  year: string;
  duration: string,
  director: string;
  genre: string;
  name: string;
  starring: string[];
  description: string;
  id: string;
  video: string;
  poster: string;
  banner: string,
  ratings: Rating;
}
export type Films = Film[];
