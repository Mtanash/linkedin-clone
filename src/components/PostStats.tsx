import postStatsQuery from "@/queries/postStatsQuery";
import toast from "@/toast/toast";
import { useQuery } from "@tanstack/react-query";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

const PostStats = ({
  postId,
  onCommentsClick,
}: {
  postId: string;
  onCommentsClick: () => void;
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ["postStats", postId],
    queryFn: () => postStatsQuery(postId),
    onSuccess(data) {},
    onError(err) {
      toast.error("Something went wrong");
      console.error(err);
    },
  });

  const likes = data.data.likes;
  const comments = data.data.comments;

  const handleCommentsClick = () => {
    onCommentsClick();
  };

  return (
    <div className="px-4 py-1 flex items-center justify-between text-sm text-gray-600">
      <div className="flex items-center">
        {!!likes.length && (
          <>
            <BsFillHandThumbsUpFill /> {likes.length}
          </>
        )}
      </div>
      <div
        className="hover:underline cursor-pointer hover:text-linkedin-blue"
        onClick={handleCommentsClick}
      >
        {!!comments.length && (
          <>
            {comments.length} {comments.length > 1 ? "comments" : "comment"}
          </>
        )}
      </div>
    </div>
  );
};

export default PostStats;
