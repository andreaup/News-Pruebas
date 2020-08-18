import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { data } from "../resources/numberCategories";

const SearchMenu = ({ defaultUser, onGet }) => {
  onGet(data[defaultUser]);
  return (
    <div className = "Header">
      <div className="Search">
        <h1>News Feed </h1>
        <div>
          <input type="text" placeholder="Search" />
          <i className=" fa fa-search fa-lg"></i>
        </div>
      </div>
      <div className="Categorias">
        <nav>
          <ul>
            <li>
              <Link to={"/home"}>
                <i className="fa fa-home fa-lg"></i> Home
              </Link>
            </li>
            <li>
              <Link to={"/politics"}>
                <i className="fa fa-balance-scale fa-lg"></i> Política
              </Link>
            </li>
            <li>
              <Link to={"/international"}>
                <i className="fa fa-globe fa-lg "></i> Internacionales
              </Link>
            </li>
            <li>
              <Link to={"/tech"}>
                <i className="fa fa-laptop fa-lg "></i> Tecnología
              </Link>
            </li>
            <li>
              <Link to={"/shows"}>
                <i className="fa fa-film fa-lg "></i> Espectáculos
              </Link>
            </li>

            <li>
              <Link to={"/sports"}>
                <i className="fa fa-futbol-o fa-lg "></i> Deportes
              </Link>
            </li>

            <li>
              <Link to={"/design"}>
                <i className="fa fa-paint-brush fa-lg "></i> Diseño
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

SearchMenu.propTypes = {
  onGet: PropTypes.func,
};

export default SearchMenu;
