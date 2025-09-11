import {Link} from "react-router-dom"
function Navbar(){
    return(
        <nav>
            <h1>My Website</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to= "/page2">About</Link>
                </li>
                <li>
                    <Link>Contact</Link>
                </li>
                
                
            </ul>
        </nav>
    )
}
export default Navbar;