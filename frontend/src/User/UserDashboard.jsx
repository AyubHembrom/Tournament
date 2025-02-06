import { useState } from "react";
import { Link } from "react-router-dom"
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import EditModal from "./EditModal";
import { BadgeCheck, Bell, UserCircle } from "lucide-react";
export default function UserDashboard() {
    const [activeTab, setActiveTab] = useState("profile");
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editData, setEditData] = useState({}); // To store data for editing

    const user = {
        name: "Sara",
        image: "https://cdn.vectorstock.com/i/1000v/51/87/student-avatar-user-profile-icon-vector-47025187.avif",
        email: "example@gmail.com",
        invites: "6",
        verified: true,
    
    };
    const person = {
        firstName: "Sara",
        lastName: "Jones",
        DOB: "12/12/1999",
        Password: "123456",
        Phone: "1234567890",
        GameID: "12b5e6",
        Email: "example@gmail.com"
    };
    const openEditModal = (data, active) => {
        //console.log(data, active);
        setEditData(data); // Set data for editing
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
        setEditData({}); // Clear data after closing
    };

    return (
        <>
            {isEditModalOpen && (
                <EditModal
                    isEditModalOpen={isEditModalOpen}
                    closeEditModal={closeEditModal}
                    active={activeTab}
                    editData={person}
                    activeSection={activeTab}
                    setEditData={setEditData}
                />
            )}
            <NavBar />

            <div className="flex justify-center items-center">
            <div className="w-80  shadow-lg rounded-2xl p-4 flex items-center gap-4 border border-gray-200">
                {user.image ? (
                    <img
                        src={` ${user.image}`}
                        alt="Profile"
                        className="w-16 h-16 rounded-full object-cover border border-gray-300"
                    />
                ) : (
                    <UserCircle className="w-16 h-16 text-gray-400" />
                )}

                <div className="flex flex-col flex-1">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">{user.name}</h3>
                        {user.verified && <BadgeCheck className="w-5 h-5 text-blue-500" />}
                    </div>
                    <p className="text-sm text-gray-500">{user.email}</p>
                </div>

                {user.invites > 0 && (
                    <div className="relative">
                        <Bell className="w-6 h-6 text-gray-300" />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                          {user.invites}
                        </span>
                    </div>
                )}
            </div>
            </div>


            <div className="max-w-3xl mx-auto p-6">
                <div className="flex border-b border-gray-300">
                    <button
                        className={`flex-1 py-2 text-lg font-medium ${activeTab === "profile" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-600"}`}
                        onClick={() => setActiveTab("profile")}
                    >
                        My Profile
                    </button>
                    <button
                        className={`flex-1 py-2 text-lg font-medium ${activeTab === "team" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-600"}`}
                        onClick={() => setActiveTab("team")}
                    >
                        My Team
                    </button>
                </div>

                <div className="mt-6">
                    {activeTab === "profile" && (
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold mb-4">USER DETAILS</h2>
                                <button
                                    onClick={() => openEditModal(activeTab)}
                                    className="bg-blue-500 text-white px-2 py-1 rounded w-40"
                                >
                                    Edit
                                </button>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div >
                                    <div >First name</div>
                                    <div className="text-gray-400"> {person.firstName} </div>
                                </div>
                                <div>
                                    <div >Last name</div>
                                    <div className="text-gray-400"> {person.lastName} </div>
                                </div>
                            </div>
                            <div>
                                <div >Phone Number</div>
                                <div className="text-gray-400">+91-{person.Phone} </div>
                            </div>
                            <div>
                                <div >Date of Birth</div>
                                <div className="text-gray-400"> {person.DOB} </div>
                            </div>
                            <div>
                                <div >E-mail</div>
                                <div className="text-gray-400"> {person.Email} </div>
                            </div>
                            <div>
                                <div >Password</div>
                                <div className="text-gray-400"> {person.Password} </div>
                            </div>

                            <div>
                                <div >Game ID</div>
                                <div className="text-gray-400"> {person.GameID} </div>
                            </div>


                        </div>
                    )}

                    {activeTab === "team" && (

                        <div>
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold mb-4">YOUR TEAM DETAILS</h2>
                                <button
                                    onClick={() => openEditModal(activeTab)}
                                    className="bg-blue-500 text-white px-2 py-1 rounded w-40"
                                >
                                    Edit
                                </button>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-4">Player 1</h3>
                                <label className="block text-sm font-medium  mb-1">
                                    Game ID
                                </label>
                                <input type="text" placeholder="Game ID" className="w-full p-2 border  rounded mb-2" />
                                
                            </div>

                            <button className="m-1 block px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 md:inline">
                                Add Player
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>

    );
}
