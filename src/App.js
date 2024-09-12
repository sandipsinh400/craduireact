import Footer from "./layout/Footer"
import Header from "./layout/Header"
import About from "./pages/About"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import ClassState from "./pages/ClassState"

function App(){
    return(
        <>  
       <Header></Header>
       {/* <Home></Home> */}
       {/* <About></About> */}
        <ClassState/>
       <Contact></Contact>
       <Footer/>
        </>
    )
}
export default App