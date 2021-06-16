import path from "path";
import fs from "fs";

export default function handle(req, res) {
  const data = JSON.parse(
    fs.readFileSync(path.resolve("./message.json"), "utf8")
  );

  res.json({
    message: data.message,
  });
}
