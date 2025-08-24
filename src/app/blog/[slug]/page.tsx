import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"

import { Mdx } from "../../components/Mdx"

import { Metadata } from "next"
import { formatDate } from "src/lib/utils"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

async function getPageFromParams(slug: string) {
  const page = allPosts.find((page) => page.slugAsParams === slug)

  if (!page) {
    null
  }

  return page
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
 const { slug } = await params
 const page = await getPageFromParams(slug)

  if (!page) {
    return {}
  }


  return {
    title: page.title,
    metadataBase: new URL("https://matthewsandoval.com"),
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      type: "article",
      url: `https://matthewsandoval.com/blog${page.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const page = await getPageFromParams(slug)

  if (!page) {
    notFound()
  }

  return (
    <article className="container max-w-6xl py-6 lg:py-12">
      <div className="space-y-4">
        <h1 className="inline-block font-heading text-4xl lg:text-5xl">
          {page.title}
        </h1>
        {page.description && (
          <p className="text-xl text-muted-foreground">{page.description}</p>
        )}
        {page.date && (
          <p className="date">{formatDate(page.date)}</p>
        )}
      </div>
      <hr className="my-4" />
      <Mdx code={page.body.code} />
    </article>
  )
}