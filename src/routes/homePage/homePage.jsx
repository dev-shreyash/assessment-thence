import Caraousel from '../../component/carousel/caraousel'
import './homePage.scss'

function Homepage(){

  const data = [
    "Welcome to our website!",
    "We are a company that specializes in providing high-quality products and services.",
    "Explore our products and services.",
    "Contact us for more information.",

];
  return (
    <div className='homepage'>
      <div className="wrapper">
      <div className="heading">
        <span>success stories</span>
        <p>
          Every success journey
          we`ve encountered
        </p>
      </div>
      <div className="wrapper-2">
        <div className="cards">

        </div>
        <div className="textCaraousel">
        <Caraousel texts={data} interval={2000}/>
        </div>


      </div>
      <div className="faq">

      </div>
      <div className="footer">

      </div>
      </div>
     
    </div>
  )
}

export default Homepage