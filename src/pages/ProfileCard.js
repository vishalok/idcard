// ProfileCard.js

import React, { useEffect, useState } from "react";
import { fetchUserDetails } from "../services/api";

const ProfileCard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await fetchUserDetails();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUserData();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="border-2 border-black rounded-lg p-6 w-full max-w-sm md:max-w-md lg:max-w-lg bg-white shadow-md">
        <div className="flex items-center">
          {/* Image Section */}
          <div className="w-32 h-32 border-2 border-black rounded-md overflow-hidden flex-shrink-0">
            <img
              src={user.picture}
              alt={`${user.firstName} ${user.lastName}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="ml-6">
            <div className="text-lg font-bold mb-2">{`${user.firstName} ${user.lastName}`}</div>
            <div className="text-sm mb-1">Gender: {user.gender}</div>
            <div className="text-sm">Phone: {user.phoneNumber}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
