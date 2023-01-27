import PostType from "@/types/post.type";
import CardLayout from "./CardLayout";
import Post from "./Post";

interface IPostsList {
  posts?: PostType[];
}

const PostsList = ({ posts }: IPostsList) => {
  if (!posts)
    return (
      <CardLayout>
        <div className="p-4 text-center">
          <p className="text-lg font-semibold text-main-fnt-clr my-4">
            No Posts yet, you can start posting now
          </p>
        </div>
      </CardLayout>
    );
  return (
    <div>
      {posts.map((post) => {
        return <Post key={post._id} post={post} />;
      })}
    </div>
  );
};

export default PostsList;
