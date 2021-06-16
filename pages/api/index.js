import path from "path";
import fs from "fs";

export default function handle(req, res) {
  console.log("__dirname", __dirname);
  console.log("files", fs.readdirSync(__dirname));

  const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, process.env.MESSAGE_FILE_NAME), "utf8")
  );

  res.json({
    message: data.message,
  });
}
