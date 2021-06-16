import path from "path";
import fs from "fs";

export default function handle(req, res) {
  console.log("__dirname", __dirname);
  console.log("files", fs.readdirSync(__dirname));
  console.log("");
  console.log("cwd", process.cwd());
  console.log("files", fs.readdirSync(process.cwd()));
  console.log("");

  const data = JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), ".next", process.env.MESSAGE_FILE_NAME),
      "utf8"
    )
  );

  res.json({
    message: data.message,
  });
}
