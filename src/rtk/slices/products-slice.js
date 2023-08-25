import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

export const fetchProducts = createAsyncThunk("productsSlice/fetchProducts", async ()=>{
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data
   
})


export const productsSlice = createSlice({
    initialState:[],
    name:"productsSlice",
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,()=>{
            return(
                <>
                    <svg className="pl" width={240} height={240} viewBox="0 0 240 240">
                        <circle className="pl__ring pl__ring--a" cx={120} cy={120} r={105} fill="none" stroke="#000" strokeWidth={20} strokeDasharray="0 660" strokeDashoffset={-330} strokeLinecap="round" />
                        <circle className="pl__ring pl__ring--b" cx={120} cy={120} r={35} fill="none" stroke="#000" strokeWidth={20} strokeDasharray="0 220" strokeDashoffset={-110} strokeLinecap="round" />
                        <circle className="pl__ring pl__ring--c" cx={85} cy={120} r={70} fill="none" stroke="#000" strokeWidth={20} strokeDasharray="0 440" strokeLinecap="round" />
                        <circle className="pl__ring pl__ring--d" cx={155} cy={120} r={70} fill="none" stroke="#000" strokeWidth={20} strokeDasharray="0 440" strokeLinecap="round" />
                    </svg>
                </>
            )
            
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            return action.payload
        })
        // builder.addCase(fetchProducts.pending,()=>{
        //     return(
        //         <h1>pending </h1>
        //     )
        // })
        // builder.addCase(fetchProducts.rejected,()=>{
        //     return(
        //         <h1>rejected </h1>
        //     )
        // })
    }
})

export const{} = productsSlice.actions;
export default productsSlice.reducer