import axiosInstance from "@/api/axiosInstance";

const allPostsQuery = () => {
  return axiosInstance.get("/posts");
};

export default allPostsQuery;
