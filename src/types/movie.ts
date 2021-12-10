import { Genre } from "./genre";

export type Movie = {
  id: number;
  title: string;
  imageUrl: string;
  overview: string;
  genres: Genre[];
  voteAverage: number;
};
