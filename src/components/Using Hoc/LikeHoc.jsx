import React from "react";

const LikeHoc=(ChildComp)=>{
    let result=()=>{
        const[count,setCount]=React.useState(0);
        function handleCount(){
            setCount(count+1)
        }
        return <ChildComp handleCount={handleCount} count={count}/>
    }
    return result;
}
export default LikeHoc