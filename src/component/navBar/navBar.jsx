import { Link } from "react-router-dom";
import './navBar.scss'

function NavBar(){
  return (
    <nav>
        <div className="leftSide">
          <div className="logo">
          <span>Brunel</span>
          </div>
        </div>
        <div className="rightSide">
                <Link to="/formPage">
                        <span>Get Projects</span>
                </Link>

                <Link>
                        <span> OnBoard Talent</span>

                </Link>
        </div>
    </nav>
  )
}

export default NavBar