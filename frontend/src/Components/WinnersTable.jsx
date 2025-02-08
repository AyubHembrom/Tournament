import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
export const  Tournaments = () => {
    const winners = [
        { rank: 1, MatchType:"Squad", Players: 4, EntryFee: 30, Date: "10/2/2025" , Time: "08:00Pm"},
        { rank: 1, MatchType:"Solo", Players: 1, EntryFee: 40, Date: "26/2/2025" , Time: "10:00Pm"},
        { rank: 1, MatchType:"Squad", Players: 4, EntryFee: 30, Date: "2/3/2025" , Time: "08:00Pm"},
        { rank: 1, MatchType:"Squad", Players: 4, EntryFee: 30, Date: "15/3/2025" , Time: "10:00Pm"},
        { rank: 1, MatchType:"Squad", Players: 4, EntryFee: 30, Date: "10/2/2025" , Time: "08:00Pm"},
        { rank: 1, MatchType:"Solo", Players: 1, EntryFee: 10, Date: "26/2/2025" , Time: "10:00Pm"},
        { rank: 1, MatchType:"Squad", Players: 4, EntryFee: 20, Date: "2/3/2025" , Time: "08:00Pm"},
        { rank: 1, MatchType:"Squad", Players: 4, EntryFee: 50, Date: "15/3/2025" , Time: "10:00Pm"},
    ];

    return (
        <>
        <NavBar/>
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Matches schedule</h2>
            
            <div className="relative flex flex-col w-full h-full overflow-scroll text-white bg-gray-800 shadow-md rounded-lg bg-clip-border">
                <table className="w-full text-left table-auto min-w-max">
                    <thead>
                    <tr className="bg-blue-500 text-white">
                            <th className="p-3 border border-gray-300">Sl.</th>
                            <th className="p-3 border border-gray-300">Match Type</th>
                            <th className="p-3 border border-gray-300">Players</th>
                            <th className="p-3 border border-gray-300">Entry Fee(&#8377;)</th>
                            <th className="p-3 border border-gray-300">Date</th>
                            <th className="p-3 border border-gray-300">Time</th>
                            <th className="p-3 border border-gray-300">Join Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {winners.map((winner, index) => (
                            <tr key={index} className=" bg-gray-800 text-center hover:bg-gray-700">
                                <td className="p-3 border border-gray-300">{winner.rank}</td>
                                <td className="p-3 border border-gray-300">{winner.MatchType}</td>
                                <td className="p-3 border border-gray-300">{winner.Players}</td>
                                <td className="p-3 border border-gray-300">&#8377; {winner.EntryFee}</td>
                                <td className="p-3 border border-gray-300 font-bold">{winner.Date}</td>
                                <td className="p-3 border border-gray-300 font-bold">{winner.Time}</td>
                                <td><Link to="/join" className="m-1 block px-6 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-600 hover:border md:inline ">Join Now</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        <Footer/>
        </>
    );
};
export const  WinnersTable = () => {
    const winners = [
        { rank: 1, team: "Team Alpha", finishPoints: 50, positionPoints: 30, totalPoints: 80 },
        { rank: 2, team: "Team Beta", finishPoints: 40, positionPoints: 45, totalPoints: 65 },
        { rank: 3, team: "Team Gama", finishPoints: 40, positionPoints: 25, totalPoints: 65 },
        { rank: 4, team: "Team Delta", finishPoints: 70, positionPoints: 45, totalPoints: 85 },
        { rank: 5, team: "Team peta", finishPoints: 50, positionPoints: 2, totalPoints: 75 },
        { rank: 6, team: "Team Theta", finishPoints: 10, positionPoints: 5, totalPoints: 66 },
    ];

    return (
        <>
        <NavBar/>
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Winners Table</h2>
            
            <div className="relative flex flex-col w-full h-full overflow-scroll text-white bg-gray-800 shadow-md rounded-lg bg-clip-border">
                <table className="w-full text-left table-auto min-w-max">
                    <thead>
                    <tr className="bg-blue-500 text-white">
                            <th className="p-3 border border-gray-300">RANK</th>
                            <th className="p-3 border border-gray-300">TEAM NAME</th>
                            <th className="p-3 border border-gray-300">FINISH POINTS</th>
                            <th className="p-3 border border-gray-300">POSITION POINTS</th>
                            <th className="p-3 border border-gray-300">TOTAL POINTS</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {winners.map((winner, index) => (
                            <tr key={index} className=" bg-gray-800 text-center hover:bg-gray-700">
                                <td className="p-3 border border-gray-300">{winner.rank}</td>
                                <td className="p-3 border border-gray-300">{winner.team}</td>
                                <td className="p-3 border border-gray-300">{winner.finishPoints}</td>
                                <td className="p-3 border border-gray-300">{winner.positionPoints}</td>
                                <td className="p-3 border border-gray-300 font-bold">{winner.totalPoints}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        <Footer/>
        </>
    );
};


