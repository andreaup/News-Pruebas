import React from "react";
import PropTypes from "prop-types";
import moment from 'moment';

const RepoList = ({ repos, hasError, isLoading }) => {
  if (hasError) {
    return (
      <div className="container">
        <h6>Sorry! There was an error loading the news.</h6>
      </div>
    );
  }


  if (isLoading) {
    return (
      <div className="container">
        <h6>Loading…</h6>
      </div>
    );
  }
  return (
    <div className="container">
      {repos.map((repo) => (
        <div className="Card">
          <div className="images">
            <img alt="" src={repo.img_url === null ? 'https://www.dia.org/sites/default/files/No_Img_Avail.jpg': repo.img_url}/>
          </div>
          <div className="description">
            <a href={repo.url}>
              {repo.title}
            </a>
            <p>
              <b>{repo.source_name}</b>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

RepoList.propTypes = {
  repos: PropTypes.array,
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default RepoList;
