import path from "path";
import fs from "fs";

export default function HomePage({ message }) {
  return <div>{message}</div>;
}

export function getServerSideProps() {
  const data = JSON.parse(
    fs.readFileSync(path.resolve("./message.json"), "utf8")
  );

  return {
    props: {
      message: data.message,
    },
  };
}
