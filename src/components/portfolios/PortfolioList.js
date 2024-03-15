import Image from 'next/image'
import { getContent } from '@/utils';
import Link from 'next/link';

export function PortfolioList() {
  const portfolios = getContent("portfolios");

  return (
    <div className="content-container">
      <div className="content-section-title">Portfolios</div>
      <div className="content-list">
          {portfolios.map(item =>
            <div className="content-item" key={item.slug}>
              <div className="image-container">
                  <Image 
                  src={item.coverImage} 
                  fill={true}
                  sizes="(max-width: 768px)"
                  style={{objectFit: "cover"}}
                  alt={item.title} 
                  />
              </div>
              <div className="content-item-header">
                  <div>{item.title}</div>
                  <div>{item.description}</div>
                  <Link href={`portfolios/${item.slug}`}>See More...</Link>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}
