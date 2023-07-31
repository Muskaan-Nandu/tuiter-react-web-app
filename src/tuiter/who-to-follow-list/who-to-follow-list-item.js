import React from "react";

const WhoToFollowListItem = ({who}) => {
 return(
  <li className="list-group-item">
    <div className="row">
        <div className="col-xl-2 col-lg-2">
            <img className="wd-who-to-follow-pic" src={`${who.avatarIcon}`} alt=""/>
        </div>
        <div className="col-xl-7 col-lg-8">
            <div className="wd-who-to-follow-title">{who.userName} <i className="fa fa-check-circle"></i></div>
            <div>@ {who.handle} </div>
        </div>
        <div className="col-xl-3 col-lg-2">
            <button className="btn btn-primary rounded-pill float-end ms-0">Follow</button>
        </div>
    </div>
  </li>
 );
};
export default WhoToFollowListItem;