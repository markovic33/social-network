import React from "react";
import Image from "next/image";
import Link from "next/link";

const Birthdays = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-sm flex flex-col gap-2">
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">Birthdays</span>
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
          <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
            Celebrate
          </button>
        </div>
      </div>

      {/*upcoming*/}
      <div className="p-4 bg-slate-200 rounded-lg flex items-center gap-4">
        <Image src={"/gift.png"} alt="" width={40} height={40} />
        <Link href={"/"} className="flex flex-col gap-1 text-xs">
          <span className="text-gray-700 font-semibold">
            Upcoming Birthdays
          </span>
          <span className="text-gray-500">See others</span>
        </Link>
      </div>
    </div>
  );
};

export default Birthdays;
