import Feed from "./feed";
import Options from "./options";

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
        <div className="w-1/4"></div>
      </div>
    </>
  );
};

export default TwitterHome;
