import React from "react";
import { useDispatch } from "react-redux";
import {deleteTuitThunk} from "../services/tuits-thunks";
import TuitStats from "./tuit-stats";

const TuitItem = ({ tuitInfo }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2 pt-2">
          <img width={70} className="img-fluid mx-auto d-block rounded-circle" src={`${tuitInfo.image}`} alt="" />
        </div>
        <div className="col-10">
          <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuitInfo._id)}></i>
          <span className="wd-tuit-title">{tuitInfo.username}
            <span class="wd-blue-tick">
              <i class="fa fa-certificate"></i>
              <i class="fa fa-check"></i>
            </span>
            {/* <i className="fa fa-check-circle"></i> */}
            </span>
          <span className="wd-tuit-list-item-body"> {tuitInfo.handle} <span><i className="fa fa-circle"></i></span>{tuitInfo.time} </span>
          <div>
          <div className="wd-tuit-list-item-body">{tuitInfo.tuit}</div>
          <TuitStats key={tuitInfo._id} tuitInfo={tuitInfo} />
          </div>
        </div>
      </div>
      
    </li>
  );
};
export default TuitItem;

