// import axios from "axios";
// import  {useeffect,usestate} from "react";



// const Update=()=>{

//      const [mydata,setmydata]=usestate([]);
//       const[mydata,setMydata] =usestate([]);
//     const loadData =async ()=>{
//         let apl =""

//         const response = await axios.get(api);
//         console.log(responce.data);
//         setMydata(reponce.data);
//     }

//     useeffect(()=>{
//         loadData();

//     },[]);



//     const recDelete=async(id)=>{
//         const api=""
//         const responce=await axios.delete(api);
//         alert("record succesfully Deleted!!!");

//         loadData();
   
   
//     }



//     <>

//     {/* /* <h1>Dislpay employeee Data</h1> */}
//     <hr/>

//     <table>
//         <tr>
//             <th>empno</th>
//  <th>name</th>
//              <th>degignation</th>
//               <th>salary</th>
//         </tr>
//         {async}
//     </table>
//     </>
// }
// // export default Update; */



import { useState,useEffect } from "react";
import axios from "axios";

const Update=()=>{
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
  const recDelete=async(id)=>{
    const api=http://localhost:3000/employee/${id}
    const response=await axios.delete(api);
    alert("data successfully deleted");
    loadData();
  }


  
    
       
  let sno=0;
  const ans=mydata.map((key)=>{
    sno++;
    return(
      <>
       <tr>
        <td>{sno}</td>
        <td>{key.name}</td>
        <td>{key.empno}</td>
        <td>{key.designation}</td>
        <td>{key.salary}</td>
        <td>
            <button onClick={()=>{myEdit(key.id)}}>Edit</button>
        </td>
        <td>
            <button onClick={()=>{recDelete(key.id)}}>Delete</button>
        </td>
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
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {ans}
          </table>
        </>
    )
}
export default Update;
