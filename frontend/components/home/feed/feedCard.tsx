import Image from "next/image";
import { FaRegComment, FaRegHeart, FaRetweet } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { MdIosShare } from "react-icons/md";
import { PiBookmarkSimpleLight } from "react-icons/pi";

const FeedCard = () => {
  return (
    <>
      <div className="flex p-2 gap-2 border-t-[0.5px] border-gray-600 cursor-pointer">
        <Image
          src={"https://avatars.githubusercontent.com/u/152738727?s=96&v=4"}
          alt="Ajay Edupuganti"
          width={33}
          height={33}
          className="rounded-full h-fit w-fit"
        />
        <div className="flex flex-col gap-1">
          <div className="flex gap-2">
            <div>Ajay Edupuganti</div>
            <div className="text-gray-500">@AjayEdupuganti</div>
            <div className="">.</div>
            <div>19h</div>
          </div>
          <div>
            <p>
              Less than 2 weeks since OpenAI started rolling out GPT-4o. And
              people have been busy executing god-like tasks. 50 truly
              mind-boggling examples: (29th is my favorite)
            </p>
          </div>
          <div className="flex justify-between items-center text-gray-500 pt-2 pb-2">
            <FaRegComment className="hover:text-blue-400" />
            <FaRetweet className="hover:text-green-400" />
            <FaRegHeart className="hover:text-red-400" />
            <IoIosStats className="hover:text-blue-400" />
            <div className="flex justify-between gap-1 items-center">
              <PiBookmarkSimpleLight className="flex items-center hover:text-blue-400" />
              <MdIosShare className="flex items-center hover:text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedCard;
