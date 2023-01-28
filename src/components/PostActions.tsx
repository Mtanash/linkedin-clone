import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";

const PostActions = () => {
  return (
    <div className="flex items-center gap-1 border-t-[1px] border-gray-100">
      <button className="flex items-center text-lg gap-1 flex-1  justify-center p-2 text-nav-light-gray font-semibold hover:bg-light-gray-bg transition-colors hover:text-pale-black">
        <AiOutlineLike className="w-6 h-6" />
        Like
      </button>

      <button className="flex items-center text-lg gap-1 flex-1  justify-center p-2 text-nav-light-gray font-semibold hover:bg-light-gray-bg transition-colors hover:text-pale-black">
        <AiOutlineComment className="w-6 h-6" />
        Comment
      </button>
    </div>
  );
};

export default PostActions;
