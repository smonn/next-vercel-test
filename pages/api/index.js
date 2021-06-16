import path from "path";
import fs from "fs";

export default function handle(req, res) {
  const nextDir = path.join(process.cwd(), ".next");

  console.log(".next dir", nextDir);
  console.log("files", fs.readdirSync(nextDir));
  console.log("");

  const data = JSON.parse(
    fs.readFileSync(path.join(nextDir, process.env.MESSAGE_FILE_NAME), "utf8")
  );

  res.json({
    message: data.message,
  });
}
