import React from "react";
import { Switch, Route } from "react-router-dom";
import Repos from "../containers/Repos";
import Search from "../containers/Search";

const redirectCategories = ({match})=>{
  
  return(<> 
  <Search user={match.params.id} />
  <Repos /> 
  </>)
}

const MainRouting = () => {
    return (
      <main className="main">
        <Switch>
          <Route path="/categories/:id" render={redirectCategories} />
        </Switch>
      </main>
    );
  };
  export default MainRouting;
