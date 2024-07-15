import React, { useState } from 'react';
import Plus from '../assets/icons/Plus.svg';
import Minus from '../assets/icons/Minus.svg';

const FAQItem = [
  {
    question : "How does the pricing work for teams",
    answer : "Our pricing is simple. You get a free trial for 30 days, then pay a monthly subscription. You can cancel anytime. No hidden fees.",
  },
  {
    question : "Can i change my plan later?",
    answer : "Yes, you can upgrade or downgrade at any time. Changes will be prorated for the next billing period.",
  },
  {
    question : "What payment methods are supported?",
    answer : "We accept all major credit cards, PayPal, and various other payment methods depending on your location.",
  },
  {
    question : "How do I cancel my subscription?",
    answer : "You can cancel your subscription at any time. Simply send an email to suport@example.com and we'll handle the rest.",
  },
];


const Questions = () => {
  const [ isExpanded, setIsExpanded ] = useState({});

  const handleExpand = (question) => {
    setIsExpanded({ ...isExpanded, [question]: !isExpanded[question]});
  };

  return (
    <section className="bg-gradient-to-b from-[#5370d3] to-black py-20">
      <div className="text-[#efefef]">
        <h2 className="text-center text-5xl font-semibold">Frequently asked questions</h2>
        <div className="mt-10">
          {FAQItem.map((item, index) => (
            <div key={index} className="flex flex-col items-start justify-center gap-5 p-6 border-b border-zinc-400">
              <div className="flex-1 justify-between items-center flex w-full text-lg font-semibold" onClick={() => handleExpand(item.question)}>
                {item.question}
                {isExpanded[item.question] && <span> <Minus className="h-7 border border-zinc-400 rounded-lg text-[#efefef]" /> </span>}
                {!isExpanded[item.question] && <span> <Plus className="h-7 border border-zinc-400 rounded-lg text-[#efefef]" /> </span>}
              </div>
              { isExpanded[item.question] && <div className="flex-1 text-lg">{item.answer}</div> }
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Questions;