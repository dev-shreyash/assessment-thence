import './faq.scss'
import{ useState } from 'react';

function Faq({question,answer}){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="faq-item">
            <div className="faq-question" onClick={toggle}>
                {question}
                <span className="faq-icon">{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && <div className="faq-answer">{answer}</div>}
        </div>
    );
}

export default Faq