import React from "react";
import TuitItem from "./tuit-item";
import {useSelector} from "react-redux";

const TuitsList = () => {
  const tuitInfoArray = useSelector(state => state.tuitInfo.tuitsArray);

 return(
  <div>
    <ul className="list-group">
        {
          tuitInfoArray.map(tuitInfo =>
          <TuitItem
            key={tuitInfo._id}
            tuitInfo={tuitInfo}/>
          )
        }
    </ul>
  </div>
 );
};
export default TuitsList;