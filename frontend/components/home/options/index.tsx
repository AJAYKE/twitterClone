import { sideBarOptions } from "@/utils/constants/global";
import { RiTwitterXLine } from "react-icons/ri";

const Options = () => {
  return (
    <div className="flex flex-col gap-3 pt-2 w-8/12">
      <div className=" text-3xl h-fit hover:bg-gray-800 rounded-full w-fit p-2 cursor-pointer">
        <RiTwitterXLine />
      </div>
      <div className="flex text-2xl pt-2 flex-col gap-3 font-light">
        {sideBarOptions.map((option) => {
          return (
            <div
              key={option.id}
              className="flex justify-center items-center gap-3 w-fit px-3 py-2 hover:bg-gray-800 rounded-full cursor-pointer"
            >
              <div>{option.icon}</div>
              <div>{option.title}</div>
            </div>
          );
        })}
      </div>
      <button className="flex justify-center items-center text-xl font-bold bg-sky-500 rounded-full px-6 py-3 w-full mt-2 hover:bg-sky-600">
        Post
      </button>
    </div>
  );
};

export default Options;
