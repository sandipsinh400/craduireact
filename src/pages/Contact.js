import React from "react"
import Cardui from "../layout/Cardui"

class Contact extends React.Component{
    render(){
        return(
            <>
            <div className="container my-5">
                <div className="row">
                     <div className="col-lg-4">
                         <Cardui title="title1" para="lorem1" images="images/download.jpeg"></Cardui>
                    </div>
                    <div className="col-lg-4">
                        <Cardui title="title2" para="lorem2" images="images/download3.jpeg"></Cardui>                   </div>
                   <div className="col-lg-4">
                       <Cardui title="title3" para="lorem3" images="images/download2.jpeg"></Cardui>
                    </div>
                    <div className="col-lg-4">
                       <Cardui title="title4" para="lorem4" images="images/download2.jpeg"></Cardui>
                    </div>

                </div>
             </div>
            </>
        )
    }
}
export default Contact