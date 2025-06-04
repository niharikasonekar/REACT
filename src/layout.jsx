// import {link, outlet} from "react router-dom";

// const Layout=()=>{
//     return(
//         <>  
//         <link to ="home">home</link>
//         <link to ="about">about</link>
//         <link to ="contact">contact</link>
//         <hr size="4" color="red"/>



//        < outlet/>

//        <hr size="4"  color="red" />

//        www.mycompany.com all right are reserved.
//         </>
//     )
// }

// export default Layout;

// ===========================================================================================






import { Outlet } from "react-router-dom";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";

const Latout=()=>{
    return(
        <>
         <TopNav/>
         <Outlet/>
         <Footer/>
        </>
    )
}
export default Layout;