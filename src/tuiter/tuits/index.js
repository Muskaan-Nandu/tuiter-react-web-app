import React, { useEffect } from "react";
import TuitItem from "./tuit-item";
import { useDispatch, useSelector } from "react-redux";
import { findTuitsThunk } from "../services/tuits-thunks";

const TuitsList = () => {
  const { tuitInfoArray, loading } = useSelector(state => state.tuitInfo);
  console.log("tuitInfo", tuitInfoArray, loading);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [])

  return (
    <div>
      <ul className="list-group">
        {loading &&
          <li className="list-group-item">
            Loading...
          </li>
        }

        {
          tuitInfoArray.map(tuitInfo =>
            <TuitItem
              key={tuitInfo._id}
              tuitInfo={tuitInfo} />
          )
        }
      </ul>
    </div>
  );
};
export default TuitsList;