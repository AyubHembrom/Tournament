import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
    { id: 3, targetDate: "2025-02-20T20:00:00", img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*nxEyX4PZ4DuiClXB", name: "Killer Winner", date: "1/3/2025" },
    { id: 1, targetDate: "2025-02-11T20:00:00", img: "https://media.licdn.com/dms/image/v2/D5612AQHrY8PjKY3xVA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1713754261633?e=2147483647&v=beta&t=FKsjptkNVvuprLthetMZC3lzdqWJ2kkPN-w_O8WcBoY", name: "Last Survival Winner", date: "12/2/2025" },
    { id: 2, targetDate: "2025-02-15T20:00:00", img: "https://w0.peakpx.com/wallpaper/968/648/HD-wallpaper-man-with-gun-and-fire-on-background-pubg.jpg", name: "Weekend Squad", date: "25/2/2025" },
    { id: 4, targetDate: "2025-03-13T20:00:00", img: "https://esports.battlegroundsmobileindia.com/images/static-images/BGIS_2023/thumbnail.png", name: "Solo Match", date: "25/2/2025" },
];

function CountdownTimer({ targetDate }) {
    const calculateTimeLeft = (target) => {
        const targetDate = new Date(target);
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);
        return () => clearInterval(interval);
    }, [targetDate]);

    const { days, hours, minutes, seconds } = timeLeft;

    return (
        <div className="flex justify-center items-center">
            <div className="rounded-lg shadow-md p-2">
                <div className="flex space-x-2 text-blue-500">
                    {[["Days", days], ["Hours", hours], ["Minutes", minutes], ["Seconds", seconds]].map(([label, value]) => (
                        <div key={label} className="text-center">
                            <span className="text-3xl font-bold">{value}</span>
                            <p className="text-gray-200">{label}</p>
                        </div>
                    ))}
                </div>
                {days === 0 && hours === 0 && minutes === 0 && seconds === 0 && (
                    <p className="mt-1 text-red-500">Match Started!</p>
                )}
            </div>
        </div>
    );
}

const ProgressBar = ({ totalPlayers }) => {
    const [joinedPlayers, setJoinedPlayers] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setJoinedPlayers((prev) => (prev < totalPlayers ? prev + 1 : prev));
        }, 500);
        return () => clearInterval(interval);
    }, [totalPlayers]);

    return (
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-yellow-100 h-2.5 rounded-full" style={{ width: `${(joinedPlayers / totalPlayers) * 100}%` }} />
            <div className="text-center mt-2 text-sm text-gray-100">
                {joinedPlayers} / {totalPlayers} players joined
            </div>
        </div>
    );
};

export default function MatchSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalPlayers = 100;

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % products.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="py-12 mx-10 overflow-hidden relative">
            <h2 className="text-2xl font-bold">Next Matches</h2>
            <div className="relative w-full max-w-lg mx-auto ">
                <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {products.map((product) => (
                        <motion.div key={product.id} className="min-w-full p-4 shadow-lg rounded-2xl hover:border hover:border-blue-400">
                           
                                <img src={product.img} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
                                <div className="flex-col">
                                    <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                                    <p className="text-green-500">Total Prize: 1000</p>
                                   
                                </div>
                                <ProgressBar totalPlayers={totalPlayers} />
                                <div className="text-sm text-gray-300 mt-2"> 
                                Date: {product.date}
                                </div>
                                <div className="flex justify-between items-center">
                                    <h2>
                                       
                                        <CountdownTimer targetDate={product.targetDate} />
                                    </h2>
                                    <Link to="/join" className="m-1 px-6 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-600">
                                        Join Now
                                    </Link>
                                </div>
                           
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute right-2 flex gap-2 p-2">
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
