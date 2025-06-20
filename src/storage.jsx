 import { configureStore } from "@reduxjs/toolkit";
  import myReducer from "./colorslice";


  const Store = configureStore({
    reducer:{
        mycolor:myReducer
    }
  })


  export default Store;