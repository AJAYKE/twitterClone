"use client";
import Feed from "./feed";
import Options from "./options";
import SigninContainer from "./signin";

const TwitterHome = () => {
  return (
    <>
      <div className="flex flex-row h-screen gap-3">
        <div className="w-1/4 flex justify-end">
          <Options />
        </div>
        <div className="w-2/5 h-screen border-r-[0.5px] border-l-[0.5px] border-gray-600">
          <Feed />
        </div>
        <div className="w-1/4 p-4">
          <SigninContainer />
        </div>
      </div>
    </>
  );
};

export default TwitterHome;
