import { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: 'https://media.istockphoto.com/id/1333215128/photo/head-shot-of-gamer-talking-on-headphones-while-playing-live-streaming-game-or-esports.webp?a=1&b=1&s=612x612&w=0&k=20&c=OAxfcN5oYm8GT1XITn-FglVjKxFuvj_IXpzeyNzB2IU=',
      text: 'First Slide Text',
      caption: 'Caption for the first slide'
    },
    {
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdhbWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D',
      text: 'Second Slide Text',
      caption: 'Caption for the second slide'
    },
    {
      image: 'https://media.istockphoto.com/id/841136006/photo/team-of-professional-esport-gamers-playing-in-competitive-video-games-on-a-cyber-games.webp?a=1&b=1&s=612x612&w=0&k=20&c=DlwSfMljrc-f5wx3j_61aax8HGrpSkh4A-v362aCu1E=',
      text: 'Third Slide Text',
      caption: 'Caption for the third slide'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {slides.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${slideIndex === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${slideIndex + 1}`}
            className="h-full w-full object-cover"
          />

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col bg-black bg-opacity-30">
            <div className='mt-40 mx-10'>
            <div className=" text-white">
            <h2 className="text-4xl text-blue-500 font-bold mb-4">Raisng Star</h2>
            <h2 className="text-2xl  mb-4 ">

              <HeroSection/>
            </h2>
              
              <p className="text-xl"></p>
            </div>
            <div>
              <button className='p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300'>
                <a href="/#">Register Now</a>
              </button>
            </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`h-3 w-3 rounded-full transition-colors ${slideIndex === currentIndex ? 'bg-white' : 'bg-gray-400'
              }`}
          />
        ))}
      </div>

    </div>
  );
};

export default Slider;