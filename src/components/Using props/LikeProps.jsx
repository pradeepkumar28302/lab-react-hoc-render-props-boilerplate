import React from "react";

const LikeProps=({children})=>{
    const[count,setCount]=React.useState(0)

    const handleCount=()=>{
        setCount(prev=>prev+1);
    }
    return children({count,handleCount})
}
export default LikeProps;