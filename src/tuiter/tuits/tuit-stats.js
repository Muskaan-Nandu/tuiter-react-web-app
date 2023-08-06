import React from "react";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";

const TuitStats = ({ tuitInfo }) => {
    const dispatch = useDispatch();

    const handleLikeButtonClick = () => {
        if (!tuitInfo.liked) {
            dispatch(updateTuitThunk({ ...tuitInfo, likes: tuitInfo.likes + 1, liked: true }));
        } else {
            dispatch(updateTuitThunk({ ...tuitInfo, likes: tuitInfo.likes - 1, liked: false }));
        }
    };

    const handleDislikeButtonClick = () => {
        if (!tuitInfo.disliked) {
            dispatch(updateTuitThunk({ ...tuitInfo, dislikes: tuitInfo.dislikes + 1, disliked: true }));
        } else {
            dispatch(updateTuitThunk({ ...tuitInfo, dislikes: tuitInfo.dislikes - 1, disliked: false }));
        }
    };

    return (
        <div className="row">
            <div className="col-2">
            <button className="btn"><i className="fa fa-comment-o"></i></button> 
            <span className="d-none d-lg-inline-block">{tuitInfo.replies}</span>
            </div>
            <div className="col-2">
            <button className="btn"><i className="fa fa-retweet"></i></button> 
            <span className="d-none d-lg-inline-block">{tuitInfo.retuits}</span>
            </div>
            <div className="col-3">
            <button className="btn" onClick={handleLikeButtonClick}><i className={`fa ${tuitInfo.liked ? "fa-heart text-danger" : "fa-heart-o"}`}></i></button> 
            <span className="d-none d-lg-inline-block">{tuitInfo.likes}</span>
            </div>
            <div className="col-2">
                <button className="btn" onClick={handleDislikeButtonClick}><i className={`fa fa-thumbs-down ${tuitInfo.disliked ? "text-danger" : ""}`}></i></button> 
                <span className="d-none d-lg-inline-block">{tuitInfo.dislikes}</span>
            </div>
            <div className="col-2">
            <button className="btn"><i className="fa fa-upload"></i></button>
            </div>
        </div>
    );
}

export default TuitStats;