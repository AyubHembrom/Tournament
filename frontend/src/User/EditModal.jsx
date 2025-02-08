import React, { useState, useEffect } from "react";
import axios from "axios";

const EditModal = ({ closeEditModal, editData, activeSection, setEditData }) => {
  // Handle Edit Form Submission
  

  const handleInputChangeEdit = (e) => {
    const { name, value, files } = e.target;
    setEditData({
      ...editData,
      [name]: files ? files[0] : value,
    });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-black p-6 rounded-lg shadow-md ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-blue-500">Edit {activeSection}</h2>

          <button className="p-2 " onClick={closeEditModal}>
            &times;
          </button>
        </div>
        <form /* onSubmit={handleEditFormSubmit} */>
          <div className="mb-4">


          </div>

          {activeSection === "profile" && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                First Name
              </label>
              <input
                type="text"
                name={editData.firstName}
                placeholder={editData.firstName}
                onChange={handleInputChangeEdit}
                className="w-full px-4 py-2 border text-gray-300 rounded-md"
              />

              <label className="block text-sm font-medium text-gray-300 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name={editData.lastName}
                placeholder={editData.lastName}
                onChange={handleInputChangeEdit}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Date of Birth
              </label>
              <input
                type="text"
                name={editData.DOB}
                placeholder={editData.DOB}
                onChange={handleInputChangeEdit}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />


            </div>
          )}
          {activeSection === "team" && (
            <div className="mb-4">

              <div>
                <h3 className="text-xl font-semibold mb-4">Player 1</h3>
                <label className="block text-sm font-medium  mb-1">
                  Game ID
                </label>
                <input type="text" placeholder="Game ID" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
               
              </div>

            </div>
          )}

          <div className="flex justify-between">
            <button
              type="submit"
              className=" mt-4 block px-6 py-2 bg-red-500 text-white rounded-md hover:bg-blue-600 md:inline" >
              Cancel
            </button>
            <button className="mt-4 block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 md:inline">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
