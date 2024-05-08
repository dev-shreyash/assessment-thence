
import Faq from '../faq/faq';


function FaqList(){
    const faqs = [
        {
            question: "Do you offer freelancers?",
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maiores dolor deleniti, tempora praesentium necessitatibus aliquid laboriosam, placeat totam, ad eius temporibus accusantium. Quae atque iusto tempore excepturi, sunt fugit?'
        },
        {
            question: "What's the guarantee that i will be satisfied with the hired talent?",
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maiores dolor deleniti, tempora praesentium necessitatibus aliquid laboriosam, placeat totam, ad eius temporibus accusantium. Quae atque iusto tempore excepturi, sunt fugit?'
        },
        {
            question: 'Can i hire multiple talents at once?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maiores dolor deleniti, tempora praesentium necessitatibus aliquid laboriosam, placeat totam, ad eius temporibus accusantium. Quae atque iusto tempore excepturi, sunt fugit?'
        },
        {
            question: 'Why should i not go to an agency directly?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maiores dolor deleniti, tempora praesentium necessitatibus aliquid laboriosam, placeat totam, ad eius temporibus accusantium. Quae atque iusto tempore excepturi, sunt fugit?'
        },
        {
            question: 'Who can help me pick right skillset and duration for me?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maiores dolor deleniti, tempora praesentium necessitatibus aliquid laboriosam, placeat totam, ad eius temporibus accusantium. Quae atque iusto tempore excepturi, sunt fugit?'
        },
        
    ];

    return (
        <div className="faq-list">
            {faqs.map((faq, index) => (
                <Faq key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
}

export default FaqList