import { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: 'https://w0.peakpx.com/wallpaper/968/648/HD-wallpaper-man-with-gun-and-fire-on-background-pubg.jpg',
      text: 'Third Slide Text',
      caption: 'Caption for the third slide'
    },
    {
      image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/0*nxEyX4PZ4DuiClXB',
      text: 'First Slide Text',
      caption: 'Caption for the first slide'
    },
    {
      image: 'https://media.licdn.com/dms/image/v2/D5612AQHrY8PjKY3xVA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1713754261633?e=2147483647&v=beta&t=FKsjptkNVvuprLthetMZC3lzdqWJ2kkPN-w_O8WcBoY',
      text: 'Second Slide Text',
      caption: 'Caption for the second slide'

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
    <div className="relative h-[600px] w-full overflow-hidden mt-2">
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

                  <HeroSection />
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