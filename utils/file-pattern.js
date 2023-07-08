import fs from "fs";
import path from "path";

const readPostFile = (postsDirectory, filename) => {
  const filePath = path.join(postsDirectory, filename);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const [, id, title, datetime] = /^(\d+)-(.+)\[(.+)\].md$/.exec(filename);

  return {
    id,
    title,
    datetime,
    summary: fileContents.slice(0, 100),
    path: `${id}-${title}`
  };
}

export default readPostFile
