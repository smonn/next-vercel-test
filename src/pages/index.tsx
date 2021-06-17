import { useEffect, useState } from "react";

export default function HomePage() {
  const [message, setMessage] = useState("loading...");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      });
  }, []);

  return <div>{message}</div>;
}
