import {useContext, usestate} from  "react";

import {mycontext} from "./App";

const Bhopal=()=>{
    const {user,setuser}= useContext(mycontext);
    return(
        <>
        <h1>welcome to bhopal!!!!{user}</h1>
    <button onClick={()=>{setuser("nihatrika")}}>click</button>
    
    </>
    )
}
export default Bhopal;