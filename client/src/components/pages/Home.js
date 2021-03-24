/* eslint-disable import/no-anonymous-default-export */
import { Fragment } from "react";
import Navbar from "../layout/Navbar";

export default () => {

  return(
    <Fragment>
      <Navbar/>

      <div style={{
        backgroundColor:"#5C6D37",
        color:"white",
        fontFamily:"Sans-serif",
        marginLeft:"0",
        width:"100%",
        padding:"4%"
      }}>
        <h1>Join Us Outside</h1>
      </div>
    </Fragment>
  );
}