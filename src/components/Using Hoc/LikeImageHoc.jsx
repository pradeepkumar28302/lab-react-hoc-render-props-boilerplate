import React from "react";
import LikeHoc from "./LikeHoc";

const LikeImageHoc=({handleCount,count})=>{
    return(
        <div>
            <button onClick={handleCount}>Like Image {count}</button>
        </div>
    )
}
export default LikeHoc(LikeImageHoc);