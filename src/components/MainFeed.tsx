import Post from "@/types/post.type";
import AddPost from "./AddPost";
import PostsList from "./PostsList";

interface IMainFeed {
  posts?: Post[];
}

const MainFeed = ({ posts }: IMainFeed) => {
  return (
    <main className="flex-[0.5] flex flex-col gap-5">
      <AddPost />
      <PostsList posts={posts} />
    </main>
  );
};

export default MainFeed;
