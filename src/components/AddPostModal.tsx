import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import Avatar from "./Avatar";
import { useAppSelector } from "@/store/hooks";
import { selectCurrentUser } from "@/features/auth/authSlice";
import { BiWorld } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { ChangeEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import addPostMutation from "@/mutations/addPostMutation";
import OverlaySpinner from "./OverlaySpinner";
import toastCenter from "@/toast/toast";
import Post from "@/types/post.type";

interface IAddPostModal {
  addPostModalIsOpen: boolean;
  handleCloseAddPostModal: () => void;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "8px",
    overflow: "hidden",
    padding: "0",
    width: "80%",
    maxWidth: "650px",
  },
};

Modal.setAppElement("#__next");

const AddPostModal = ({
  addPostModalIsOpen,
  handleCloseAddPostModal,
}: IAddPostModal) => {
  const currentUser = useAppSelector(selectCurrentUser);

  const [postText, setPostText] = useState("");

  const queryClient = useQueryClient();

  const addPostButtonDisabled = postText.trim().length <= 0;

  const { mutate, error, isLoading } = useMutation({
    mutationFn: addPostMutation,
    onSuccess(data) {
      handleCloseAddPostModal();
      // queryClient.setQueryData(["posts"], (oldData: any) => {
      //   const returnedData = oldData;
      //   returnedData.data = [...returnedData.data, data.data];
      //   return returnedData;
      // });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toastCenter.success("Post created successfully");
      setPostText("");
    },
    onError(error, variables, context) {
      handleCloseAddPostModal();
      console.error(error);
      toastCenter.error("Something went wrong");
    },
  });

  const handlePostTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    text.trim();
    setPostText(text);
  };

  const handleAddPostFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!currentUser) return console.error("No Current User");

    mutate({ text: postText, user: currentUser._id });
  };

  return (
    <Modal
      isOpen={addPostModalIsOpen}
      onRequestClose={handleCloseAddPostModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <OverlaySpinner isLoading={isLoading} />
      <div className="border-b-[1px] border-gray-200">
        <div className="flex items-center justify-between p-4">
          <h3 className="text-nav-light-gray text-xl font-semibold">
            Create a post
          </h3>
          <button
            className="flex items-center justify-center text-nav-light-gray text-2xl font-semibold rounded-full p-1 hover:bg-light-gray-bg transition w-12 h-12"
            onClick={handleCloseAddPostModal}
          >
            <AiOutlineClose />
          </button>
        </div>
      </div>
      <div className="p-4 flex items-center gap-4 text-nav-light-gray">
        <Avatar
          avatarUrl={currentUser?.avatar}
          name={currentUser?.firstName}
          size={50}
        />
        <button className="flex items-center font-semibold gap-2 border-[1px] rounded-full p-2 py-1 border-gray-500">
          <BiWorld className="w-4 h-4" />
          Anyone
          <IoMdArrowDropdown className="w-4 h-4" />
        </button>
      </div>
      <form className="p-4 w-full" onSubmit={handleAddPostFormSubmit}>
        <textarea
          className="w-full outline-none border-none resize-none"
          placeholder="What do you want to talk about?"
          value={postText}
          onChange={handlePostTextChange}
        ></textarea>

        <div className="flex justify-end w-full">
          <button
            disabled={addPostButtonDisabled}
            type="submit"
            className="bg-linkedin-blue hover:bg-linkedin-blue-hvr text-lg font-semibold text-white py-1 px-5 rounded-full flex items-center justify-center disabled:bg-gray-100 disabled:text-gray-400"
          >
            Post
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddPostModal;
