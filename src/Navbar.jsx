import { Link } from "react-router-dom";

export default function Navbar() {

    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">

            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <li><Link className="nav-link" to="/">Home</Link></li>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/terms">Términos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}