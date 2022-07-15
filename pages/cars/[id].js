import { useRouter } from "next/router";

export default function ({ cars }) {
  const router = useRouter();
  const { id } = router.query;
  const car = cars[id] || "No car";

  return (
    <div>
      <img
        src={car.url}
        alt={car.name}
        style={{ height: 400, objectFit: "cover" }}
      />
      <h1>Hello {car.name}</h1>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch("http://localhost:3000/data/cars.json");
  const cars = await data.json();
  //   console.log(cars);

  return {
    props: { cars: cars },
  };
}

export async function getStaticPaths() {
  const data = await fetch("http://localhost:3000/data/cars.json");
  const cars = await data.json();
  return {
    paths: Object.keys(cars).map((name) => `/cars/${name}`),
    fallback: false,
  };
}
