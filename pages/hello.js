import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";

export default function () {
  return (
    <Layout>
      <div>
        <Head>
          <title>Hello page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Hello there 👋🏻</h1>
        <Link href="/">
          <a>Back to home </a>
        </Link>
      </div>
    </Layout>
  );
}
