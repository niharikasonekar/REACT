import axios from "axios";
 
import {useeffect,useatate} from "react";
import {useparams} from "react-router-dom";
 const edit =()=>{
    const {id}=useparams();
    const[my data,setmydata]=usestate({}); 
    const loaddata=async()=>{
        let api=
        const response=awit axios.get(api);

        console.log(response.data);
        setmydata(response.data);

    }

    usee
 }