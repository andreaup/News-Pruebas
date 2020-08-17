import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {data} from "../resources/numberCategories"

const SearchMenu = ({ defaultUser, onGet }) => {
  onGet(data[defaultUser]);
  return (
    <nav className="Categorias">
      <ul>
        <li>
          <Link to={"/home"}>
            <i className="fa fa-home fa-lg"></i> Home
          </Link>
        </li>
        <li>
          <Link to={"/politica"}>
            <i className="fa fa-balance-scale fa-lg"></i> Política
          </Link>
        </li>
        <li>
          <Link to={"/categories/internacional"}>
            <i className="fa fa-globe fa-lg "></i> Internacionales
          </Link>
        </li>
        <li>
          <Link to={"/categories/tecnología"}>
            <i className="fa fa-laptop fa-lg "></i> Tecnología
          </Link>
        </li>
        <li>
          <Link to={"/categories/espectáculos"}>
            <i className="fa fa-film fa-lg "></i> Espectáculos
          </Link>
        </li>

        <li>
          <Link to={"/categories/deportes"}>
            <i className="fa fa-futbol-o fa-lg "></i> Deportes
          </Link>
        </li>

        <li>
          <Link to={"/categories/diseño"}>
            <i className="fa fa-paint-brush fa-lg "></i> Diseño
          </Link>
        </li>
      </ul>
    </nav>
  );
};

SearchMenu.propTypes = {
  onGet: PropTypes.func,
};

export default SearchMenu;
