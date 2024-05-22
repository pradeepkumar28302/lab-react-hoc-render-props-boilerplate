import React from "react";
import LikeHoc from "./LikeHoc";

const LikePostHoc=({handleCount,count})=>{
    return(
        <div>
            <button onClick={handleCount}>Like Post {count}</button>
        </div>
    )
}
export default LikeHoc(LikePostHoc);