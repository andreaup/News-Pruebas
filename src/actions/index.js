import moment from 'moment';

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
    const date = moment().locale("es").format("YYYY-MM-DD");
    let url = '';
    if (id === 0) 
      url = `https://api.canillitapp.com/latest/${date}`
    else
      url = `https://api.canillitapp.com/news/category/${id}`;
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
