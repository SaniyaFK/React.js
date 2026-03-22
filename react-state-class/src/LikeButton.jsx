import { useState } from "react";
import "./LikeButton.css"

export default function LikeButton() {
  let[isLiked, setIsLiked] = useState(false);

  let[likeCount, setLikeCount] = useState(0);

  function toggleLike() {
    setIsLiked(!isLiked);
    setLikeCount(likeCount + 1);
  }

  // function countingLike() {
   
  // }

  return(
    <div className="likeBtn">
      <h3>Like: {likeCount}</h3>
      <button onClick={toggleLike}>
        {!isLiked ? (<i className="fa-regular fa-heart fa-2xl"></i>) : (<i className="fa-solid fa-heart fa-2xl"></i>)}
      </button>
    </div>
  );
}