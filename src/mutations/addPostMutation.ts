import axiosInstance from "@/api/axiosInstance";

const addPostMutation = (data: { text: string; user: string }) => {
  return axiosInstance.post("/posts", data);
};

export default addPostMutation;
