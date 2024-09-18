import { useEffect, useState } from "react"

const UseEffectHook = () => {
    const [users,setUser] = useState([])
        async function showapi() {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json();
        console.log(res);
        // console.log(data);
        console.table(data);
        setUser(data)
    }
    useEffect(() => {
        console.log("lecture 3:30");
        showapi()   
    }, [])
    return (
        <>
            <div className="table-responsive container my-5">
                <table className="table table-hover table-striped table-success">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Image-Link</th>
                            {/* <th>rating</th> */}

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{user.title}</td>
                                        <td>{user.category}</td>
                                        <td>{user.price}</td>
                                        <td>{user.image}</td>
                                       
                                        
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
            </div>
        </>
    )
}
export default UseEffectHook