import React, { useState } from "react";

import { useForm } from "react-hook-form";

const ValidForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    function regist(data) {
        console.log(data);
    }
    return (
        <>
            <form action="" method="post" onSubmit={handleSubmit(regist)} className="col-6 mx-auto shadow my-5 p-5">
                <div className="mt-4">
                    <input type="text" {...register('username', {
                        required: {
                            value: true,
                            message: "enter username"
                        },

                        minLength: {
                            value: 3,
                            message: "minimum 3 character"
                        },
                        maxLength: {
                            value: 20,
                            message: "maximum 20 character"
                        }

                    })} className="form-control" placeholder="enter your username"></input>
                    <p className="text-danger">{errors?.username?.message}</p>
                </div>
                <div className="mt-4">
                    <input type="text" {...register('email', {
                        required: {
                            value: true,
                            message: "enter your email"
                        },
                        maxLength: {
                            value: 20,
                            message: "maximum 20 character"
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: 'enter valid formate'
                        }
                    })} className="form-control" placeholder="enter your email"></input>
                    <p className="text-danger">{errors?.email?.message}</p>
                </div>

                <div className="mt-4">
                    <input type="text" {...register('password', {
                        required: {
                            value: true,
                            message: "enter password"
                        },
                        // maxLength: {
                        //     value:10,
                        //     message: "maximum 20 character"
                        // },
                        pattern: {
                            value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
                            message: 'enter valid password'
                        }
                    })} className="form-control" placeholder="enter your password"></input>
                    <p className="text-danger">{errors?.password?.message}</p>
                </div>

                <div className="mt-4">
                    <button className="btn btn-success">submit</button>
                </div>
            </form>
        </>
    )

}

export default ValidForm