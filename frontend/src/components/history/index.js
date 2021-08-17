import React, { useContext, useEffect, useState } from "react";
import { HistoryContext } from "../../contexts/history";
import { LoginContext } from "../../contexts/login";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./history.css";

const History = () => {
  const historyContext = useContext(HistoryContext);
  const loginContext = useContext(LoginContext);
  const history = useHistory();

  useEffect(() => {
    historyContext.showHistory();
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(historyContext.found);
  // };

  return (
    <>
    <h1 style={{marginLeft:"32px"}}>History</h1>
      <div className="mainBody">
        
        {historyContext.found.map((elem) => {
          return (<>
            <div className="itemCard">
              <div>
              <img className="product-img" src={elem.image} />
              </div>
              
              <div>
              <p className="title">{elem.title}</p>
              <p className="info">Description : {elem.shortDescription}</p>
              <p className="info">Located in : {elem.location}</p>
              {/* <p className="price" >In Stock : {elem.quantity}</p> */}
              <p className="price">Price : {elem.price}</p>
            </div>
            </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default History;
