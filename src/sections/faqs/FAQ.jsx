import Card from '../../components/Card';
import { GoPlus } from 'react-icons/go';

const FAQ = ({ faq }) => {
  return (
    <Card className="faq">
      <div>
        <h5 className="faq__question">{faq.question}</h5>
        <button className="faq__icon">
          <GoPlus />
        </button>
      </div>
      <p className="faq__answer">{faq.answer}</p>
    </Card>
  );
};

export default FAQ;
