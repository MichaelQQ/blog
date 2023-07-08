const fs = require("fs");
const path = require("path");

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

const genSitemap = () => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) =>
    readPostFile(postsDirectory, filename)
  );

  const sitemapContent = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!--We manually set the two URLs we know already-->
  <url><loc>https://MichaelQQ.com</loc></url>
  <url><loc>https://MichaelQQ.com/blog</loc></url>
  ${posts.map(post => `<url><loc>https://MichaelQQ.com/blog/${encodeURI(post.path)}</loc></url>`).join('\n')}
</urlset>
  `

  fs.writeFile(path.join(process.cwd(), "public", "sitemap.xml"), sitemapContent, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  })
}

genSitemap()
