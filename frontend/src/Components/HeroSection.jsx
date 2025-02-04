import React, { useState, useEffect } from 'react';

const AutoTypingText = ({ text, typingSpeed = 20, repeat = true }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timeout;

        if (currentIndex < text.length) {
            timeout = setTimeout(() => {
                setDisplayedText(text.substring(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            }, typingSpeed);
        } else if (repeat) {
            // Restart typing after a short delay
            timeout = setTimeout(() => {
                setDisplayedText('');
                setCurrentIndex(0);
            }, 1500); // Delay before restart (adjust as needed)
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, text, typingSpeed, repeat]);

    return (
        <span className="shadow-effect">{displayedText}</span>
    );
};

const HeroSection = () => {
    return (
        <div className=" ">      
                <div className=' text-pretty  text-2xl font-serif m-2 '>
                    <AutoTypingText text="India Esports presents Rising Star, a program designed to elevate emerging esports athletes and content creators, helping them reach new heights in their careers." />                
            </div>
        </div>
    )
}

export default HeroSection;