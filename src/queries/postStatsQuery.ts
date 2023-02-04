import axiosInstance from "@/api/axiosInstance";

const postStatsQuery = async (postId: string) => {
  const response = await axiosInstance.get(`/posts/${postId}/stats`);
  return response.data;
};

export default postStatsQuery;
