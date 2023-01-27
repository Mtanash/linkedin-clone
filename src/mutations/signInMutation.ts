import axiosInstance from "@/api/axiosInstance";

const signInMutation = (data: { email: string; password: string }) => {
  return axiosInstance.post("/users/login", data);
};

export default signInMutation;
