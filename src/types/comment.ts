import User from "./user.type";

type Comment = {
  _id: string;
  text: string;
  post: string;
  createdAt: string;
  updatedAt: string;
  user: Pick<User, "_id" | "firstName" | "lastName" | "avatar">;
};

export default Comment;
