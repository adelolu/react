import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <Outlet />
      <div className="bg-secondary">
        <h1>This is the profile</h1>
        <ul>
          <li>
            <Link to="/profile/temi">Temi</Link>
          </li>
          <li>
            <Link to="/profile/tola">Tola</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
