import User from "@/types/user.type";

type PostUser = Pick<User, "_id" | "avatar" | "firstName" | "lastName">;

type Post = {
  _id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  user: PostUser;
  likes: string[];
};

export default Post;
