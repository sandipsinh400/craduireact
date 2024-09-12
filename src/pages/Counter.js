import { useState } from "react"

const Counter = () => {
    const  [count,setcount] = useState(0)

    const inc = () => {
        setcount(count + 1)
    }

    const dec = () => {
        return count>0 ? setcount(count-1):0
    }

    return(
        <div className="col-6 mx-auto my-5 p-5 shadow text-center">
            <h1>Counter {count}</h1>
            <button className="btn btn-success mx-4" onClick={inc}>+</button>
            <button className="btn btn-danger" onClick={dec}>-</button>
        </div>
    )
}

export default Counter