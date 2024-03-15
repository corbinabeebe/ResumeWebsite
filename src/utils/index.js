import path from "path";
import fs from "fs";
import matter from "gray-matter"
import remarkGfm from "remark-gfm";
import { remark } from "remark";
import remarkHtml from "remark-html";


const contentDir = path.join(process.cwd(), "src", "assets");

export function getContent(folderName) {
  const contentPath = path.join(contentDir, folderName);
  const contentFileNames = fs.readdirSync(contentPath);

  // loop through each file name and create content files
  const contentFiles = contentFileNames.map(name => {
    const contentFile = fs.readFileSync(`${contentPath}/${name}`, "utf-8");

    // grab data and content of markdown from matter
    const {data, content} = matter(contentFile);
    data.slug = name.replace(/\.md$/, "")
    return {...data, content};
  })

  return contentFiles;
}

async function markdownToHTML(content) {
  const result = await remark()
    .use(remarkHtml)
    .use(remarkGfm)
    .process(content)

  return result.toString();
}

export async function getContentBySlug(slugDir, slug) {
  const fileName = slug + ".md";
  const filePath = path.join(contentDir, slugDir, fileName)
  const fileContent = fs.readFileSync(filePath);
  
  
  const {data, content} = matter(fileContent);
  data.slug = slug;
  const htmlCont = await markdownToHTML(content);

  return {...data, content: htmlCont};
}

export async function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
}


export function getResumeContent(fileName){
  const filePath = path.join(contentDir, "resume", fileName);
  console.log(filePath);
  const fileContent = fs.readFileSync(filePath);

  return fileContent.toString();
}