import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function () {
  return (
    <Layout>
      <Head>
        <title>Cars list page</title>
      </Head>
      <h1>Cars list</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </Layout>
  );
}
