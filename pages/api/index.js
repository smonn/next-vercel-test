import path from "path";
import fs from "fs";

export default function handle(req, res) {
  const data = JSON.parse(
    fs.readFileSync(
      path.resolve(`./.next/${process.env.MESSAGE_FILE_NAME}`),
      "utf8"
    )
  );

  res.json({
    message: data.message,
  });
}
