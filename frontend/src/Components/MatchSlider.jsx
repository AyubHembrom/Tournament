import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
    { id: 3, img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*nxEyX4PZ4DuiClXB", name: "Match 3", date: "1/3/2025" },
    { id: 1, img: "https://media.licdn.com/dms/image/v2/D5612AQHrY8PjKY3xVA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1713754261633?e=2147483647&v=beta&t=FKsjptkNVvuprLthetMZC3lzdqWJ2kkPN-w_O8WcBoY", name: "Match 1", date: "12/2/2025" },
    { id: 2, img: "https://esports.battlegroundsmobileindia.com/images/static-images/BGIS_2024/thumbnail.png", name: "Match 2", date: "25/2/2025" },
    
    { id: 4, img: "https://esports.battlegroundsmobileindia.com/images/static-images/BGIS_2023/thumbnail.png", name: "Match 4", date: "25/2/2025" },
];

export default function MatchSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="py-12  mx-10 overflow-hidden">
            <h2 className="text-2xl text-bold">Next Matches</h2>
            <div className="relative w-full max-w-lg mx-auto ">

                <div className="flex gap-4 transition-transform ease-in-out duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            className="min-w-full p-4  shadow-lg rounded-2xl hover:border hover:border-blue-400 shaddow-lg"
                        >

                            <Link to="/room/product.id" className="flex flex-col gap-2">
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full h-48 object-cover rounded-lg"
                            />
                            <div className="flex-col justify-start ">

                                <h3 className=" text-lg font-semibold mt-2">
                                    {product.name}
                                </h3>
                                <p className="text-green-500">Invite</p>
                            </div>
                            <div>
                                <h2>
                                    Date: {product.date}
                                </h2>
                            </div>
                            </Link>
                            
                        </motion.div>

                    ))}
                </div>


            </div>
            {/* Navigation Arrows */}
            <div className="absolute right-2 flex gap-2 p-2  text-gray rounded-full">
                <button onClick={prevSlide} className="p-2 bg-gray-800 text-white rounded-full">
                    <ChevronLeft size={40} />
                </button>
                <button onClick={nextSlide} className="p-2 bg-gray-800 text-white rounded-full">
                    <ChevronRight size={40} />
                </button>
            </div>
        </div>
    );
}
