import axiosInstance from "@/api/axiosInstance";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  selectCurrentUser,
  setAccessToken,
  setCurrentUser,
} from "@/features/auth/authSlice";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import signInMutation from "@/mutations/signInMutation";
import Button from "./Button";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");

  const router = useRouter();
  const dispatch = useAppDispatch();

  const currentUser = useAppSelector(selectCurrentUser);

  useEffect(() => {
    if (currentUser) {
      router.push("/Feed");
    }
  }, [currentUser, router]);

  const { isLoading, mutate } = useMutation({
    mutationFn: signInMutation,
    onSuccess(data, variables, context) {
      setLoginError("");
      const user = data.data;
      // const accessToken = data.data.data.accessToken;
      // set current user data
      dispatch(setCurrentUser(user));
      // dispatch(setAccessToken(accessToken));

      // navigate to feed page
      router.push("/Feed");
    },
    onError(error: any, variables, context) {
      const errMsg = error.response.data.message;
      if (errMsg) {
        setLoginError(errMsg);
      }
    },
  });

  const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignInFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;
    mutate({ email, password });
  };

  return (
    <form
      className="flex flex-col gap-3 items-stretch mt-5"
      onSubmit={handleSignInFormSubmit}
    >
      <p className="h-6 text-red-600">{loginError}</p>
      <input
        type="email"
        placeholder="Email"
        required
        minLength={3}
        maxLength={50}
        // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        title="email@email.com"
        name="email"
        value={formData.email}
        onChange={handleFormDataChange}
        className="bg-white-bg p-2 max-w-[450px] border-pale-black border-[1px] rounded-none outline-light-blue h-[48px]"
      />
      <input
        type="password"
        placeholder="Password"
        required
        minLength={4}
        maxLength={30}
        name="password"
        value={formData.password}
        onChange={handleFormDataChange}
        className="bg-white-bg p-2 max-w-[450px] border-pale-black border-[1px] rounded-none outline-light-blue h-[48px]"
      />
      <Link
        href="/forgot-password"
        className="w-fit hover:underline hover:text-light-blue transition"
      >
        Forgot password?
      </Link>
      <Button
        label="Sign in"
        type="submit"
        loading={isLoading}
        className="max-w-[450px]"
      />
    </form>
  );
};

export default SignIn;
