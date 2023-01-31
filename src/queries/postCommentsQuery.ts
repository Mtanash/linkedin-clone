import axiosInstance from "@/api/axiosInstance";

const postCommentsQuery = async (postId: string) => {
  const response = await axiosInstance.get(`/comments/${postId}`);
  return response.data;
};

export default postCommentsQuery;
