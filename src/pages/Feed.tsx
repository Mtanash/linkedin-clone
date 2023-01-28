import axiosInstance from "@/api/axiosInstance";
import Layout from "@/components/Layout";
import MainFeed from "@/components/MainFeed";
import Sidebar from "@/components/Sidebar";
import allPostsQuery from "@/queries/allPostsQuery";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Feed = () => {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: allPostsQuery,
  });

  return (
    <Layout>
      <section className="container mx-auto px-5 flex items-start mt-8 gap-5">
        <Sidebar />
        <MainFeed posts={data?.data} />
      </section>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </Layout>
  );
};

export default Feed;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["posts"], allPostsQuery);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
