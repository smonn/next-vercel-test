import path from "path";
import fs from "fs";

export default function handle(req, res) {
  const directory = path.join(process.cwd());

  console.log(".next dir", directory);
  console.log("files", fs.readdirSync(directory));
  console.log("");

  const data = JSON.parse(
    fs.readFileSync(path.join(directory, process.env.MESSAGE_FILE_NAME), "utf8")
  );

  res.json({
    message: data.message,
  });
}
