import Image from "next/image";
import React from "react";

const Comments = () => {
  return (
    <div className="">
      {/*WRITE COOMMENT*/}
      <div className="flex items-center gap-4">
        <Image
          src={
            "https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          alt=""
          height={32}
          width={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-200 rounded-xl text-sm px-6 py-2 w-full ">
          <input
            type="text"
            placeholder="Write a cooment.."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src={"/emoji.png"}
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/*ALL COMMENTS*/}
      <div className="">
        <div className="flex gap-4 justify-between mt-6">
          <Image
            src={
              "https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt=""
            width={40}
            height={40}
            className="cursor-pointer w-10 h-10 rounded-full"
          />
          <div className="flex flex-col gap-2 flex-1">
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              voluptatum eos ut sed adipisci molestias. Ex, ducimus sapiente.
              Quibusdam ratione ullam nobis beatae eum reiciendis eius rerum
              nulla voluptatum sit.
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src={"/like.png"}
                  alt=""
                  width={12}
                  height={12}
                  className="cursor-pointer h-4 w-4"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123 Likes</span>
              </div>
              <div className="">Replay</div>
            </div>
          </div>
          <Image
            src={"/more.png"}
            alt=""
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
