import NavBar from "./NavBar"
const Home = () => { 
    return (


        <div className="parent">
             <NavBar></NavBar>
            <div className="slogan">
                Envision. <br></br>
                Create. <br></br>
                Transform.
            </div>

            <img className="desktop" src={require("../img/monitor.png")}/>
            <img className="keyboard"src={require("../img/keyboard3.png")} width="300" height="50"/>
           
        </div>

    )
}


export default Home