import { getContentBySlug, getContent } from "@/utils"

export function generateStaticParams() {
  const portfolios = getContent("portfolios");

  return portfolios.map(portfolio =>({
    slug: portfolio.slug
  }));
}


export default async function PortfolioDetail({params}) {
  const portfolio = await getContentBySlug("portfolios", params.slug);

  return (
    <>
      <div>
        Portfolio Data: {portfolio.title}, {portfolio.description}
      </div>

      <hr />

      <div dangerouslySetInnerHTML={{__html: portfolio.content}}></div>
    </>
  )
}