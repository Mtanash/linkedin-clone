import { selectCurrentUser, setCurrentUser } from "@/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import likePostMutation from "@/mutations/likePostMutation";
import toastCenter from "@/toast/toast";
import { useState } from "react";

interface IPostActions {
  postId: string;
  setShowAddComment: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostActions = ({ postId, setShowAddComment }: IPostActions) => {
  const currentUser = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const queryClient = useQueryClient();

  const postLikedByCurrentUser = currentUser?.likedPosts
    ? currentUser?.likedPosts.includes(postId)
    : false;

  const { mutate } = useMutation({
    mutationFn: likePostMutation,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      if (!currentUser) return;
      dispatch(
        setCurrentUser({
          ...currentUser,
          likedPosts: [...currentUser?.likedPosts, postId],
        })
      );
    },
    onError(error) {
      toastCenter.error("Something went wrong, try again later");
      console.error(error);
    },
  });

  const handleLikePostButtonClick = () => {
    if (!currentUser) return;
    mutate({ post: postId, user: currentUser._id });
  };

  const handleCommentButtonClick = () => {
    setShowAddComment(true);
  };

  return (
    <div className="flex items-center gap-1 border-t-[1px] border-gray-100">
      <button
        className={`flex items-center text-lg gap-1 flex-1  justify-center p-2  font-semibold hover:bg-light-gray-bg transition-colors  ${
          postLikedByCurrentUser
            ? "text-linkedin-blue hover:text-linkedin-blue-hvr"
            : "text-nav-light-gray hover:text-pale-black"
        }`}
        onClick={handleLikePostButtonClick}
      >
        <AiOutlineLike className="w-6 h-6" />
        {postLikedByCurrentUser ? "Liked" : "Like"}
      </button>

      <button
        className="flex items-center text-lg gap-1 flex-1  justify-center p-2 text-nav-light-gray font-semibold hover:bg-light-gray-bg transition-colors hover:text-pale-black"
        onClick={handleCommentButtonClick}
      >
        <AiOutlineComment className="w-6 h-6" />
        Comment
      </button>
    </div>
  );
};

export default PostActions;
