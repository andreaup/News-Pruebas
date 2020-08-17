export const loadingError = (bool) => ({
  type: "LOADING_ERROR",
  hasErrored: bool,
});

export const loadingInProgress = (bool) => ({
  type: "LOADING_IN_PROGRESS",
  isLoading: bool,
});

export const loadingSuccess = (repos) => ({
  type: "LOADING_SUCCESS",
  repos,
});

export const getRepos = (id) => {
  return (dispatch) => {
    dispatch(loadingError(false));
    dispatch(loadingInProgress(true));
    const date = `${new Date().getUTCFullYear()}-${new Date().getUTCMonth()}-${new Date().getUTCDay()}`
    let url = '';
    if (id === 0) 
      url = `https://api.canillitapp.com/trending/2020-08-17/10`
    else
      url = `https://api.canillitapp.com/news/category/${id}`;
console.log(url)
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(loadingInProgress(false));
        return response;
      })
      .then((response) => response.json())
      .then((repos) => dispatch(loadingSuccess(repos)))
      .catch(() => dispatch(loadingError(true)));
  };
};
