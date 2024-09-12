import { render } from "@testing-library/react";
import { Component } from "react";

class ClassState extends Component{
    constructor(){
        super()
        console.log("class component");
        this.state={
            count:0,
            name:"hello"
        }
    }

    inc=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    dec=()=>{
        const counter=this.state.count
        this.setState({
            count:counter>0?counter-1:counter
        })
    }

    changename=()=>{
        this.setState({
            name:"world"
        })
    }



render(){
    return(
        <>
        <div className="col-6 mt-auto text-center shadow my-5 p-5">
        <h1>counter {this.state.count}</h1>
        <p>{this.state.name}</p>
        <button onClick={this.changename}>press</button>
        <button onClick={this.inc} className="btn btn-primary mx-4">+</button>
        <button onClick={this.dec} className="btn btn-danger mx-4">-</button>
        </div>
        </>
    )
}
}

export default ClassState