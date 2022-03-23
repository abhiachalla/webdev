import React from "react";
import {Link} from "react-router-dom";

const HelloWorld = () => {
    return(
      <>
          <h1>Hello World!</h1>
          <Link to="/">
              Labs
          </Link> |
          <Link to="/a6/tuiter/home">
              Tuiter
          </Link>
      </>
    )
};

export default HelloWorld;
