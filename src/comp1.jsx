import Comp2 from "./comp2";

const Comp1=({user})=>{

    return(
        <>

        <h1>component-1</h1>
        <Comp2 user={user}/>
        </>

    )
}

export default Comp1;