import path from "path";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export default function handle(req: NextApiRequest, res: NextApiResponse) {
  const directory = path.join(process.cwd(), "config");

  console.log("directory", directory);
  console.log("files", fs.readdirSync(directory));
  console.log("");

  const data = JSON.parse(
    fs.readFileSync(path.join(directory, process.env.MESSAGE_FILE_NAME), "utf8")
  );

  res.json({
    message: data.message,
  });
}
