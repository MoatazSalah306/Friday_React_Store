import {createSlice} from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    initialState:[],
    name: "cartSlice",
    reducers:{
        addtoCart:(state,action)=>{
            const findProduct = state.find((product)=>product.id === action.payload.id);
            if(findProduct){
                findProduct.quantity+=1
            }else{
                const productClone = {...action.payload , quantity:1};
                state.push(productClone)
            }
        },
        deletefromCart:(state,action)=>{
            return state.filter((product) => product.id !== action.payload.id)
        },
        clearCart:(state,action)=>{
            return state=[]
        },
        incrementProdQuantity:(state,action)=>{
            // code here
        }
    }
})

export const{addtoCart , deletefromCart , clearCart , incrementProdQuantity} = cartSlice.actions;
export default cartSlice.reducer;