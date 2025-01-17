import React, { useState } from 'react';
import Plus from '../assets/icons/Plus.svg';
import Minus from '../assets/icons/Minus.svg';
import { AnimatePresence, motion } from 'framer-motion';

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
    <section className="bg-gradient-to-b from-[#5370d3] to-black py-24">
      <div className="text-[#efefef]">
        <h2 className="text-center text-5xl font-semibold">Frequently asked questions</h2>
        <p className='text-center text-xl font-medium mt-6'>Got questions? We've got answers.</p>
        <div className="mt-10 max-w-[648px] mx-auto">
          <AnimatePresence>
            {FAQItem.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="flex flex-col items-start justify-center gap-5 p-6 border-b border-zinc-400">
                <div className="flex-1 justify-between items-center flex w-full text-lg font-semibold" onClick={() => handleExpand(item.question)}>
                  {item.question}
                  {isExpanded[item.question] && <span> <Minus className="h-7 border border-zinc-400 rounded-lg text-[#efefef] cursor-pointer" /> </span>}
                  {!isExpanded[item.question] && <span> <Plus className="h-7 border border-zinc-400 rounded-lg text-[#efefef] cursor-pointer" /> </span>}
                </div>
                { isExpanded[item.question] && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="flex-1 text-lg">
                    {item.answer}
                  </motion.div> 
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Questions;