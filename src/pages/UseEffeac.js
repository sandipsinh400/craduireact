import { useEffect } from "react"

const UseEffectHook=()=>{
    async function showapi(){
        const res=await fetch('https://fakestoreapi.com/products')
        const data=await res.json();
        console.log(res);
        console.log(data);
        console.table(data);  
    }
    useEffect(()=>{
        console.log("lecture 3:30");
        showapi()
    })
    return (
        <>
        </>
    )
}
export default UseEffectHook