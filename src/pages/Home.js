
import Card from "../layout/Card"

function Home() {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-4">
                        <Card title="title1" para="lorem1" images="images/download.jpeg"></Card>
                    </div>
                    <div className="col-lg-4">
                        <Card title="title2" para="lorem2" images="images/download3.jpeg"></Card>
                    </div>
                    <div className="col-lg-4">
                        <Card title="title3" para="lorem3" images="images/download2.jpeg"></Card>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home