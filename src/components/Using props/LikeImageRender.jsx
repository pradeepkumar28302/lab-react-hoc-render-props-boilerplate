import React from "react";
import LikeProps from "./LikeProps";

const LikeImageRender=()=>{
    return(
        <LikeProps>
            {
                ({count,handleCount})=>{
                    <div>
                        <button onClick={handleCount}>Like Image {count}</button>
                    </div>
                }
            }
        </LikeProps>
    )
}
export default LikeImageRender;