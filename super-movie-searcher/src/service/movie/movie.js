export function getListMovies(params) {
  return fetch(
    `https://api.themoviedb.org/4/list/1?page=1&api_key=b15f77463ee209064e6a74ac153c528c&sort_by=${params}`
  ).then((res) => res.json());
}

export function getMovie(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=b15f77463ee209064e6a74ac153c528c`
  ).then((res) => res.json());
}
