import Link from "next/link";
import Layout from "../components/layout";

export default function _404() {
  return (
    <Layout>
      <h1 style={{ textAlign: "center" }}>404 . Not found :(</h1>
      <Link href="/">
        <a
          style={{
            textAlign: "center",
            margin: "auto",
            backgroundColor: "pink",
          }}
        >
          Back to home
        </a>
      </Link>
    </Layout>
  );
}
