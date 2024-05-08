/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import Caraousel from '../../component/carousel/caraousel'
import './homePage.scss'
import FaqList from '../../component/faqList/faqList';
import Footer from '../../component/footer/footer';
import NavBar from '../../component/navBar/navBar';



function Homepage(){

  const data = [
    "Welcome to our website!, This demo Website created by Shreyash Bhosale",
    "We are a company that specializes in providing high-quality products and services.",
    "Explore our products and services. Consider clicking on Get Projects to Contact",
    "Contact us for more information. In simple way by just cliking one button.",

];


  return (
    <div className='homepage'>
       <div className="navbar">
        <NavBar />
      </div>
      <div className="wrapper">
      <div className="heading">
        <span className='fancy-text'>success stories</span>
        <p>
          Every success journey
          we've encountered
        </p>
      </div>
      <div className="wrapper-2">
        <div className="cards">
          <div className="image-container">
            <img src="/girl-img.webp" alt="" />
            
          </div>
          <div className="card" id='card1'>
            <span>40%</span>
            <p>Achived reduction in Project
              execution time by optimising team 
              availability
            </p>
          </div>
          <div className="card" id='card2'>
            <div className="svg">
              <img src="/rocket.svg" alt="" />
            </div>
            <div className="text">
              
            <span>40%</span>
            <p>
              Staff Deployment
            </p>
            </div>
          
          </div>
          <div className="card" id='card3'>
            <div className="text">
            <span>$0.5</span>
            <p>MILLION</p>
            </div>
            <p>Reduced client expenses
              by saving on hiring and 
              employee costs.
            </p>
          </div>
          
        </div>
        <div className="textCaraousel">
        <Caraousel texts={data} interval={2000}/>

        <div className="more-btn">
          <Link to='/'>Explore More <img src="/arrow-left.svg" alt="" /></Link>
        </div>
        </div>
        


      </div>
      <div className="wrapper-3">
        <div className="rightSide">
          <span className='fancy-text'>Whats on your mind?</span>
          <h1>Ask Questions</h1>
        </div>
        <div className="faq">
        <FaqList/>
        </div>

      </div>
       <Footer/>
      </div>
     
    </div>
  )
}

export default Homepage