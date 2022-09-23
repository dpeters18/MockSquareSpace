import { Link } from "react-router-dom"

const NavBar = () => { 
    return (

    <ul>
        <li>
            <Link to='/'className="waterMark">Hassan&Devon Inc</Link>
            <Link className="templates" to="/templates">Templates</Link>
            <Link className="login" to="/login">Log In</Link>
            <Link className="register" to="/signup">Sign Up</Link>
        </li>
    </ul>
        


    )
}


export default NavBar