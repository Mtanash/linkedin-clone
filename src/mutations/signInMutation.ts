import axiosInstance from "@/api/axiosInstance";

const signInMutation = async (data: { email: string; password: string }) => {
  return await (
    await axiosInstance.post("/users/login", data)
  ).data;
};

export default signInMutation;
