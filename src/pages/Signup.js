import React, { useState } from "react";

const Singup = () => {
    const [user, setUser] = useState({})
    function input(e) {
        // e.target /// get input
        var name = e.target.name;
        console.log(name);

        var value = e.target.value
        console.log({ [name]: value });

        const newUser = { [name]: value };
        setUser({ ...user, ...newUser })
    }
    function regist(e) {
        e.preventDefault()
        console.log(user);

    }
    return (
        <>
            <form action="" method="post" onSubmit={(e) => regist(e)} className="col-6 mx-auto shadow my-5 p-5">
                <div className="mt-4">
                    <input type="text" onChange={(e) => input(e)} className="form-control" name="username" placeholder="enter your username"></input>
                </div>
                <div className="mt-4">
                    <input type="text" onChange={(e) => input(e)} className="form-control" name="email" placeholder="enter your email"></input>
                </div>

                <div className="mt-4">
                    <button className="btn btn-success">submit</button>
                </div>
            </form>
        </>
    )

}

export default Singup