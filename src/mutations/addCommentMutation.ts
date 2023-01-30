import axiosInstance from "@/api/axiosInstance";

const addCommentMutation = async (data: {
  text: string;
  userId: string;
  postId: string;
}) => {
  const response = await axiosInstance.post("/comments", data);
  return response.data;
};

export default addCommentMutation;
