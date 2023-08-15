import React, { useState } from "react";

const TuitStats = ({ tuitInfo }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(tuitInfo.likes);

    const handleButtonClick = () => {
        if (isLiked) {
        // If already liked, decrement likesCount and set isLiked to false
        setLikesCount((likesCount) => likesCount - 1);
        } else {
        // If not liked, increment likesCount and set isLiked to true
        setLikesCount((likesCount) => likesCount + 1);
        }

        setIsLiked((isLiked) => !isLiked);
    };

    return (
        <div className="row">
            <div className="col-2"></div>
            <div className="col-2">
            <button className="btn"><i className="fa fa-comment-o"></i></button> 
            <span className="d-none d-lg-inline-block">{tuitInfo.replies}</span>
            </div>
            <div className="col-2">
            <button className="btn"><i className="fa fa-retweet"></i></button> 
            <span className="d-none d-lg-inline-block">{tuitInfo.retuits}</span>
            </div>
            <div className="col-2 col-lg-3">
            <button className="btn" onClick={handleButtonClick}><i className={`fa ${isLiked ? "fa-heart text-danger" : "fa-heart-o"}`}></i></button> 
            <span className="d-none d-lg-inline-block">{likesCount}</span>
            </div>
            <div className="col-2">
            <button className="btn"><i className="fa fa-upload"></i></button>
            </div>
            <div className="col-2"></div>
        </div>
    );
}

export default TuitStats;