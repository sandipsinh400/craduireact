import { Component } from "react";

class Cardui extends Component{
    render(){
        return(
            <div className="card mt-4">
            <img src={this.props.images}/>
            <div className="card-body">
                <h3>{this.props.title??"dummy title"}</h3>
                <p>{this.props.para??"dummy para"}</p>
            </div>  
        </div>
        )
    }
}

export default Cardui