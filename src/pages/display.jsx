// import axios from "axios";
// import  {useeffect,usestate} from "react";
 

// const Display=()=>{

//     const[mydata,setMydata] =usestate([]);
//     const loadData =async ()=>{
//         let apl =""

//         const response = await axios.get(api);
//         console.log(responce.data);
//         setMydata(reponce.data);
//     }

//     useeffect(()=>{
//         loadData();

//     },[]);

// const ans = mydata.map((key) =>{
    // return(
    //     <>
    //     <tr>
    //         <td>{key.empno}</td>
    //          <td>{key.name}</td>
    //           <td>{key.degignation}</td>
    //            <td>{key.salary}</td>
             

    //     </tr>
        /* </>




    )
})
    }
// } */






import { useState,useEffect } from "react";
import axios from "axios";
const Display=()=>{
  const[mydata,setMydata]=useState([]);
  const loadData=async()=>{
    let api="http://localhost:3000/employee";
    const response=await axios.get(api)
    console.log(response.data);
    setMydata(response.data)
  }
  useEffect(()=>{
    loadData();
  },[])
  let sno=0;
  const ans=mydata.map((key)=>{
    sno++;
    return(
      <>
       <tr>
        <td>{sno}</td>
        <td>{key.name}</td>
        <td>{key.Empno}</td>
        <td>{key.designation}</td>
        <td>{key.salary}</td>
       </tr>
      </>
    )
  })
    return(
        <>
          <h3>Our data</h3>
          <hr />
          <table border="1" width="500px">
            <tr>
              <th>Sno</th>
              <th>Name</th>
              <th>Empno</th>
              <th>Designation</th>
              <th>salary</th>
            </tr>
            {ans}
          </table>
        </>
    )
}
export default Display;