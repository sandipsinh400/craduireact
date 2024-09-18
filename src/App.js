import Footer from "./layout/Footer"
import Header from "./layout/Header"
import About from "./pages/About"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import ClassState from "./pages/ClassState"
import Counter from "./pages/Counter"
import UseEffectHook from "./pages/UseEffeac"
import Singup from "./pages/Signup"
import ValidForm from "./pages/ValidForm"

function App(){
    return(
        <>  
       <Header></Header>
       {/* <Home></Home> */}
    
       <Counter></Counter>
       
        {/* <ClassState/> */}
       {/* <UseEffectHook></UseEffectHook> */}
       <ValidForm></ValidForm>

       {/* <Singup/> */}
       <Footer/>
        </>
    )
}
export default App