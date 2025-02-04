import { Link } from 'react-router-dom';

export default function SignupPage() {
    return (
        <div className="flex h-screen bg-gray-800">
            {/* Left Side - Image */}
            <div className="w-1/2 hidden md:flex items-center justify-center bg-blue-500">
                <img
                    src="https://media.istockphoto.com/id/1414962591/photo/display-of-the-monitor-and-smartphone-online-streamer-playing-fps-shooter-game-at-home.jpg?s=612x612&w=0&k=20&c=B6rNH5NtFfYkQ3UzE9TpMRChQtYAhqSudsheGWdq3rc="
                    alt="Signup"
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Right Side - Signup Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">Login to Access Player Dashboard</h2>

                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Name</label>
                            <input type="text" className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white" placeholder="Enter your name" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-400 text-sm font-medium mb-2">Email</label>
                            <input type="email" className="w-full px-4 py-4  border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white" placeholder="Enter your email" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Password</label>
                            <input type="password" className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white" placeholder="Enter your password" />
                        </div>

                        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">Sign Up</button>
                    </form>
                    <Link>
                        <div className="text-center mt-4 text-blue-500 font-bold">
                            Sign in
                        </div>

                    </Link>

                </div>
            </div>
        </div>
    );
}
