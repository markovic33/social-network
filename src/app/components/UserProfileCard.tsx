import React from "react";
import Link from "next/link";
import Image from "next/image";

const UserProfileCard = ({ userId }: { userId?: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href={"/"} className="text-blue-500 text-sm">
          See All
        </Link>
      </div>

      {/*bottom*/}
      <div className="flex flex-col ga-4 text-gray-500">
        <div className="flex items-center gap-2 ">
          <span className="text-xl text-black">John</span>
          <span className="text-sm">@john</span>
        </div>

        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo at
          perspiciatis eaque quod adipisci, natus sunt eius sint excepturi
          assumenda dolorem explicabo ex doloremque culpa? Numquam minus
          expedita dicta voluptates.
        </p>

        <div className="flex items-center gap-2">
          <Image src={"/map.png"} alt="" width={16} height={16} className="" />
          <span className="">Linving in Dever</span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={"/school.png"} alt="" width={16} height={16} />
          <span className="">High School</span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={"/work.png"} alt="" width={16} height={16} className="" />
          <span className="">Work Apple</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src={"/link.png"} alt="" width={16} height={16} />
            <Link href={"/"} className="text-blue-500">
              dev
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src={"/link.png"} alt="" width={16} height={16} />
            <span className="">Joined Novembar 2024</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md p-2">
          Follow
        </button>
        <span className="text-red-400 self-end text0xs cursor-pointer">
          Block User
        </span>
      </div>
    </div>
  );
};

export default UserProfileCard;
