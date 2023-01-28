import Post from "@/types/post.type";
import CardLayout from "./CardLayout";
import Avatar from "./Avatar";
import Link from "next/link";
import moment from "moment";
import { BiWorld } from "react-icons/bi";
import PostActions from "./PostActions";

interface IPost {
  post: Post;
}

const Post = ({ post }: IPost) => {
  const { createdAt, text, user, updatedAt, _id: postId } = post;
  const { _id: userId, firstName, lastName, avatar } = user;

  return (
    <CardLayout>
      <div className="flex items-start p-4 gap-2">
        <Avatar avatarUrl={avatar} name={firstName} size={50} />
        <div className="flex flex-col">
          <Link
            href="/Feed"
            className="text-main-fnt-clr text-base font-bold hover:text-linkedin-blue hover:underline transition"
          >
            {firstName} {lastName}
          </Link>
          <span className="font-semibold text-xs flex items-center text-nav-light-gray">
            {moment(moment.utc(updatedAt)).local().fromNow(true)} .{" "}
            <BiWorld className="w-4 h-4" />
          </span>
        </div>
      </div>

      <div className="p-4">
        <p>{text}</p>
      </div>

      <PostActions />
    </CardLayout>
  );
};

export default Post;
