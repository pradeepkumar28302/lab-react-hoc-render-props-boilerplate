import React from "react";
import LikeProps from "./LikeProps";

const LikePostRender=()=>{
    return(
        <LikeProps>
            {
                ({count,handleCount})=>{
                    <div>
                        <button onClick={handleCount}>Like Post {count}</button>
                    </div>
                }
            }
        </LikeProps>
    )
}
export default LikePostRender;