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
    const textcolor={
       color:'transparent',
       backgroundImage: 'linear-gradient(60deg, rgba(238,174,202,1) 35%, rgba(148,187,233,1) 100%)',
       backgroundClip:'text'
    }
    return (
        <>
      
            <form action="" method="post" onSubmit={(e) => regist(e)} className="col-6 mx-auto shadow my-5 p-5 bg-dark bg-gradient ">
            <h2 className="text-center" style={textcolor}> Registration Form</h2>
                <div className="mt-4">
                    <input type="text" onChange={(e) => input(e)} className="form-control" name="username" placeholder="Enter your username"></input>
                </div>
                <div className="mt-4">
                    <input type="text" onChange={(e) => input(e)} className="form-control " name="email" placeholder="Enter your email"></input>
                </div>
                <div className="mt-4">
                    <input type="text" onChange={(e) => input(e)} className="form-control form-control" name="password" placeholder="Enter your password"></input>
                </div>
                <div className="mt-4">
                    <input type="text" onChange={(e) => input(e)} className="form-control " name="mobile" placeholder="Enter your mobile number"></input>
                </div>
                <div className="mt-4">
                    <button className="btn btn-outline-success" tyle={textcolor}>submit</button>
                </div>
            </form>
        </>
    )

}

export default Singup