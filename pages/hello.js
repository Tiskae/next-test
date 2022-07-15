import Link from "next/link";
import Head from "next/head";

export default function () {
  return (
    <div>
      <Head>
        <title>Hello page</title>
      </Head>

      <h1>Hello there 👋🏻</h1>
      <Link href="/">
        <a>Back to home </a>
      </Link>
    </div>
  );
}
