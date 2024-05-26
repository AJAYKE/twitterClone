import FeedCard from "./feedCard";

const Feed = () => {
  return (
    <>
      <div className="flex w-full border-b-[0.5px] border-gray-600 cursor-pointer">
        <div className="flex justify-center items-center w-1/2 hover:bg-gray-900">
          <div className="p-3.5 font-semibold border-b-4 border-blue-400">
            For you
          </div>
        </div>
        <div className="flex justify-center items-center w-1/2 hover:bg-gray-900 p-3.5">
          Following
        </div>
      </div>
      <div></div>
      <div className="h-screen overflow-auto">
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
    </>
  );
};
export default Feed;
