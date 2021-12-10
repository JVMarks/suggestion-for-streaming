import { Status } from "../../types/status";
import { StreamingPlatform } from "../../types/streamingPlatform";
import axiosClient from "../apiClient";

import { BASE_URL, API_KEY } from "../../utils/constants/apiConstants";
import { Movie } from "../../types/movie";
import { RecommendedMovieProps } from "../../types/recommendedMovieProps";

async function getInit(): Promise<boolean> {
  let status = false;

  await axiosClient
    .get<Status>(`${BASE_URL}/movie/init/${API_KEY}`)
    .then((response) => {
      status = response.data.status;
    });
  return status;
}

export async function getMovies(): Promise<StreamingPlatform[]> {
  let streamingPlatforms = [] as StreamingPlatform[];
  let status = false;

  await getInit().then((response) => {
    status = response;
  });

  if (status) {
    await axiosClient
      .get<StreamingPlatform[]>(`${BASE_URL}/movie/listAll`)
      .then((response) => {
        streamingPlatforms = response.data;
      });
  }
  return streamingPlatforms;
}

export async function getRecommendedMovie(props: RecommendedMovieProps): Promise<Movie> {
  let recommendedMovie = {} as Movie;
  let status = false;

  await getInit().then((response) => {
    status = response;
  });

  if (status) {
    console.log(`${BASE_URL}/movie/recommendMovie/${props.idPlatform}/${props.idVideo}/${props.genresId}`);

    await axiosClient
      .get<Movie>(
        `${BASE_URL}/movie/recommendMovie/${props.idPlatform}/${props.idVideo}/${props.genresId}`
      )
      .then((response) => {
        recommendedMovie = response.data;
      });
  }
  return recommendedMovie;
}
