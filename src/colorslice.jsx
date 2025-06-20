import{createslice} from "@reduxjs/toolkit"




const colorslice=createslice({
    name:"mycolor",

    initailState:{
        color:"red"
    },
    reducers:{
        bgcolorchange:(state)=>{
            state.color="green";
        }
    }

})

export const {bgcolorchange} = colorSlice.actions;
export default colorSlice.reducer;


