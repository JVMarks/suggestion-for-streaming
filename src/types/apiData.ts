import { StreamingPlatform } from "../types/streamingPlatform";
import { Movie } from "../types/movie";

export type ApiData = {
  streamingPlatforms: StreamingPlatform[];
  recommendeMovies: Movie[];
};
