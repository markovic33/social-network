import Feed from "@/app/components/Feed";
import LeftMenu from "@/app/components/LeftMenu";
import RightMenu from "@/app/components/RightMenu";
import Image from "next/image";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                fill
                className="object-cover rounded-lg"
              />
              <Image
                src="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width={128}
                height={128}
                className="object-cover rounded-full w-32 h-32 absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">Jonh Mark</h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col  items-center">
                <span className="font-medium">123</span>
                <span className="test-sm">Posts</span>
              </div>
              <div className="flex flex-col  items-center">
                <span className="font-medium">123</span>
                <span className="test-sm">Followers</span>
              </div>
              <div className="flex flex-col  items-center">
                <span className="font-medium">123</span>
                <span className="test-sm">Following</span>
              </div>
            </div>
          </div>

          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu />
      </div>
    </div>
  );
};

export default ProfilePage;
