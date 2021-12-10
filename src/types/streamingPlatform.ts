import { Movie } from "./movie";

export type StreamingPlatform = {
  id: number;
  name: string;
  movies: Movie[];
};
