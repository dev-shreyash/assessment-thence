import { Link } from 'react-router-dom'
import Form from '../../component/form/form'
import './formPage.scss'

function FormPage(){
  return (
    <div className='formPage'>
      <div className="wrapper">
        <div className="heading-1">
        <div className="leftSide">
          <div className="logo">
          <span>Brunel</span>
          </div>
        </div>
        <div className="rightSide">
          <Link to={'/'}><img src="/close.svg" alt="" /></Link>
        </div>
        </div>
        <div className="form">
        <div className="text">
        <span className="fancy-text">Registration Form</span>
          <h2>Start your success Journey here!</h2>
        </div>
          <Form/>
        </div>
      </div>
    </div>
  )
}

export default FormPage