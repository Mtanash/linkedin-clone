import axiosInstance from "@/api/axiosInstance";

const likePostMutation = (data: { post: string; user: string }) => {
  return axiosInstance.post("/posts/like", data);
};

export default likePostMutation;
