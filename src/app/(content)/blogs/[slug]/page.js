import { getContentBySlug, getContent } from "@/utils"

export function generateStaticParams() {
  const blogs = getContent("blogs");

  return blogs.map(blog =>({
    slug: blog.slug
  }));
}

export default async function BlogDetail({params}) {

  const blog = await getContentBySlug("blogs", params.slug);

  return (
    <>
      <div>
        Blog Data: {blog.title}, {blog.description}
      </div>

      <hr />

      <div dangerouslySetInnerHTML={{__html: blog.content}}></div>
    </>
  )
}