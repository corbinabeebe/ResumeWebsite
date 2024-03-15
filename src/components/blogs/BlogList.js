import { getContent } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'

export function BlogList() {
  const blogs = getContent("blogs");
  
  return (
    <>
      <div className="content-section-title">Blogs</div>
      <div className="content-list">
        {blogs.map(item =>
          <div className="content-item" key={item.slug}>
            <div className="image-container">
              <Link href={`/blogs/${item.slug}`}>
                <Image 
                  src={item.coverImage} 
                  fill={true}
                  sizes="(max-width: 768px)"
                  style={{objectFit: "cover"}}
                  alt={item.title} 
                />
              </Link>
            </div>
            <div className="content-item-header">
              <div>{item.title}</div>
              <div>{item.description}</div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
