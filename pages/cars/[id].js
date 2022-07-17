import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/layout";

export default function ({ car }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <div style={{ marginTop: 10, textAlign: "center" }}>
        <img
          src={car.url}
          alt={car.name}
          style={{ width: "100%", objectFit: "cover" }}
        />
        <h1>Hello {car.name}</h1>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const data = await fetch("http://localhost:3000/data/cars.json");
  const cars = await data.json();
  return {
    props: { car: cars[id] },
  };
}

export async function getStaticPaths() {
  const data = await fetch("http://localhost:3000/data/cars.json");
  const cars = await data.json();
  return {
    // paths: Object.keys(cars).map((name) => `/cars/${name}`),
    paths: Object.keys(cars).map((name) => ({ params: { id: name } })),
    fallback: false,
  };
}
