import Image from "next/image";
import React from "react";

const AddPost = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex  gap-4 justify-between text-sm">
      {/*avatart*/}

      <Image
        src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />

      {/*post*/}
      <div className="  flex-1">
        {/*text input*/}
        <div className="flex gap-4">
          <textarea
            name=""
            placeholder="What is on your mind.."
            id=""
            className="bg-slate-200 rounded-lg flex-1 p-2"
          ></textarea>
          <Image
            src="/emoji.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 object-cover rounded-full cursor-pointer self-end"
          />
        </div>
        {/*post options*/}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          {/* option image */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addImage.png" alt="" width={20} height={20} />
            Photo
          </div>

          {/* option video */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20} />
            Video
          </div>

          {/* option image */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addEvent.png" alt="" width={20} height={20} />
            Events
          </div>

          {/* option image */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20} />
            Poll
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
