import axiosInstance from "@/api/axiosInstance";

const addPostMutation = async (data: { text: string; user: string }) => {
  const response = await axiosInstance.post("/posts", data);
  return response.data;
};

export default addPostMutation;
