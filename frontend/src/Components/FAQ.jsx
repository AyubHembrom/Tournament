import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is the schedule??',
      answer: 'Schedule will be shared through mail and message during the Open Qualifiers.',
    },
    {
      question: 'How do I join the lobby?',
      answer: 'As soon as your lobby is created you will be intimated with the lobby ID and password via e-mail or message on your phone for you to join the lobby. You need to join the lobby with the intimated lobby ID and Password'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept only UPI payments. You can pay using any UPI app like Google Pay, PhonePe, Paytm, etc.',
    },
    {
      question: 'How to register for Turnament?',
      answer: `Step 1: Visit https://xyz.com/signup and press the signup button.
     Step 2: Enter your phone number and verify with OTP.
      Step 3: Confirm that you are aged 16+, Indian citizen, above Level 30 and above Platinum I in BGMI, and agree to the Terms & Conditions, Privacy Policy, and our rules Rulebook.
      Step 4: Fill out your details like first name & last name, DOB, and email address.
      Step 5: Set a strong password with at least 8 characters.It must include a number, an uppercase letter, a lowercase letter, and a special symbol.
     Step 6: Now enter your preferred KIE ID and press finish.
     Step 7: Go to tournaments and click on the "Participate" button under BGIS 2025 banner.You will be redirected to "My Teams" page.
     Step 8: Go to "My Profile" and complete the "My Game IDs" section by providing your In - Game Name, UID Number, and a BGMI game screenshot for verification.Then, select your roles by choosing one as the Main Role and the other as the Secondary Role.
    Step 9: To Create or Join a Team
     i) To create a team: Provide a team name(required) and an optional logo then select your desired role like IGL, Owner, or Both.
    ii) Join a team: Search with the team name and send a request to join the team.
      Step 10: Now click on add player option to invite players to your team.You can invite players using their KIE ID or the phone number registered on the platform.
        Step 11: Make sure you submit all the required details and have at least 4 players in your team to be eligible for In - Game Qualifiers`
    },
    // Add more FAQs here
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-500">
            Everything you need to know about our products and services.
          </p>
        </div>
        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg shadow-sm">
              <button
                className="w-full text-left px-6 py-4 font-medium text-gray-900 focus:outline-none flex items-center justify-between"
                onClick={() => handleToggle(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                <svg
                  className={`h-6 w-6 transform transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''
                    }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;