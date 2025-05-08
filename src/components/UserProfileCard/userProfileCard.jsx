import React from 'react';

const UserProfileCard = ({ profile }) => {
  if (!profile) return null;

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 max-w-md w-full mx-auto">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={profile.avatarUrl || '/default-avatar.png'}
          alt={profile.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold">{profile.name}</h2>
          <p className="text-sm text-gray-500">{profile.email}</p>
        </div>
      </div>
      <div className="space-y-2">
        <p>
          <span className="font-medium text-gray-700">Role:</span>{' '}
          {profile.role || 'User'}
        </p>
      </div>
    </div>
  );
};

export default UserProfileCard;
