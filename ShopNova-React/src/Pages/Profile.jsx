import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">Profile</h1>
        <p className="text-gray-600 text-center">
          This is the profile page. You can update your profile information here later.
        </p>
        <div className="mt-8 text-center">
          <p className="text-gray-800 font-semibold">Username: JohnDoe</p>
          <p className="text-gray-800 font-semibold">Email: johndoe@example.com</p>
        </div>
        <div className="mt-8 flex justify-center">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
