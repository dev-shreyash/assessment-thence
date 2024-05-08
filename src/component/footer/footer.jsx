import { Link } from 'react-router-dom';
import './footer.scss'

function Footer(){
    const year = new Date().getFullYear(); // Gets the current year

  return (
    <div className='footer'>
        <div className="rightSide">
            <span>©</span>
            <p>Shreyash {year}. All right reserved</p>
        </div>
        <div className="leftSide">
            <Link to={'/'}>Terms & Conditions</Link>
            <Link to={'/'}>Privacy Policy</Link>
        </div>
    </div>
  )
}

export default Footer