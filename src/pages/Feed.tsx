import Layout from "@/components/Layout";
import Sidebar from "@/components/Sidebar";

const Feed = () => {
  return (
    <Layout>
      <section className="container mx-auto px-5 flex items-start">
        <Sidebar />
      </section>
    </Layout>
  );
};

export default Feed;
