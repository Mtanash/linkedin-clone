import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, [router]);
  return (
    <>
      <Head>
        <title>Linkedin Clone</title>
        <meta name="description" content="Linkedin clone website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>Hello world!</main>
    </>
  );
}
