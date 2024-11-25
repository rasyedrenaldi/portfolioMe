import Card from '../../components/Card';
import { GoPlus } from 'react-icons/go';
import { FiMinus } from 'react-icons/fi';
import { useState } from 'react';

const FAQ = ({ faq }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <Card className="faq" onClick={() => setShowAnswer((prev) => !prev)}>
      <div>
        <h5 className="faq__question">{faq.question}</h5>
        <button className="faq__icon">{showAnswer ? <FiMinus /> : <GoPlus />}</button>
      </div>
      {showAnswer && <p className="faq__answer">{faq.answer}</p>}
    </Card>
  );
};

export default FAQ;
