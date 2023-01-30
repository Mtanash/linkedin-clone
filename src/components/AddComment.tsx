import { useAppSelector } from "@/store/hooks";
import Avatar from "./Avatar";
import Button from "./Button";
import { selectCurrentUser } from "@/features/auth/authSlice";
import { useMutation } from "@tanstack/react-query";
import addCommentMutation from "@/mutations/addCommentMutation";
import { useState } from "react";

const AddComment = ({ postId }: { postId: string }) => {
  const currentUser = useAppSelector(selectCurrentUser);

  const [commentText, setCommentText] = useState("");

  // TODO: update from mutation response after implementing comments list
  const { mutate, isLoading } = useMutation({
    mutationFn: addCommentMutation,
    onSuccess() {
      setCommentText("");
    },
  });

  const handleCommentInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(e.target.value);
  };

  const handleAddCommentFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!currentUser) return console.error("No current user");

    mutate({ text: commentText, userId: currentUser._id, postId: postId });
  };

  return (
    <div className="p-4">
      <form
        className="flex flex-col gap-2 items-start"
        onSubmit={handleAddCommentFormSubmit}
      >
        <div className="flex items-center gap-2 self-stretch">
          <Avatar
            avatarUrl={currentUser?.avatar}
            name={currentUser?.firstName}
            size={45}
          />
          <input
            type="text"
            placeholder="Add a comment..."
            className="rounded-full w-full border-[2px] outline-none border-gray-400 py-2 px-3"
            value={commentText}
            onChange={handleCommentInputChange}
          />
        </div>
        {commentText.length > 0 && (
          <Button
            label="Post"
            type="submit"
            className="w-auto h-auto"
            loading={isLoading}
          />
        )}
      </form>
    </div>
  );
};

export default AddComment;
