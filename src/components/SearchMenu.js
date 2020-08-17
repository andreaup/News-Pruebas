import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SearchMenu = ({ defaultUser, onGet }) => {
  let _input;
_input = '2';
  return (
    // <div className="container">
    //   <h5>Categorias de Noticias</h5>
    //           <button
    //             className="btn btn-outline-secondary"
    //             type="button"
    //             onClick={() => onGet(_input)}
    //           >
    //             Buscar
    //           </button>
    //     <div className="col">
    //     </div>
    //   </div>

<nav className ="Categorias">
<ul>
  
    <li>
    {/* <a href= {categories}><i className="fa fa-home fa-lg"></i>  Home</a> */}
    <button onClick={() => onGet(_input)}><i className="fa fa-balance-scale fa-lg"></i> obtener noticias</button>
    </li>

    <li>
       <a href=""><i className="fa fa-balance-scale fa-lg"></i>  Política</a>
   </li>

    <li>
         <a href=""><i className="fa fa-globe fa-lg "></i>  Internacionales</a>
   </li>

    <li>
        <a href=""><i className="fa fa-laptop fa-lg "></i>  Tecnología</a>
    </li>

    <li>
        <a href=""><i className="fa fa-film fa-lg "></i>  Espectáculos</a>
     </li>

    <li>
        <a href=""><i className="fa fa-futbol-o fa-lg "></i> Deportes</a>
    </li>

    <li>
         <a href=""><i className="fa fa-paint-brush fa-lg "></i>  Diseño</a>
    </li>
</ul>
</nav>
  );
};

SearchMenu.propTypes = {
  onGet: PropTypes.func
};

export default SearchMenu;
