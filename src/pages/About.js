import Data from "../layout/Data"   
import Card from "../layout/Card"

function About(){   
    return(
        <div className="container my-5">
        <div className="row">
           {
            Data.map((ele)=>{
                return(
                    <div className="col-lg-4">
                          <Card title={ele.title} para={ele.para} images={ele.images}></Card>
                    </div>
                )
            })
           }
        </div>
    </div> 
    )
}
export default About