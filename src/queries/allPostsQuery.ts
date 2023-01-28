import axiosInstance from "@/api/axiosInstance";

const allPostsQuery = async () => {
  const response = await axiosInstance.get("/posts");
  return response.data;
};

export default allPostsQuery;
