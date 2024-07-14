import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/*Top*/}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href={"/"} className="text-blue-500 text-sm">
          See All
        </Link>
      </div>

      {/*bottom*/}
      {/*user1*/}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-semibold">Mark John</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src={"/accept.png"}
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src={"/reject.png"}
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/*user2*/}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-semibold">Mark John</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src={"/accept.png"}
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src={"/reject.png"}
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/*user3*/}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-semibold">Mark John</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src={"/accept.png"}
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src={"/reject.png"}
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
