import React, { useState } from "react";

import { useForm } from "react-hook-form";

const ValidForm = () => {
    const {register,handleSubmit} =useForm()
  
    function regist(data) {
        console.log(data);
    }
    return (
        <>
            <form action="" method="post" onSubmit={handleSubmit(regist)} className="col-6 mx-auto shadow my-5 p-5">
                <div className="mt-4">
                    <input type="text" {...register('username')} className="form-control" placeholder="enter your username"></input>
                </div>
                <div className="mt-4">
                    <input type="text" {...register('email')} className="form-control"  placeholder="enter your email"></input>
                </div>

                <div className="mt-4">
                    <button className="btn btn-success">submit</button>
                </div>
            </form>
        </>
    )

}

export default ValidForm