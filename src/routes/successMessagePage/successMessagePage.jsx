import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './successMessagePage.scss'

function SuccessMessagePage() {
  const navigate = useNavigate()
  const [count, setCount] = useState(5)

  useEffect(() => {
    const counter = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(counter)
          navigate('/')
          return 0
        }
        return prevCount - 1
      });
    }, 1000);

    return () => {
      clearInterval(counter)
    };
  }, [navigate])

  return (
    <div className='successMessagePage'>
      
      <div className="wrapper">
      <div className="top">
          <div className="logo">
            <span>Brunel</span>
          </div>
        </div>
        <div className="wrapper-2">
        <div className="message">
          <div className="message-top">
            <img src="/check-mark.svg" alt="" />
            <span className="fancy-text">Success Submitted</span>
            <h2>Congratulations</h2>
          </div>
          <div className="message-bottom">
            <p>
              Your request has been successfully submitted to us.
              We will validate your information and reach out to
              you shortly with updates.
            </p>
          </div>
        </div>
        <div className="bottom">
          <p>Redirecting you to the homepage in <span>{count} Seconds</span></p>
        </div>
        </div>
       
      </div>
    </div>
  )
}

export default SuccessMessagePage;
