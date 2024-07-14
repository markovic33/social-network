import React, { use } from "react";
import FriendRequests from "./FriendRequests";
import Birthdays from "./Birthdays";
import Advertise from "./Advertise";
import UserProfileCard from "./UserProfileCard";
import UserMediaCard from "./UserMediaCard";

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserProfileCard userId={userId} />
          <UserMediaCard userId={userId} />
        </>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Advertise size="md" />
    </div>
  );
};

export default RightMenu;
